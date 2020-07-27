// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  /**
   * For this exercise we want to loop over an array. To loop over arrays, it is best to use a for loop.
   * Then we should print our resulting values using console.log(). We start off our for loops by first
   * creating a variable for our index usually represented with var = i. Then we want the entire length of 
   * our array, and luckily for us arrays have length properties. So, by using the < operator we can set our 
   * index to be less than all of our array elements inside of it giving us all the values we need. Then, by using
   * a incrementor, we will be able to count forwrds until every last array value is counted and printed. When using
   * our console.log, we want to be sure to access those array values we stored inside of our index storage container
   * by using our [] notation after our parameter called array.
   */
  
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
    /**
   * For this exercise we want to loop over an array. To loop over arrays, it is best to use a for loop.
   * Then we should print our resulting values using console.log(). We start off our for loops by first
   * creating a variable for our index usually represented with var = i. Then we want the entire length of 
   * our array, but this time we want to start at the end of the length of our array. So after creating our 
   * storage container of var i we will assign it, using the = operator, to our array parameter and then using the 
   * .length property we will use - 1, indicating that we want our starting condition to be at the end of the array.
   * Our stopping condition will entail our index being greater than -1 because we want those values to be obtained
   * when the loop starts to count in reverse. A decrementor will allow us to count backwards until every last array value 
   * is counted and printed. When using our console.log, we want to be sure to access those array values we stored inside of
   * our index storage container by using our [] notation after our parameter called array.
   */
  
  for (var i = array.length - 1; i > -1; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
   /**
   * For this exercise we want to loop over an object. To loop over objects, it is best to use a for-in loop.
   * Then we should print our resulting values using console.log() and push them into an array. We start off
   * by first creating a storage container called var array in order to store our final values when we push them
   * and we will assign our variable to an empty set of of square brackets i.e. []. Next, we will start our for-in loop
   * using the important keywords of for(var key in object) so we can refer to our unknown key and dictate which object
   * we want to loop over. Inside our code block, our consolde.log statement will be written there where we will then 
   * access the keys of our object parameter using bracket notation surrounding our keyword called key.Then we will use 
   * the push method on the storage container we created called array so we can push those keys into them. Lastly,
   * we will need a return statement to return our array. Remember that if you have a return statement inside a loop of a function,
   * it is going to break away from the loop, preventing iterations. If you have a conditional statement that you want your code 
   * to hit when it reaches a certain value, then a return statement is needed.
   */
  
  var array =[];
  
  for(var key in object){
    console.log(object[key]);
    array.push(key);
  }
  
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  /**
   * For this exercise we will use a for-in loop to loop over our object parameter given to us within our function
   * called printObjectKeys. For-in loops begin with the keywords for followed by (var key in object) since we don't 
   * know the name of the key. Last we will console.log calling our key in order to print the object keys we need to 
   * run this function. A return statement is not needed for this function.
   */
   
  for (var key in object){
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
   /**
   * For this exercise we want to loop over an object. To loop over objects, it is best to use a for-in loop.
   * Then we should push the object values into our array storage container. We start off by first creating a storage container
   * called var array in order to store our final values when we push them and we will assign our variable to an empty set of 
   * square brackets i.e. []. Next, we will start our for-in loop using the important keywords of for(var key in object) so we 
   * can refer to our unknown key and dictate which object we want to loop over. Inside our code block,we will use the push method
   * on the storage container we created, called array, so we can push those key's values into them. Lastly,
   * we will need a return statement to return our array. Remember that if you have a return statement inside a loop of a function,
   * it is going to break away from the loop, preventing iterations. If you have a conditional statement that you want your code 
   * to hit when it reaches a certain value, then a return statement is needed.
   */
  
  var array = [];
  for (var key in object){
    array.push(object[key]);
  }
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
     /**
   * For this exercise we want to loop over an object. To loop over objects, it is best to use a for-in loop.
   * Then we need to print our object's values using console.log(). Firstt, we will start our for-in loop using
   * the important keywords of for(var key in object) so we can refer to our unknown key and dictate which object 
   * we want to loop over. Inside our code block,we will use console.log in order to begin the process of printing 
   * our values. Inside the parenthesis we will need to refer to our parameter input called object and we will need to
   * access the values of the object by using bracket notation with the word key inside of it. A return statement is not 
   * needed for this function. 
   */
  
  for (var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
     /**
   * For this exercise we want to loop over an object. To loop over objects, it is best to use a for-in loop.
   * Then we should push the object values into our array storage container. We start off by first creating a storage container
   * called var array in order to store our final values when we push them and we will assign our variable to an empty set of 
   * square brackets i.e. []. Next, we will start our for-in loop using the important keywords of for(var key in object) so we 
   * can refer to our unknown key and dictate which object we want to loop over. Inside our code block,we will use the push method
   * on the storage container we created, called array, so we can push those key's values into them. We will also access
   * those key/value pairs by using bracket notation with the keyword key inside after declaring our object paramter. Lastly,
   * we will need a return statement to return our array. This time however, we need to attach the length property on our array storage 
   * containter because objects don't have length properties but arrays do. This is how we will obtain all of the key/value pairs that were
   * inside of the object. Remember that if you have a return statement inside a loop of a function, it is going to break away from the loop,
   * preventing iterations. If you have a conditional statement that you want your code to hit when it reaches a certain value, then a return statement is needed.
   */
  
  var array = [];
  for (var key in object){
    array.push(object[key]);
  }
  return array.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  /**
   * For this exercise we need to loop through our object in reverse and print the values of the object using console.log
   * To begin, I decided to create a storage container called arr representing an array for I want to convert the object 
   * into an array. Then I assigned my storage container using the = operator and used the Object.values(object) method 
   * which will return an array of a given object's own values, in the same order as in a for-in loop. The next thing we'll
   * do is chain on the .reverse() method putting our values in reverse order. Now that we converted our object parameter into
   * an array with its values reversed we can use our for loop which would be the most ideal when looping through arrays.We
   * begin with the for keyword and then having our starting condition of our index commence at 0. Our stopping condition
   * will utilize the length property of arrays for we need all the values that occur inside of our array. Then we will need
   * an incrementor to count from begining to end. Inside of our code block, loays dormant our console.log where inside of its
   * parenthesis lies our arr storage container and we will access our looped values using bracket notation on our index. A return
   * statement is not needed for this function.
   * 
   */
  
  let arr = Object.values(object).reverse();
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
