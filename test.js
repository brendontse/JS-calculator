var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("output").text(result);
  });

  var number1 = parseInt($("enter a number:"));
  var number2 = parseInt($("enter another number:"));
  var result = subtract(number1, number2);
  alert(result);

  var number1 = parseInt($("enter a number:"));
  var number2 = parseInt($("enter another number:"));
  var result = multiply(number1, number2);
  alert(result);

  var number1 = parseInt($("enter a number:"));
  var number2 = parseInt($("enter another number:"));
  alert(result);

});