// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //using the return keyword, return Array.isArray where we will be using our input value as its test. This will determine and decipher if
    //our value is an array.
    
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    /**
     * For this exercise, we will utilise a series of if-else-if conditional statements. Our first if conditional will test if our value parameter is 
     * a date and we will do this by using the instanceof keyword. We will have it return false because we are looking for an object. Our next conditional
     * is an else-if statement comparing our value parameter to be strictly equal to null where we will also return false. Our second else if will be testing 
     * our array, where we will utilize the Array.isArray on our value parameter and return false here as well. Next our second conditional statement will
     * begin here where we utilize the keyword typeof on our value parameter and have it to be strictly equal to a string called object. This conditional
     * will return true for this is what we want. Last is our else statement where anything else used as an argument will return false.
     */
     
    if(value instanceof Date){
        return false;
    }else if (value === null){
        return false;
    }else if(Array.isArray(value)){
        return false;
    }if(typeof value === "object") {
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    /**
     * For this exercise, we will utilise a series of if-else-if conditional statements. Our first if conditional will test if our value parameter is 
     * a date and we will do this by using the instanceof keyword. We will have it return false because we are looking for a collection. Our next conditional
     * is an else-if statement comparing our value parameter to be strictly equal to null where we will also return false. Our second else if will be testing 
     * our array, where we will utilize the Array.isArray on our value parameter and return true for our first collection requirement. Next our second 
     * conditional statement will begin here where we utilize the keyword typeof on our value parameter and have it to be strictly equal to a string called object.
     * This conditional will return true for this is our second collection that we want. Last is our else statement where anything else used as an argument will return false.
     */
     
    if(value instanceof Date){
        return false;
    }else if (value === null){
        return false;
    }else if (Array.isArray(value)){
        return true;
    }if(typeof value === "object"){
        return true;
    }else{
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    /**
     * For this exercise we will use a plethora of only if conditional statements where given an input value we want the function to return said value
     * as a string datatype. To start, we will have our first if statement be used on the method we use to decipher arrays. So, if our input parameter of 
     * value is an array using Array.isArray, then we wwill use the return keyword where we will be reutrning a string called array. Our next if conditional
     * will test to see if our value parameter is a Date using the instanceof keyword and we will return date as a string. Our third if conditional will use the
     * typeof keyword to see if our value is a string when it is strictly assigned to "string"; then we will return "string". Our fourth if conditional, will
     * test our value parameter when it is strictly equal to null and return null in string format. Our fifth through ninth if conditionals, will see if when using the typeof
     * keyword on our value parameter and it is strictly assigned to the following strings: "object", "undefined", "boolean", "function", and "number" then it will return
     * the strings of "object", "undefined", "boolean", "function", and "number" respective to their conditonals. 
     * 
     */ 
    
    if(Array.isArray(value)){
        return "array";
    }
    if(value instanceof Date){
        return "date";
    }
    if(typeof value === "string"){
        return "string";
    }
    if(value === null){
        return "null";
    }
    if(typeof value === "object"){
        return "object";
    }
    if(typeof value === "undefined"){
        return "undefined";
    }
    if(typeof value === "boolean"){
        return "boolean";
    }
    if(typeof value === "function"){
        return "function";
    }
    if(typeof value === "number"){
        return "number";
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
