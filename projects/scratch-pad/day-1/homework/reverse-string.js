// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    //first we should create a storage container to store each character in the string
    
    let array = [];
    
   /**A for loop would be the ideal loop we would want and we want to start printing from the last index.
    *and stop when our i variable reaches the first index. The input parameter is the value we're using
    *so we will need to use the length property on it as well as starting at the end of its length which we do with -1.
    *We will need a decrementor to count backwards.
    *Then we should use .push to place our reversed characters into our storage container (Remember we do that by accessing
    *the input value with our i variable in our square brackets because currently those reversed characters are in our i) and then return the
    *array with the join method so that our characters would be joined together in a string format using("").
    */
    
    for(var i = input.length - 1; i >= 0; i--) {
      array.push(input[i]);
    }
    return array.join("");
    
    /**
     * The second way we can do this is by firstly using our .split() method on our input value to seperate each of the
     * strings characters into an array that will contain substrings. Next we would use our .reverse()method in order to 
     * reverse the order of our array filled with substrings. Finally, our .join() method will convert all of our substringed 
     * arrays back into a singular string.
     */
     
     // Our code would look like this: return input.split("").reverse().join("");
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}