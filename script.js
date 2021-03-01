var containerEle = document.body.querySelector(".container");
var number1 = prompt("Enter a number: ");
if(isNaN(number1)){var operator = prompt("Enter an operator: ")}
else{System.exit(0)}
var number2 = prompt("Enter a second number: ")
if(isNaN(number2)){output(number1 + operator + number2)}
else{System.exit(0)}