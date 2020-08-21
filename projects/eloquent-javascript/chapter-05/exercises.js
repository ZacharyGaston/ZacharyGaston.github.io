// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * implement a function called flatten that takes a parameter of array. This array
 * will contain nested arrays/values and the purpose of this function is to flatten 
 * all arrays into a single layer array. Initialize a variable called flatten and
 * assign it to the array parameter using the native function of reduce upon it. Reduce
 * will take a callback function acting on the accumulator and the element. For the return,
 * return the accumulator concatenating the elements of the nested array using.concat. 
 * Have a seed of an empty array for the new collection and return the variable flattern
 * outside of the codeblock.
 * 
 * Input: Multilayered array
 * Output: Single layered array
 * Constraints: The function must take in an array with other arrays inside of it
 * and the function should take the elements nested inside and move them into the
 * single layered, outermost array. Once it finished, it must return that single layered
 * array.
 */ 
 
function flatten(array) {
  let flatten = array.reduce(function(accumulator, element){
    return accumulator.concat(element);
  }, []);
return flatten;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called loop that uses the parameters of startValue,
 * conditionalFunc, updatedFunc, and bodyFunc which all represent functions to
 * recreate a for loop. Inside the code block, create a for loop where the index is
 * assigned to the startValue, runs as long as the conditionalFunc is true, and assigns
 * the iteration value of update func on the iterated index.Within the for loop's code
 * block, call bodyFunc with our index values. 
 * 
 * Input: Value with three anon functions.
 * Output: none
 * Constraints: The function should take in a startValue and 3 functions.
 * 
 * 
 * 
 * 
 */
function loop(startValue, conditionalFunc, updatedFunc, bodyFunc) {
  for(let i = startValue; conditionalFunc(i); i = updatedFunc(i)){
    bodyFunc(i);
  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * implement a function called every accepting array and func as parameters. The 
 * purpose of this function is to run the passed function on every element in the 
 * array and return true only if every element passes and false if not the case. 
 * Create a for loop to iterate forward through the length of the array parameter
 * as well as applying the function test to each element. Create a conditional where
 * if the function test against the current array element does not pass, then
 * return false. If the conditional statement passes through the loop, then all 
 * element s are evaluated to be true when the function call tested them so return 
 * true outside the code block.
 * 
 * Input: array
 * Output: boolean value
 * Constraints: The function must take in array filled with elements as well as a 
 * testing function. The function must be able to run the test function passed as 
 * an argument upon each element inside of the passed array while determining if 
 * every test passed for the elements. If all of the elements pass, then a boolean
 * value of true should be returned. 
 */
function every(array, func) {
  for(let i = 0; i < array.length; i++){
    if(!func(array[i])){
      return false;
    }
  }
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * implement a function called dominantDirection accepting string as a parameter.
 * The purpose of this function is to determine which is the dominant direction 
 * in which a majority of characters should be written. Initialize a variable 
 * called count and assign it to a function called countBy() with the parameters
 * of string and char. To find the character code for a specific index, implement
 * themethods characterScript() and.codePointAt().If the script is found then 
 * return the script direction that is associated with it and if it is not found then
 * return none in string format. Outside of that, use the native filter function to 
 * create an array that will contain all of our passing tests and then count the name
 * strictly not equal to "none". If the length count is strictly equal to be 0 then
 * return the string of ltr. Outside of that codeblock, return the count having the 
 * native method of reduce act upon it. The parameters for reduce will be represented
 * by a, for the accumulator, and b for the count of the names. If the a's count is
 * greater than the b'scount then return the value at the name's key. 
 * 
 * Input: string
 * Output: string 
 * 
 */
 
function dominantDirection(string) {
let count = countBy(string, char => {
  let script = characterScript(char.codePointAt(0));
  return script ? script.direction : "none";
}).filter(({name}) => name != "none");
if(count.length === 0){
  return 'ltr';
}
return count.reduce((a,b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
