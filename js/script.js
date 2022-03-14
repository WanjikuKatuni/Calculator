//backend logic

//add function
var add = function (num1, num2) {
  return num1 + num2;
};
//subtract function

var subtract = function (num1, num2) {
  return num1 - num2;
};

//multiplication
var multiply = function (num1, num2) {
  return num1 * num2;
};

//division
var division = function (num1, num2) {
  if (num2 === 0) {
    alert("non-zero number cannot be divided by 0");
  } else {
    return num1 / num2;
  }
};

//frontend logic
$(document). ready(function(){
    $("form#add").submit(function(event){
        event.preventDefault()
        var num1 = parseInt($("#add1").val())
        var num2 =parseInt($("#add2").val())
        alert(add(num1,num2))
    })
})
// var num1 = prompt("enter fist number");
// var num2 = prompt("enter other number");

// alert("the subtractuion is " + subtract(num1, num2));

// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter other number"));

// alert("the multiplication is " + multiply(num1, num2));

// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter other number"));

// alert("the division is " + division(num1, num2));
