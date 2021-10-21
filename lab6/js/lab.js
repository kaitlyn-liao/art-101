/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: October 19, 2021
 */

// Define Variables
myTransport = ['foot', 'car', 'bus', 'bike', 'plane'];
myMainRide = {
    make: "Toyota",
    model:  "Highland",
    color: "White",
    year: 2020,
    age: function(){
        return 2021 - age;
    }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "<br>");