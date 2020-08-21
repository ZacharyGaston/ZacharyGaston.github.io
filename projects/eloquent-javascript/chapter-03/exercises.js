////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Implement a function called min accepting two number values as parameters and return
 * the minimum between the two parameters. Within the codeblock of the function,
 * create a return statement utilizing the Math.min static function acting on our num1
 * and num2 parameters. The static function Math.min() returns the lowest-valued number 
 * passed into it, or NaN if any parameter isn't a number and can't be converted into one.
 * 
 * Input: 2 number values
 * Output: 1 number value
 * Constraints: Function must accept 2 number values as arguments and must return
 * the minimum of the two no matter how those arguments are passed into it or
 * whether or not either of the values are positive, negative, or the same value. 
 * 
 */
function min(num1, num2) {
  return Math.min(num1, num2);

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called isEven that will accept either a positive or negative
 * number value and returns a boolean value of true if it is an even number value and a
 * boolean value of false if it an odd number value. Create a series of if/else-if
 * conditional chain statements that compares the number parameter strictly equal against
 * 0, 1, and a negative situation, as well as a default else statement to catch any 
 * number that did not pass our condtionals. If the number is equal to 0, then it is
 * even and return true. If the number is equal to 1, then it is odd and return false.
 * If the number is less than 0, it is negative and should return the isEven function
 * calling on the negative of the number parameter. If none of our conditionals are true
 * then the return line will have the isEven function call the parameter num subtracted
 * by 2 until the num strictly equals either 1 or 0. This will then be tested by our 
 * conditionals evaluating to be either even/true or odd/false.
 * 
 * Input: Number Value
 * Output: Boolean Value
 * Constraints: The function should accept a number value that can be either positive 
 * or negative. The function's purpose is to evaluate if the number value isEven or not.
 * The function will return true if yes and false if not.
 * 
 */
function isEven(num) {
  if(num === 0){
    return true;
  }else if(num === 1){
    return false;
  }else if(num < 0){
    return isEven(-num);
  }else{
    return isEven(num - 2);
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called countChars that will accept a string and a character
 * as parameters and return the number of times that specific character exists within
 * the string. Initialize a variable called characterCount and assign to the value of 0.
 * Create a for loop iterating forward through the length of the string. Create an if
 * statement that will test the string accessing the index's value against the char. 
 * Both parameters will be modified by the .toUpperCase method and strictly equal to each
 * other. If the if statement evaluates to be true, then have characterCount be incremented.
 * Return the final value of characterCount outside the codeblock.
 * 
 * Inputs: two strings
 * Outputs: number value
 * Constraints: The function must accept a string and a character as its arguments. It
 * must search the string and count the number of times an occurring character exists.
 * It must return the count of the character as a number value.
 * 
 */
function countChars(string, character) {
let characterCount = 0;

for(let i = 0; i < string.length; i++){
  if(string[i].toUpperCase() === character.toUpperCase()){
    characterCount++;
  }
}
return characterCount;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called count Bs that will accept a string and return the 
 * number of occurrences that B appears in the string. Initialize a variable called bCount
 * and assign it to 0. Create a for loop to iterate forward through the length of the string.
 * Create a conditional statement that will test to see if the uppercase B against
 * each index's character in the string parameter. If our conditional statement 
 * evaluates to be true then increment our bCount. Return the final value of bCount
 * outside the codeblock. 
 * 
 * Input: string
 * Output: number value
 * Constraints: The function must accept a string value and count the number of times
 * an uppercase B appears within a string The function must return the count as a number 
 * value.
 * 
 */
function countBs(string) {
  let bCount = 0;
for(let i = 0; i < string.length; i++){
  if(string[i]. toUpperCase() === "B"){
    bCount++;
  }
}
return bCount;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
