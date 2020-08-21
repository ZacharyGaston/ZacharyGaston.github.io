////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * implement a function called range accepting the following parameters: a start, an end, and
 * a step that will determine the incrementation through the range. Initialize a 
 * variable called array and assign it to an empty array literal. Create an if/else-if
 * chain where we will test to see if the two parameters of start and end have the
 * same number value passed to them, and if they are, then return an empty array.
 * If our step parameter is greater than 0, then if it is a positive number then 
 * for loop to iterate forward at that step's count from the argument's start to the
 * argument's end. When finished iterating, push the values into the empty array
 * variable to be returned. For our default else, if the start and end are not the
 * same numerical value and sif step is not greater than 0, then for loop to iterate
 * backwards at that step's count from the argument's start to the argument's end, 
 * and push those iterated values in to the empty array variable to be returned. 
 * Return the array outside the codeblock.
 * 
 * Input: three number values
 * Output: an array
 * Constraints: Function should accept a start, an end, and a step as number
 * parameters. The function should generate an array containing the range between
 * the start and end numbers while being incremented by the step number if supplied.
 * The function should return the range of the array. The function should return 
 * an empty array if the start and end arguments passed are the same value.
 * 
 */
 
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if(start === end){
    return array;
  }else if(step > 0){
    for(let i = start; i <= end; i += step){
      array.push(i);
    }
  }else{
    for(let i = start; i >= end; i += step){
      array.push(i);
    }
  }
return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called sum accepting the parameter of array and returning
 * the sum of each value stored inside the array. Initialize a variable called
 * finalAnswer and assign it to the value of 0. Implement a for loop, iterating
 * forward through the length of our array. While iterating forward, the number
 * at each index of the array is assigned using the += operator to the finalAnswer
 * variable, acquiring our sum and saved to the variable. Return the finalAnswer 
 * outside the codeblock.
 * 
 * Input: array
 * Output: number value
 * Constraints: The sum function must accept any array and return the sum of each value
 * 
 */
  
