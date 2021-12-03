/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: December 2, 2021
 */

var apiEndpoint = "http://api.friendlyrobot.fr/v1/nicknames/";

// Button event handler
var myButton = document.getElementById('api-button');
myButton.addEventListener('click', function() {
    getName();          // get the name input
    getNickname();      // make api call to get nicknames
});

// resets api endpoint link for next request
function reset(){
    apiEndpoint = "http://api.friendlyrobot.fr/v1/nicknames/";
}

// uses jquery to put text on html page
function putTextOnPage(text) {
    $("#output").html(text);
}

// get name from input field and concats name to api endpoint
function getName() {
    var name = document.getElementById('name').value;
    console.log(name);
    apiEndpoint = apiEndpoint.concat(name);
    console.log(apiEndpoint);
}

// makes api call and builds output string
function getNickname() {
    console.log("Getting Nickname");
    $.ajax({
        url: apiEndpoint,           // The URL for the request
        data: {},                   // The data to send (will be converted to a query string)
        type: "GET",                // Whether this is a POST or GET request
        dataType: "json",           // The type of data we expect back
        success: function (data) {  // If the request succeeds
            // turn data object into string just so we can display it
            var textData = JSON.stringify(data);
            console.log(textData);
            var str = "";           // build up a string to display on our page
            // check if data came back null aka no nicknames found
            if (data == null) {
                data = "Sorry we couldn't find any nicknames for your name. Submit another name."
                str += "<h3 style='color: red;'>" + data + "</h3>";
            }
            else {
                // get the individual values from data object
                var name = data.name;
                var nicknames_list = data.nicknames;
                // build string to display name typed in
                str += "<h2> Nicknames for&nbsp" + name + "</h2>";
                // loop though list of names and add them to output string
                for(i=0; i<nicknames_list.length; i++){
                    var nickname = nicknames_list[i].nickname;
                    str += "<h3>" + nickname + "</h3> ";
                }
            }
            putTextOnPage(str);            // put our html string on page
            console.log("Success");
            reset();
        }
    })
        // If the request fails
        .fail(function (xhr, status, errorThrown) {
            console.log("Failure.");
            putTextOnPage(errorThrown + " Status:" + status);
        })
    console.log("Asynchronously doing the next thing.");
}
