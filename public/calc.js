$(document).ready(function() {
var currentNum = '0';
var previousNum = 0;
var operator = null;
var result = 0;
updateDisplay(result);

  $('#clear').click(function(e){
    result = 0;
    currentNum = '';
    $('#display').text('');
    updateDisplay(currentNum);
  })

  $('.number').click(function(e){
  var numPress = $(this).text();
    if (currentNum === '0'){
    currentNum = numPress;
    } else {
    currentNum = currentNum + numPress;
    }
  $('#display').text(currentNum);
  updateDisplay(currentNum);
  })

  $('.operator').click(function(e) {
  var oper = $(this).text();
    if (oper === 'X'){
    oper = '*';
     previousNum = parseFloat(currentNum);
     operator = oper;
     currentNum = '';
    } else if (oper === '+' || oper === '-' || oper === '/') {
     previousNum = parseFloat(currentNum);
     operator = oper;
     currentNum = '';
    } else if (oper === '.'){
    currentNum +='.';
    } else if (oper ==='='){
    currentNum = operate(previousNum, currentNum, operator);
    operator = null;
    updateDisplay(currentNum);
    }
  })

  $('#row2').children().eq(1).click(function(e){
  var negator = $(this).text();
  currentNum *=-1;
  updateDisplay(currentNum);
  })

 $('#row2').children().eq(2).click(function(e){
   var per = $(this).text();
   currentNum = currentNum/100;
   updateDisplay(currentNum);
  })

});

var updateDisplay = function(displayValue) {
  $('#display').text(displayValue);
};

var operate = function(num1, num2, operator) {
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if (operator === '+') return num1 + num2;
if (operator === '-') return num1 - num2;
if (operator === '*') return num1 * num2;
if (operator === '/') return num1/num2;
 }