function sum(array) {
  let finalAnswer = 0;
  for(let i = 0; i < array.length; i++){
    finalAnswer += array[i];
  }
return finalAnswer;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called reverseArray that will accept an array parameter
 * and return a new array with the original array's values in reverse. Initialize
 * a variable called rArray and assign it to an empty array literal. Create a conditional
 * statement setting our array parameter strictly equal to an array literal and if it does,
 * then return our rArray storage container. Else, Create a for loop iterating 
 * through the length's end of the array. Have i >= 0 and use a decrementor to count
 * backwards. Use the push method to move the indexed values into the rArray 
 * storage container. Return rArray outside the code block.
 * 
 * Input: array
 * Output: array
 * Constraints: The function must accept an array as an argument and reverse the 
 * elements of the array. It should return the new array with the array's values
 * in reverse order.
 * 
 * 
 */ 
function reverseArray(array) {
  let rArray = [];
  if(array === []){
    return rArray;
  }else{
    for(let i = array.length - 1; i >= 0; i--){
      rArray.push(array[i]);
    }
  }return rArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Implement a function called reverseArrayInPlace that will accept an array as a
 * parameter and return the arry in its reverse form. Initialize a variable called
 * length and assign it to the length of the array parameter. Create a for loop to 
 * iterate forward through the array parameter's length. Use the .splice method to 
 * locate the indexed values and move the elements of the array in its place but 
 * reversed one by one.
 * 
 * Input: array
 * Output: array
 * Constraints: The function should accept an array as the argument, and it should
 * reverse its elements. The function must return the same array but reversed. 
 * 
 * 
 */ 
 
function reverseArrayInPlace(array) {
  let length = array.length;
  for(let i = 0; i < length; i++){
    array.splice(i, 0, array[array.length - (i + 1)]);
  }
array.splice(length, array.length);
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Implement a function called arrayToList accepting array as its parameter. The 
 * Purpose of the function is to convert the elements of the array into a "list"
 * or in other words, returned in an object as key:value pairs.Create a variable
 * called list and assign it to the null datatype. This will represent when the 
 * passed array's elements have been fulfilled. Create a for loop to iterate 
 * in reverse through the contents. Now we are going to relocate the array's 
 * elements into key value pairs by reassigning the value of list at each iteration,
 * populating the next array[i] value as the nested list at the key which is going 
 * to be named "rest".. So, value and rest are our keys and array[i] and list are the
 * values. Return list outside the codeblock.
 * 
 * Input: array
 * Output: object
 * 
 */ 
function arrayToList(array) {
  let list = null;
  for(let i = array.length - 1; i >= 0; i--){
    list = {value: array[i],
            rest: list
  };
}
return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Implement a function called listToArray that will accept list as an argument
 * and returns the contents in array syntax. Initialize a variable called array
 * and assign it to an array literal. Create a for loop that will iterate 
 * forward through the list object that is passed in. Use the push method to 
 * append each value stored at the keys of the object list, to the array. Return
 * array outsie the codeblock.
 * 
 * Input: object
 * Output: array
 * 
 */
function listToArray(list) {
  let array = [];
  for(let node = list; node; node = node.rest){
    array.push(node.value);
  }
return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Implement a function called prepend accepting the parameters of value and list.
 * The purpose of this function is to add to the first position inside the array and
 * return the array with the added values passed inside. Return the object with value
 * in the front followed by the key value pair of rest and list. 
 * 
 * Input: Array, a value
 * Output: object
 * 
 * 
 */ 
 
function prepend(value, list) {
  return {value, rest: list};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Implement a function called nth accepting the parameters of list representing
 * the array and n representing the position value. The purpose of this function
 * is to return what is stored at the value's position inside of the list. Create
 * a chain of if/else-if conditional chain statements that will determine, first of
 * all if there is a value at that position that needs to be returned. If there is
 * not within the list then return undefined. If the position of our n is set strictly
 * equal to 0 the return the outermost value of the likst by returning the value
 * stored at the 0th "value". If neither of the conditions come into fruition then
 * retunr the nth function calling on the list key of rest that will move backwards
 * by 1 each time on call. 
 * 
 * Input: Array, number value
 * OutputL value
 * 
 */ 
function nth(list, n) {
  if(!list){
    return undefined;
  }else if(n === 0){
    return list.value;
  }else{
    return nth(list.rest, n - 1);
  }

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Implement a function called deepEqual accepting two values that can be of any 
 * datatype no matter how complex and determine if they deeplyEqual each other. 
 * Have the function return a boolean value based on the conditional's outcome. 
 * Initialize a variable called equal and assign it to the boolean value of true.
 * Create a conditional chain testing simple datatypes and complex datatypes against 
 * each other. If the value is not an object AND not strictly not equal to null then
 * run the nested conditional. If the property names and the length of the properties
 * are not equal then the objects are not deeplyEqual and have equal be reassigned to 
 * false. Create a for in loop that will iterate forward through the keys of each 
 * value of our object and compare the keys of argument's a nad b with a conditional.
 * If the keys do not equal all the way, then reassign equal to be false here as well.
 * For the simple values, if argument a strictly not equals argument b then reassign
 * equal to be false. Return equal outside the conditionl chain's codeblock. 
 * 
 * Input: two values: a, b,
 * Output: boolean value
 * Constraints:Function must accept two values of any datatype and of any complexity.
 * Function must test for simple datatypes to see if they strictly equal each other.
 * Function must test for complex datatypes to see whether if empty, with contents, 
 * or nested with other complex datatpes, and if the two are of not only the same
 * type but have exactly the same content. 
 * 
 */ 
function deepEqual(a, b) {
  let equal = true;
  if(typeof a === "object" && a !== null && typeof b ==="object" && b !== null){
    if(Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(b).length){
      equal = false;
    }
    for(let key in a){
      if(!deepEqual(a[key], b[key])){
        equal = false;
      }
    }
  }else if(a !== b){
    equal = false;
  }
return equal;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
