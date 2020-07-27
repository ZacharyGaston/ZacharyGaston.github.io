// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    /**
     * Using the return keyword, return a function called greater. Give it the parameter called value. Inside of the function, use a return statement
     * to compare our base when it is less than our value.
     */
    return function greater(value){
        return base < value;
        
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
       
    /**
     * Using the return keyword, return a function called lessThan. Give it the parameter called value. Inside of the function, use a return statement
     * to compare our base when it is greater than our value.
     */
    
    return function lessThan(value){
        return base > value;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    /**
     * Using the return keyword, return an anonymous function and give it the parameter called char. Inside of the function we'll use a conditional 
     * statement where if our startsWith parameter is set to all uppercase letters using the .toUpperCase() method and is strictly equal to our char
     * parameter where the first index[0] is also set to uppercase then we want that value to return true. Else we will have the function return false.
     */
     
    return function(char){
        if (startsWith.toUpperCase() === char[0].toUpperCase()){
            return true;
        }else{
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
      /**
     * Using the return keyword, return an anonymous function and give it the parameter called char. Inside of the function we'll use a conditional 
     * statement where if our endsWith parameter is set to all uppercase letters using the .toUpperCase() method and is strictly equal to our char
     * parameter where the last character is also set to uppercase then we want that value to return true. To do this, we will haveto utilize the length property
     * as well as set the length to be - 1 so we can start at the end of the values we want to access.
     * Else we will have the function return false.
     */
     
    
    return function(char){
        if(endsWith.toUpperCase() === char[char.length - 1].toUpperCase()){
            return true;
    }else{
         return false;
    }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    /**
     * Create a storage container called newArray and assign it to an empty array literal. Use a for loop to loop through our strings. So, our index 
     * is going to be assigned to 0 for our starting condition, our stopping condition will have our index be less than the length of our strings, and we are 
     * going to increment through all of the strings possible. Then we will push those new values and we are going to use the keyword modify where we want those
     * strings to be modified when we access our index. Last we will return our newArray that will hold our new modified strings.
     * 
     */
    
    var newArray = [];
    for(var i = 0; i < strings.length; i++){
        newArray.push(modify(strings[i]));
    }
    
    return newArray;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    /**
     * First, let's create a for loop where we want to have our index assigned to 0 as our starting condition, our index to be less than the strings' 
     * length as our starting condition, and our incrementor to go through all the strings possible. Next, we will create a conditional statement where we 
     * will be using our test parameter on our strings accessing our index through bracket notation and if those values are strictly equal to be false, then 
     * we will have them return false. Otherwise we will return true outside of the for loop.
     * 
     */

for(var i = 0; i < strings.length; i++){
    if(test(strings[i]) === false){
    return false;
    }
}
    
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}