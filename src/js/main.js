var app = () =>
  console.log(
    "This super cool app was started at ${Date.now().toLocaleString()}!"
  );

var myApp = app();

//parse the JSON string given by the url and pass it to the callback fn
function getList(url, callback) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var myObj = JSON.parse(this.responseText);
      callback(myObj);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
//take each object in the array and write the username in a div
// with the id =  to the index
function myFunction(response) {
  var arrlen = response.length;
  var element = document.getElementById("root");
  for(let i= 0; i < arrlen; i++) {
    var div = document.createElement("div");
    div.setAttribute("id", i);
    element.appendChild(div);
    document.getElementById(i).innerHTML ="Rank#:"+ i + " User: " + response[i].username + " alltime points: "+ response[i].alltime +","+ " Points last 30 days: " + response[i].recent;
  }
}
