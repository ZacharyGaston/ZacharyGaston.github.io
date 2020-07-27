// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
//Start off by using return so we can return the input value "string". Strings have a length property, so when we return
//string, tag on .length on the end of it completing our code with a semicolon.
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
/**First off we will start our coding statement with the return keyword.
 * Next we will use the .toLowerCase()method on our string parameter.
 * This method will allow us to convert all the elements within a string value to be lower cased
 * when returned.
 */
 
return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
/**First off we will start our coding statement with the return keyword.
 * Next we will use the .toUpperrCase()method on our string parameter.
 * This method will allow us to convert all the elements within a string value to be upper cased
 * when returned.
 */

return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
/**
 * First, along with our return statement, we will use the .split() method on our string value to have our characters converted into an array of substrings
 * Next we will use the .join() method with the "-" character inside the parenthesis so we can join 
 * our stirngs together with a dash.
 * Last we will use the method .toLocaleLowerCase() to enforce that the string that we are calling
 * is returned and converted to lower case according to any locale case mappings.
 */ 

return string.split(" ").join("-").toLocaleLowerCase();

//2nd way: Redux

/**
 * First, we are going to create a varible called moddedDashString and assign it the value of the string 
 * parameter. This will then be altered with the .replace() method, returning some or all matches of 
 * a pattern throguh a replacement. Then we'll use the .toLowerCase() method to have everything in the string
 * lower cased. Within our replace method, we will instill redux to ensure that the function recognizes every
 * space that is needed to be replaced, not just the first space the search comes across. The coding symbols
 * we will use is (/ /g, "-"). Lastly, create a return statement so that the result of our function can be 
 * accessed globally.
 */

//Example:
// var moddedSashString = string.replace(/ /g, "-").toLowerCase();
// return moddedSashString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

/**
 * The first thing we can do is assign both of our parameters, string and char, to the method
 * of .toUpperCase() so that they can be easily compared to equally.
 * Next, we will write out our conditional statement saying that whatever index is stationed at 0
 * of our string value, we will access that index and have it strictly equal to our char parameter
 * If they are both equal then return true. If not, then use our else keyword and return false
 */

string = string.toUpperCase();
char = char.toUpperCase();

if(string[0] === char){
    return true;
} else{
    return false;
}

//We can also do this another way by using our or operator: ||
//We start off with our conditional statement where we use the char parameters are strictly equal to
//to our toLowerCase method where in parenthesis we will use our string accessing our 0th index.
//Then using our || operator do the same thing but this time using toUpperCase. Finally, return true, 
//use an else statement, and return false.

//Example:
//  if(char === toLowerCase(string[0]) || char === toUpperCase(string[0])){
//     return true;
// } else {
//     return false;
// }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

/**
 * The first thing we can do is assign both of our parameters, string and char, to the method
 * of .toLowerrCase() so that the character ends of the string can be easily compared to equally.
 * Next, we will write out our conditional statement saying that whatever index is stationed at the 
 * ending length of our string value, we will access that index along with the length property set at - 1 
 * and have it strictly equal to our char parameter.
 * If they are both equal then return true. If not, then use our else keyword and return false
 */
 
 string = string.toLowerCase();
 char = char.toLowerCase();
 
 if(string[string.length -1] === char){
     return true;
 } else{
     return false;
 }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
// we can concat strings together use the + operator. 
//using a return statement use the + operator in between our parameters of stringOne and stringTwo

return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    
    // after initiating our return statement, use the join method on our variable args where we 
    //are joining them into a "".
    
    return args.join("");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//Create a conditional statement where we need to compare the lengths, using the length property, of our two parameters stringOne
//and stringTwo. We will also use the > operator to compare them respectively, and then use our return 
//keyword to dictate which one of our parameters would be returned when using our function. 

if(stringOne.length > stringTwo.length){
    return stringOne;
} else{
    return stringTwo;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
/**
 * Write out an if-else-if chain of coditional statements where we are trying to compare the two
 * parameters of stringOne and stringTwo. Our first conditional will be using the > operator where
 * stringTwo will be compared against stringOne and if in our return statement happens to be true then 1 will
 * be returned. Our first else if will compate our parameters using the > operator again but this time 
 * we will flip our parameters and our return statement will return -1 this time. Lastly, our final else if
 * will use the strictly equal operator comparing the two parameters and returning 0 as the result.
 * 
 */
 
if(stringTwo > stringOne){
    return 1;
}else if(stringOne > stringTwo){
    return -1;
} else if(stringOne === stringTwo){
    return 0;
}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

/**
 * Write out an if-else-if chain of coditional statements where we are trying to compare the two
 * parameters of stringOne and stringTwo. Our first conditional will be using the < operator where
 * stringOne will be compared against stringTwo and if in our return statement happens to be true then -1 will
 * be returned. Our first else if will compate our parameters using the > operator this time and 
 * we will keep our parameters in the same foramt and our return statement will return 1 this time. Lastly, our final else if
 * will use the strictly equal operator comparing the two parameters and returning 0 as the result.
 * 
 */
 
 if(stringOne < stringTwo){
     return -1;
 }else if(stringOne > stringTwo){
     return 1;
 }else if(stringOne === stringTwo){
     return 0;
 }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
