var x = document.getElementsByClassName("OrderButton");

for(var i =0; i<x.length; i++)
{
  x[i].addEventListener("click", OrderClick, false);
}
 
  var i = 0;
  var TableNo = Math.floor(Math.random()*10) + 1;
  var config = {
    apiKey: "AIzaSyC92HG8cQKzThhjWYinmIsj4LqgUR3dNCw",
    authDomain: "ostl-e3c98.firebaseapp.com",
    databaseURL: "https://ostl-e3c98.firebaseio.com",
    projectId: "ostl-e3c98",
    storageBucket: "ostl-e3c98.appspot.com",
    messagingSenderId: "1058048945680"
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