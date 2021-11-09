/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: November 8, 2021
 */

// create buttons using jQuery 
$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

// on click change the css
$("#c-button").click(function(){
  $(this).parent().toggleClass("after-click");
})

$("#p-button").click(function(){
  $(this).parent().toggleClass("after-click");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("after-click");
})
