"use strict";

//Create an array from the #typewriter
//Use length on the array to get the amount of characters
//Create const charAmount from that
//Use indexOf ++

const theText = document.querySelector("#typewriter").innerHTML;
console.log(theText);
/*const theArrayOfText = theText.split();
console.log(theArrayOfText);*/
let iterator;
let maxNumberOfIteration;
let newText;

init();
function init() {
  maxNumberOfIteration = theText.length + 1;
  //iterator = theText.indexOf("T");
  iterator = 0;
  loop();
}

function loop() {
  iterator++;
  if (iterator < maxNumberOfIteration) {
    console.log("it works");
    newText = theText.slice(0, iterator);
    console.log(newText);
    setTimeout(loop, 200);
    printNewText();
  }
}

function printNewText() {
  document.querySelector("#typewriter").innerHTML = newText;
}
