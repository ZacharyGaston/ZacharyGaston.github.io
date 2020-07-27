// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    /**
     * For this exercise, we will need to use a for loop followed by a series of if-else-if chain conditional statements
     * Our starting condition for our foor loop will have our index declared with the let variable and having it assigned
     * to the number 1. Our stopping condition will utilize the < operator where our index will be less than 101. We need 
     * to stop at 101 because the number 100 needs to be included within the range of numbers we want to print "FizzBuzz",
     * "Fizz", and "Buzz" to the console. Lastly, our for loop will need an incrementor to count forwards through our range
     * of numbers. Our first conditonal statement will have our index be pit against the number 3 and 5 using the % operator.
     * This operator will exclusively give us a remainder when the for loop gets to a specific number and the division process
     * begins. When our remainders both strictly equal 0 and they are compared against each other using the (&&) operator
     * then the console will print "FizzBuzz" for that particular number. We will do the same for the following else-if conditional
     * statements where "Fizz" and "Buzz" will be printed to the console respectively. We will also use the not strictly operator, !==,
     * to say if the index number when divided by either 5 or 3 does not leave a remainder that is not strictly equal to 0.
     * Our final else statement will utilize our console.log that will print the values of i if those numbers do not produce
     * the outcomes we want. So, instead of printing "FizzBuzz", "Fizz", and "Buzz" the console will print the numerical value
     * at the time the loop occurs. 
     * 
     */

for (let i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    } else if(i % 5 === 0 && i % 3 !== 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}