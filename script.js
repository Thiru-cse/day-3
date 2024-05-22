// Step 01: Create a XHR Object
// var variableName = user defined your choice
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the Request
request.send();
// Step 04: Once requested data is there in server once data is successfully loaded
// Server response will be of 200 status code
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    // Whatever conversion has to be done here only
    // not outside
}

// inside the function: we are converting the data from server to client
// which is in string - object




















