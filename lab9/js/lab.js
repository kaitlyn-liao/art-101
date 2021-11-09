/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: November 1, 2021
 */

window.onload = function () {
   var outputEl = document.getElementById("outputEl");
   var new1El = document.createElement("p");

   new1El.innerHTML = "Something new.";
   new1El.id = "new-one";
   
   var new2El = document.createElement("p");
   
   new1El.id = "new-two";
   new2El.innerHTML = "Something else.";

   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);
   outputEl.className = "changed";
}
