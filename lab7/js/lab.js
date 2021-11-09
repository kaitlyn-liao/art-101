/*
 * Author: Kaitlyn Liao <kayliao@ucsc.edu>
 * Created: October 25, 2021
 */

function sortUserName(){
    var userName = window.prompt("Hi. Please tell me your name so I can fix it XD");
    console.log('userName = ', userName);

    var nameArray = userName.split('');
    console.log('nameArray = ', nameArray);

    var nameArraySort = nameArray.sort();
    console.log('nameArraySort = ', nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log('nameSorted = ', nameSorted);
    return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");
