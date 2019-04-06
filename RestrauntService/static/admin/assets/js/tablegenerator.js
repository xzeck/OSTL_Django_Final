var RefButton = document.getElementById("RefreshButton")
RefButton.addEventListener('click', GenerateTable, false);

var config = {
  apiKey: "AIzaSyC92HG8cQKzThhjWYinmIsj4LqgUR3dNCw",
  authDomain: "ostl-e3c98.firebaseapp.com",
  databaseURL: "https://ostl-e3c98.firebaseio.com",
  projectId: "ostl-e3c98",
  storageBucket: "ostl-e3c98.appspot.com",
  messagingSenderId: "1058048945680"
};
firebase.initializeApp(config);



function GenerateTable(){
  var TableSearchNo = document.getElementById("SearchTable").value;
  var dbRef = firebase.database().ref().child("Table No " + TableSearchNo);
  dbRef.on("value", function(snapshot){
    //dataArray.push(snapshot.val());
      var content = "";
      snapshot.forEach(function(data)
    {
      var val = data.val();

      content += "<tr>";
      content += "<td>" + data.key+ "</td>";
      content += "<td>" + snapshot.key +"</td>";
      content += "<td>" + val.Order + "</td>";
      console.log(snapshot);
    });
    $("#OrderTable").append(content);
  });
}
