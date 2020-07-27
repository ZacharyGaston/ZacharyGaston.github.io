// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    /**
     * create a storage container called array and assign it to an empty array literal. Next lets create a conditional statement where we will compare
     * our start and end parameters of our range function. If our start is greater than our end, then we want to loop through our array using a for loop.
     * For this for loop we will want to have our index be assigned to start and be greater than our end starting at the last value using - 1. Then we will 
     * decrement so it can count backwards. Last we will push those values of our index into our array storage container. The second contional will start
     * with the keyword else if where we will compare if our start is less than our end. Then we will create a second for loop where we will assign a new
     * index called k to the start parameter, compare it to be less than our end  + 1 and then increment forward. Last we will push those k values into our array.
     * To complete the function, we will return our array outside of these for loops.
     * 
     * 
     */
    var array = [];
    if(start > end){
        for(var i = start; i > end - 1; i--){
            array.push(i);
        }
    } else if(start < end){
        for (var k = start; k < end + 1; k++){
            array.push(k);
        }
    }
    return array;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}