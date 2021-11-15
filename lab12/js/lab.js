/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: November 14, 2021
 */

// Return Gryffindor, Ravenclaw, Slytherin, Hufflepuff based on mod 4
function sortingHat(str) {
  // refactored code
  var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  return houses[str.length %4];


  // len = str.length;
  // mod = len % 4;
  // if (mod == 0){
  //   return "Gryffindor";
  // }
  // else if(mod == 1) {
  //   return "Ravenclaw";
  // }
  // else if(mod == 2) {
  //   return "Slytherin";
  // }
  // else if(mod == 3) {
  //   return "Hufflepuff";
  // }
}

var myButton = document.getElementById('button');
myButton.addEventListener('click', function() {
  var name = document.getElementById('input').value;
  console.log(name);
  var house = sortingHat(name);
  console.log(house);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  console.log(newText);
  document.getElementById('output').innerHTML = newText;

  document.getElementById("house").classList.add(house);
  console.log(document.getElementById("house").classList);
});
