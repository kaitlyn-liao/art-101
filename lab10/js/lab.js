/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: November 3, 2021
 */

function sortUserName(userName){
   var nameArray = userName.split('');
   console.log('nameArray = ', nameArray);

   var nameArraySort = nameArray.sort();
   console.log('nameArraySort = ', nameArraySort);

   var nameSorted = nameArraySort.join('');
   console.log('nameSorted = ', nameSorted);
   return nameSorted;
}

// find the button element
button = document.getElementById("submit");
console.log('button = ', button);
// find the form element
input = document.getElementById("name");
// find output element
output = document.getElementById("output");

// add an event listener to button
button.addEventListener("click", function(){
 // get value from name element
 var userName = input.value;
 // modify value - either sort
 var newName = sortUserName(userName);
 // put value in output element
 output.innerHTML = "<p id=output>" + newName + "</p>";
});

