// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

/**
 * set a conditional statemen where if the n param is negative then return
 * null. Otherwise, have our base case stop when the number argument passed
 * becomes equal to 0. Have the recursive call return the n argument * factorial(n - 1);
 * This will decrease the value of n upon each call until equaling 0. 
 */
var factorial = function(n) {
  if(n < 0){
    return null;
  } else if(n === 0){
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

/**
 * Create conditional cases where if the length of the array is strictly equal
 * to 0 then return 0 when the array is empty. Have a cautionary conditional
 * where if the array's length strictly equals 1 then return the first index.
 * For the recursive call, if the array is not empty then return the 0th index
 * and it to the result of sum calling array while slicing 1 at each call.
 * 
 */
var sum = function(array) {
  if(array.length === 1){
    return array[0];
  }else if(array.length === 0){
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
/**
 * Base case will be if n strictly equals 0 then n will be even returning true.
 * Have a conditional if n strictly equals 1 for our odd numbers returning false.
 * Our recursive call is if n is not equal to either 1 or 0 then it would subtract
 * two from n and run the function call again until it's equal to either 1 or 0.
 * return isEven calling n+ 2 otherwise.
 */
var isEven = function(n) {
  if(n === 1){
    return false;
  }else if (n === 0){
    return true;
  }else if(n > 0){
    return isEven(n - 2);
  }else{
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

/**
 * If the case for our n is greater than 0 then return n - 1 + sumBelow(n - 1);
 * to recursively call if the n argument ends up positive. If the n argument's
 * value strictly equals 0 then return 0. Otherwise if the n arument is negative,
 * then recursively call by returning n + 1 + sumBelow(n + 1); to add value to the 
 * negative argument.
 */
var sumBelow = function(n) {
  if (n > 0){
    return n - 1 + sumBelow(n - 1);
  }else if( n === 0){
    return 0;
  }else{
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

/**
 * First, add an extra parameter of result and assign it to an empty array literal.
 * Begin your conditionals by if having x being greater than y, then have a
 * nested conditional of x being subtracted by 1 and strictly equaling y returning
 * the result. Outside of the codeblock we will push those x-1 values into our result
 * and recursively call returning our range calling (x - 1, y, result). Else if x
 * strictly equals y then return result and the function is done. Else if x+1 strictly
 * equals y then return result and outside of the codeblock, push x+1 into result 
 * and return our recursive call of range calling (x + 1, y, result). 
 */
var range = function(x, y, result = []) {
  if(x > y){
    if(x - 1 === y){
      return result;
    }
    result.push(x - 1);
    return range(x - 1, y, result);
  }else if(x === y){
    return result;
  }else{
    if(x + 1 === y){
      return result;
    }
    result.push(x + 1);
    return range(x + 1, y, result);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

/**
 * Our base case will be if the exponent is 0 then return 1. For our recursive calls
 * if our exponent argument passed is neither a negative value or 0, then we are 
 * going to mulitply our base param by the exponent and have our function call with the
 * new base and exponent parameters that will be subtracted by 1 each call. Otherwise,
 * if the exponent is negative, then return 1 divided by base multiplied by exponent
 * where we will call our base and exp + 1 and use .toFixed(4). The .toFixed()returns a 
 * string representation of numObj that does not use exponential notation and has exactly 
 * digits digits after the decimal place. The number is rounded if necessary, and the 
 * fractional part is padded with zeros if necessary so that it has the specified length.
 * 
 */
 
var exponent = function(base, exp) {
  if(exp === 0){
    return 1; 
  }else if(exp > 0){
    return base * exponent(base, exp - 1);
  }else{
    return 1 / base * exponent(base, exp + 1).toFixed(4);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

/**
 * For our base case, if n is strictly equal to 1 then return true for it is the 
 * powerOfTwo we are looking for. If n is less than 1 then return false. Otherwise,
 * recursively call where if the result is neither less or equal to 1 and return 
 * powerOfTwo calling on the division of n and 2 until the resulting n is either less
 * than 1 or equal to 1, resolving our boolean conditions.
 * 
 */
var powerOfTwo = function(n) {
  if (n === 1){
    return true; 
  }else if (n < 1){
    return false;
  }else{
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that accepts a string a reverses it.

/**
 * For our base case, if there are no letters within our string literal then 
 * return an empty string. Otherwise, recursively call by returning reverse calling
 * on our string parameter using the .substr(1) which will return a string at the 
 * beginning of our specified location and concatenate it with string using the 
 * charAt method where we want the character at 0.
 * 
 */
var reverse = function(string) {
  if(string === ""){
    return "";
  }
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.

/**
 * First, create a variable called pString and assign it to our parameter. 
 * Next create a conditional where if the length of our pstring is strictly 
 * equal to either 1 or 0 then return true. Else if the index at 0 of pur pString
 * set at Uppercase values == the end length of our pString that's also set to uppercase
 * then recursively call by returning palindrome calling on pString slicing at 1 and 
 * at the end's length of pString. Use .replace to account for the spaces leftover after
 * deleting characters. This will ultimately function if the first character of the string
 * and the last character of the string are the same, slicing the beginning and the end 
 * to keep the comparison at both ends going until 2 characters do not match making it false
 * or it runs out of characters returning true.
 * 
 */
var palindrome = function(string) {
  let pString = string;
  if(pString.length === 1 || pString.length === 0){
    return true;
  }else if (pString[0].toUpperCase() == pString[pString.length - 1].toUpperCase()){
    return palindrome(pString.slice(1, pString.length - 1).replace(" ", ""));
  }else{
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

/**
 * Set our base case to be if y is strictly equal to 0 and return 0. Else if
 * y is greater than 0 then recursivly call by having x added to multiply calling
 * on x, followed by y being subtracted by 1 on each call. Else if y is less than 0,
 * then recursivly call a negative multiply calling on x, and a negative y parameter.
 */
var multiply = function(x, y) {
  if(y === 0){
    return 0;
  }else if(y > 0){
    return x + multiply(x, y - 1);
  }else if (y < 0){
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

/**
 * For our base case, if the lengths of our two string parameters are both 
 * empty(striclty equal to 0) then return true. Else, we are going to compare
 * the first indices of both parameters and set them strictly equal to each other.
 * And we're going to begin our recursive call by returning compareStr calling
 * on each parameter using.substr(1). This will continue to compare each character
 * of the string unitl either of the parameters do not match up or there are no
 * more characters to compare. Returning false outside of this is needed if the 
 * recursive call ends up having strings that are not identical.
 */
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0){
    return true;
  }else if (str1[0] === str2[0]){
    return compareStr(str1.substr(1), str2.substr(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

/**
 * First, add an extra parameter of result and assign it to an empty array literal.
 * Next, for our base case if our str parameter does not have an index at 0 using the
 * bang operator then return result. Else, use the result parameter and push the index
 * at 0 of our str parameter. Recursively call by returning createArray calling on 
 * str parameter and slicing after 1, followed by calling on our result param. This will
 * push the first character of the string into the first index of the array. 
 * 
 */
 
var createArray = function(str, result = []){
  if(!str[0]){
    return result;
  }else{
    result.push(str[0]);
    return createArray(str.slice(1), result);
  }
};

// 17. Reverse the order of an array

/**
 * First, add an extra parameter of result and assign it to an empty array literal.
 * Next create a conditional where if, using the ! operator, our array at index 0 is
 * not there then return the result. Outside of that have result use the unshift method
 * on the 0th index of our array. Recursively call reverseArr where we will splice(1)
 * and call on the result. This will put all the characters we want in the beginning
 * of the array making them reverse.
 */
 
var reverseArr = function (array, result = []) {
  if(!array[0]){
    return result;
  }
  result.unshift(array[0]);
  return reverseArr(array.splice(1), result);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

/**
 * First, add an extra parameter of result and assign it to an empty array literal.
 * Create a conditional where if the length is strictly equal to 0 then return the
 * result parameter. Otherwise have result use the push method on the value parameter
 * and for our recursive call, have buildList call on value, length being subtracted by
 * 1 for each call and result. This function, when passing in the arguments, will have 
 * the value represent populating the element of the array while the length representing 
 * the number of times that value should be generated or the number of elements of that
 * array will be that said value. 
 * 
 */
 
var buildList = function(value, length, result = []) {
  if(length === 0){
    return result;
  }
  result.push(value);
  return buildList(value, length - 1, result);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

/**
 * First, add an extra parameter of count and assign it to 0. For our base case,
 * if the length of the array is empty by setting it strictly equal to 0, then
 * return the count param. Else if the first index of our array param is strictly
 * equal to the value param then have the count increment. Then return our recursive call
 * using countOccurrence calling array and splicing at 1, followed by the value and the count.
 * Do the same outside of that code block starting off with an else statement. 
 * This will allow each element of the array to be checked one at a time, until the base
 * case is met, returning the final value of the array. 
 */
 
var countOccurrence = function(array, value, count = 0) {
  if(array.length === 0){
    return count;
  }
  else if(array[0] === value){
    count++;
    return countOccurrence(array.splice(1), value, count);
  }else{
    return countOccurrence(array.splice(1), value, count);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

/**
 * First, add an extra parameter of result and assign it to an empty array literal.
 * Next, create a conditional where if the length of the array is strictly equal to 0
 * then return the result param. Else, have the result param use the push method
 * where we push the values of callback calling on the first index of our array.
 * Return with our recursive call using rMap calling an array where the slice method
 * will be implemented slicing 1 at each call, followed by the callback and result. 
 * This will allow the arguments in the function to be called on each element individually
 * while them into our result param/array until the base case is met where the length 
 * is equal to 0.
 */

var rMap = function(array, callback, result = []) {
  if(array.length === 0){
    return result;
  }else{
    result.push(callback(array[0]));
    return rMap(array.slice(1), callback, result);
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

/**
 * For our base case if the number is less than 0 then return null for there are 
 * no indices below zero. If our n param is strictle equal to 1 then retrun 1. Else,
 * recursively call by returning nthFibo calling (n - 1) + nthFibo(n - 2), so if the number
 * value passed is greater than 0 and is not equal to 1 yet, That will lower the value by
 * 1 as well as lowering it by 2 when adding both results together. This continues until
 * one of the base case conditions are met, returning the value at the nth index.
 * 
 */
 
var nthFibo = function(n) {
  if(n < 0){
    return null;
  }
  if(n === 1){
    return 1;
  }else{
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/**
 * Crete a variable called array and assign it to an empty array literal.
 * Create the base case where if the length of the input is empty then return
 * the array varaible. For our recursive call if the array passed is not empty, then 
 * use the push method to add the element at the 0th index. This will also be altered
 * by the .toUpperCase method and all will be pushed in to our storage container. 
 * Have our array be reassigned to the current value concatenated with the result of the 
 * capitalizeWords function call with the first element of the input string being sliced
 * off at each call until there are no more strings left in the array to capitalize and the
 * base case is met. 
 */
var capitalizeWords = function(input) {
  let array = [];
  if(input.length === 0){
    return array;
  }
  array.push(input[0].toUpperCase());
  array =array.concat(capitalizeWords(input.slice(1)));
  return array;
};
  

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

/**
 * Crete a variable called arr and assign it to an empty array literal. Next,
 * if the array parameter's length is empty then return arr. Otherwise for our 
 * recursive call, we will begin by having arr use the push method to add the element
 * at the 0th index of the array. The firt character will be altered using .charAt(0)
 * as well as the .toUpperCase method. Concatenate that with the slice method slicing 
 * after the first index so we can have the first character. Reassign the value of arr
 * to be the current value using the concat method and the result of the function call
 * passing in array with the first element of the array being sliced
 * off at each call until there are no more strings left in the array to capitalize and the
 * base case is met. 
 * 
 */
 
var capitalizeFirst = function(array) {
  let arr = [];
  if(!array.length){
    return arr;
  }
  arr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  arr = arr.concat(capitalizeFirst(array.slice(1)));
  return arr;
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

/**
 * initialize a variable called countCall and assign it to the Array.from(arguments)
 * methodto create a copy of the passed in string and object arguments. For our base case
 * if the length of the str param is empty then return the empty collection. If the
 * first character at the 0th index does not exist within the collection then add one
 * and assign it the value of 1 which will represent the number of times that character has
 * occurred. Else if the first character at the 0th index of the string doesn't exist 
 * within the collection, then increment the value by 1. For the recursive call, return
 * letterTally calling on the first character of the string and slicing off at each call
 * and the current value of countCall. This continues until there are no characters left
 * and the base case is met, allowing the function to return the value of our collection.
 * 
 */
 
var letterTally = function(str, obj) {
let countCall = Array.from(arguments)[1] || {};

if(str.length === 0){
  return countCall;
}
if(!countCall[str[0]]){
  countCall[str[0]] = 1;
}
else{
  countCall[str[0]]++;
}
return letterTally(str.slice(1), countCall);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

/**
 * Crete a variable called array and assign it to an empty array literal. For our
 * base case if the length of the list is strictly equal to 0 then return array. 
 * For the recursive call, first create a conditional where if the first index of the
 * list param is not the same as the next element of the list argument [0+1] then
 * have the list at the 0th index be pushed inside the array. Return the array using
 * the concat method where we will also use compress to call on the list slicing at 1.
 * 
 */
 
var compress = function(list) {
  let array = [];
  if(list.length === 0){
    return array;
  }
  if(list[0] !== list[0 + 1]){
    array.push(list[0]);
  }
  return array.concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

/**
 * For our base case if the length of the array is strictly equal to 0 then return
 * array. Else for our recursive calls if the character at the first index of the array
 * AND the character in the next index are bothe strictly equal to 0 hence (0,0), then
 * return the function minimizeZeroes calling where the additional zero will be sliced off. 
 * If there is not a scenario where 2 zeroes side by side exist, then return the character
 * at the 1st index of the array and concatenate that with the result of the function call
 * of minimizeZeroes with the next element of the array that will not be equal to 0.
 * 
 */
 
var minimizeZeroes = function(array) {
  if(array.length === 0){
    return array;
  }else if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0){
    return minimizeZeroes(array.slice(1));
  }else{
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

/**
 * For our base case if the length of the array is strictly equal to 0 then return
 * array. If the 0th index's value is somehow less than 0 than make that negative
 * value positive by making our array have a negtive sign on it to make it positive. If the value of the
 * first index of the array is greater than 0 then that positive value would indicate
 * that we want to reverse the sign of the value at that index to make it negative.
 * For our recursive call return the alternateSigns function call, where we will be slicing
 * off the first 2 index values at each call. These values will be previously concatenated
 * with the other sliced values and this allows the function to reassign positive and
 * negative signs in pairs of two values at one time until the base case is met and the parray is 
 * empty. 
 */
 
var alternateSign = function(array) {
  if(array.length === 0){
    return array;
  }if(array[0] < 0){
    array[0] = -array[0];
  }if (array[1] > 0){
    array[1] = -array[1];
  }return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

/**
 * Create a variable called object and assign it to the value of an object where
 * the keys are the numerical representation of 0-9 and the values or the string version.
 * Create an variable called newString and assign it to an empty string. For the base
 * case if the length of the str strictly equals 0 then return newString. else if the
 * string passed in is not empty then create a variable called current and set it
 * equal to the first character of a string using charAt(0). If the current value exist
 * as a key in the object update the value of newString while storing the value at that
 * number key within the object. If the fist character doesn't exist as a key in the
 * object, and it is not a number then add it to the newString as a letter, space or
 * character. Recursive case equals the return of newString concatenated to the 
 * numToText function call, where each call will remove the first character of the 
 * string through slice method. This allows the function call to test each character 
 * of the string until an occurrence of a number is found and replaces it with the string
 * equivalent. When it meets its goal, no characters left in the string, then the base case
 * is met and returns the final value of the newString.
 * 
 */
var numToText = function(str) {
  let object = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eighr', 9: 'nine'};
 let newString = "";
 if(str.length === 0){
   return newString;
 }
 else {
   let current = str.charAt(0);
 if(object[current]){
   newString = newString + object[current];
 }
 else{
   newString = newString + current;
 }
return newString + numToText(str.slice(1)); 
 }
};
 
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
