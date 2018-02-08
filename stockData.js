//json practice
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    
   //console.log(Object.entries(data));
   
       
    var string1 = "";
  

    for (var property1 in data["Time Series (1min)"]) {
     string1 = string1 + data["Time Series (1min)"][property1]["1. open"] + "\n";
    }
		
    console.log(string1);

    
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();
