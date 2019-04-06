var RefBt = document.getElementById("RefreshButton");
RefBt.addEventListener("click", GenerateTable, false);


function GenerateTable(){
  console.log("Hello");
  var config = {
    apiKey: "AIzaSyC92HG8cQKzThhjWYinmIsj4LqgUR3dNCw",
    authDomain: "ostl-e3c98.firebaseapp.com",
    databaseURL: "https://ostl-e3c98.firebaseio.com",
    projectId: "ostl-e3c98",
    storageBucket: "ostl-e3c98.appspot.com",
    messagingSenderId: "1058048945680"
  };

  firebase.initializeApp(config);

  var data;
  var dbRef = firerbase.database().ref();
  dbRef.on('child_added', function(snapshot){
    data = snapshot.val();
  });

  console.log(data);
}
