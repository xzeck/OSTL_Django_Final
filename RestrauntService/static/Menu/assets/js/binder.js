var x = document.getElementsByClassName("OrderButton");

for(var i =0; i<x.length; i++)
{
  x[i].addEventListener("click", OrderClick, false);
}
 
  var i = 0;
  var TableNo = Math.floor(Math.random()*10) + 1;

//Removing configuration for security reasons
var config = {
    apiKey: "firebase API key",
    authDomain: "firebase authDomain",
    databaseURL: "firebase Realtime DatabaseURL",
    projectId: "firebase Project ID",
    storageBucket: "firebase StorageBucket",
    messagingSenderId: "firebase messageSenderId"
  };
  firebase.initializeApp(config);

function OrderClick(){
  console.log(this.id);
  var ID = this.id; 
  var dbRef = firebase.database().ref();//.child("Table No " + TableNo.toString());
  dbRef.child("Table No " + TableNo.toString()).push().set({
    "OrderNo" : ++i,
    "Order" : ID
  });
  /*
  newRef.set({
    "OrderNo" : ++i,
    "Order" : ID
  });
*/
}
// <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
