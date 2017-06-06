// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var stringToNumber = cardNumber.split('');
  var secondNumber = Number(stringToNumber[1]);
  if(secondNumber >= 8 && stringToNumber.length === 14) {
    return 'The Diner\'s Club';
  }
  else if(secondNumber === 4 || secondNumber === 7 && stringToNumber.length === 15) {
    return 'The American Express';
  }
};

console.log(detectNetwork('38456789012345'));

