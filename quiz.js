// variables
var correct = 0;

// prompt
var answer1 = prompt("What is the first letter of the alphabet? (lowercase)");
// console.log("the answer is:" + answer1);

// if statement
if ( answer1 === 'a' ) {
 correct += 1;
}

console.log("correct:" + correct);

document.write("<p>" + answer1 + "</p>");

var answer2 = prompt("What is the last letter of the alphabet? (lowercase)");
// console.log("the answer is:" + answer1);

// if statement
if ( answer2 === 'z' ) {
 correct += 1;
}

console.log("correct:" + correct);

// output results
// document.write("<p>write something to page...</p>");
document.write("<p>" + answer2 + "</p>");


var answer3 = prompt("What is the second letter of the alphabet? (lowercase)");
// console.log("the answer is:" + answer1);

// if statement
if ( answer3 === 'b' ) {
 correct += 1;
}

console.log("correct:" + correct);

// output results
// document.write("<p>write something to page...</p>");
document.write("<p>" + answer3 + "</p>");


var answer4 = prompt("What is the second to last letter of the alphabet? (lowercase)");
// console.log("the answer is:" + answer1);

// if statement
if ( answer4 === 'y' ) {
 correct += 1;
}

console.log("correct:" + correct);

// output results
// document.write("<p>write something to page...</p>");
document.write("<p>" + answer4 + "</p>");

var answer5 = prompt("What is the most frequently used letter of the alphabet? (lowercase)");
// console.log("the answer is:" + answer1);

// if statement
if ( answer5 === 'e' ) {
 correct += 1;
}

console.log("correct:" + correct);

// output results
// document.write("<p>write something to page...</p>");
document.write("<p>" + answer5 + "</p>");


console.log(correct);

if (correct === 5) {
  document.write("<p> You got 5 right </p>")
}
else if (correct === 4){
  document.write("<p> You got 4 right </p>")
}
else if (correct === 3){
  document.write("<p> You got 3 right </p>")
}
else if (correct === 2){
  document.write("<p> You got 2 right </p>")
}
else if (correct === 1){
  document.write("<p> You got 1 right </p>")
}
else if (correct === 1){
  document.write("<p> You got none right")
}
