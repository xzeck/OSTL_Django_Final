var RefButton = document.getElementById("RefreshButton")
RefButton.addEventListener('click', GenerateTable, false);


var FetchAllButton = document.getElementById("FetchAllButton")
FetchAllButton.addEventListener('click', FetchAll, false);


var config = {

	//Removing Confirguration for security reasons
  apiKey: "Enter your firebase API key here",
  authDomain: "Enter your firebase AuthDomain",
  databaseURL: "Enter your firebase realtime database URL",
  projectId: "Enter your porject ID",
  storageBucket: "Enter your Storage Bucket",
  messagingSenderId: "Enter your Message sender ID"
};
firebase.initializeApp(config);
var OrderTable_InitContent  = $("#OrderTable").html();

function GenerateTable(){
var TableSearchNo = document.getElementById("SearchTable").value;
var dbRef = firebase.database().ref().child("Table No " + TableSearchNo);
var content = "";

  dbRef.on("value", function(snapshot){
      snapshot.forEach(function(data)
    {
      var val = data.val();
      content += "<tr>";
      content += "<td>" + data.key+ "</td>";
      content += "<td>" + val.OrderNo +"</td>";
      content += "<td>" + val.Order + "</td>";
      console.log(snapshot);
    });
    $("#OrderTable").html(OrderTable_InitContent + content);
  });
}

function FetchAll(){
  //var TableSearchNo = document.getElementById("SearchTable").value;
  var dbRef = firebase.database().ref();
  var OrderTableHTML;

  OrderTableHTML += "<tr>";
  OrderTableHTML += "<th> OrderID </th>";
  OrderTableHTML += "<th>Table No</th>";
  OrderTableHTML += "<th>OrderNo</th>";
  OrderTableHTML += "<th>Item</th>";
  $("#OrderTable").html(OrderTableHTML);

    dbRef.on("value", function(snapshot){
        snapshot.forEach(function(data){
      data.forEach(function(data_in){
        var val = data_in.val();
        var content = "";
        content += "<tr>";
        content += "<td>" + data_in.key+ "</td>";
        content += "<td>" + data.key + "</td>";
        content += "<td>" + val.OrderNo +"</td>";
        content += "<td>" + val.Order + "</td>";
        console.log(content);
        $("#OrderTable").append(content);
      });
    });

});

}
