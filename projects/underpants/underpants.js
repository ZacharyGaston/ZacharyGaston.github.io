// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


//_ is in reference to our variable called _. The dot is going to add this function and every function
// below to our object.
//the identity function takes in any of our datatype values and it returns its value unchanged.
//Assign _.identity to a function that takes the parameter of value
//Inside of its codeblock return our parameter value

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


//The typeOf function can take any datatype as its parameter. This function's purpose is to take a value
//and define the datatype. When done defining the datatype it will return that datatype in string format

/**
 * Assign _.typeOf to a function taking a parameter of value. Create a series of if-else-if conditional
 * statements. For our if statement, we're going to test to see if the value is an array with the Array.isArray
 * method and set it strictly equal to a boolean value of true. In its code block, we'll return a string of array.
 * Our first else if will test to see if the value parameter is an instanceof a date and we'll set it strictly to a
 * boolean value of true. Within its code block, we will return date as a string. Out second else if will test to see
 * if null is strictly equal to the null datatype and we'll return null as a string in the code block. Our else
 * statement will return using typeof on the value.
 */
_.typeOf = function(value){
    if(Array.isArray(value) === true){
        return "array";
    }else if (value instanceof Date === true){
        return "date";
    }else if (value === null){
        return "null";
    }else{
        return typeof(value);
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//The first function takes an array and a number as parameters. The purpose of its function is to
//return the nth first elements based on the argument given to the number. It will return 
//the n number of elements of an array.

/**
 * Assign _.first to a function taking the parameters array and number. Create a series of if-else-if conditional
 * statements. For our if statement, we're going to test to see if the array parameter is an array using the 
 * Array.isArray method and while setting it strictly equal to a boolean value of false, we want another condition
 * to test whether our number parameter is less than 0. So in between these two tests we are going to use the or 
 * operator, ||, so in our return we will get a return of an array literal. Our first else if statement will test
 * to see if our number is strictly not a number OR if our number is strictly equal to be undefined in order to 
 * return the first index of our array within the code block. Our second else if statement will test to see if the 
 * number is greater than the length of our array parameter in order to return the array parameter. Our else statement
 * will return the array parameter using the slice method where we will slice at 0 following the number param.
 * 
 */ 

_.first = function(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(number !== number || number === undefined){
        return array[0];
    }else if(number > array.length){
        return array;
    }else {
        return array.slice(0, number);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//The last function takes an array and a number as parameters. The purpose of its function is to
//return the last nth elements of an array, based on the number's argument. It will return 
//the n number of elements of an array.

/**
 * Assign _.last to a function taking the parameters array and number. Create a series of if-else-if conditional
 * statements. For our if statement, we're going to test to see if the array parameter is an array using the 
 * Array.isArray method and while setting it strictly equal to a boolean value of false, we want another condition
 * to test whether our number parameter is less than 0. So in between these two tests we are going to use the or 
 * operator, ||, so in our return we will get a return of an array literal. Our first else if statement will test
 * to see if our number is strictly not a number OR if our number is strictly equal to be undefined in order to 
 * return the last index of our array within the code block by dynamically using bracket notation on our array
 * and using dot notation to get the length property while using - 1 indicating the end. Our second else if statement 
 * will test to see if the number is greater than the length of our array parameter in order to return the array parameter. Our else statement
 * will return the array parameter using the slice method where we will slice at the end of our number parameter
 * following the length of our array 
 * 
 */ 
_.last = function(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(number !== number || number === undefined){
        return array[array.length - 1];
    }else if (number > array.length){
        return array;
    }else{
        return array.slice(number -1, array.length);
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//The indexOf function takes an array and a value as parameters. The purpose of this function is 
//to return the index number where the value's arguemnt first appears in the array. If the value 
//does not exist in the array, -1 is returned.

/**
 * Assign _.indexOf to a function taking in the parameters of array and value. Create a for loop inside
 * of its code block setting index to be assigned to 0, index being less than the length of our array and
 * an incrementor counting forward. Within the for loops code block create a conditional statement testing to 
 * see if our indexed values of our array strictly equal to the value parameter then return our index. Outside
 * of the for loop return -1.
 */
_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//The contains function takes an array and a value of any datatype as its parameters. The purpose of this function
//is to iterate through an array to see if it contains a value. It will return a Boolean if the value argument is in the array.

/**
 * Assign _.contains to a function taking array and value as its parameters. Within its codeblock, use a return
 * statement where if our array parameter uses the includes method on our value parameter then initiate a Ternary
 * operator to test whether that value will be determined to be a booloean of either true : false.
 */
_.contains = function(array, value){
    return (array.includes(value)) ? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//The each function takes in as parameters an array or object, for the collection, and a function acting upon each element.
//The purpose of this function is to loop over a collection and a function is called for each element or property.
//It will return nothing. It just iterates through.

/**
 * Assign _.each to a functiion taking the parameters of collection and functionTest. Within the codeblock
 * create a if statement where we're testing to see if our collection parameter is an array with the Array.isArray method
 * and set it strictly equal to true. Next, inside the conditional's code block, create a for loop where the 
 * starting condition is set to 0 for our index, our index is less than the length of our collection and we have 
 * an incrementor to iterate through. For its code block, we will have our functionTest test our indexed values of
 * our collection, our index, and the collection parameter. Then, create a else statement where we'll create a for-in
 * loop within the codeblock, and then we'll functionTest the key on the collection, the key by itself, and the 
 * collection parameter.
 */

_.each = function(collection, functionTest){
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            functionTest(collection[i], i, collection);
        }
    }else{
        for(let key in collection){
            functionTest(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//The unique function takes an array as its parameter. The purpose of this function is to Loop
//through the array and remove any duplicate values. It will return an array without duplicate values.

/**
 * Assign _.unique to a function taking in the parameter of array. Within the code block, create a variable
 * called uniqueElements and assign it to an empty array literal. Create a for loop, assigning our index to be 0 as
 * the starting condition, our index to be less than the length of our array as the stopping condition and an
 * incrementor incrementing forward through the array. For the code block, create an if statement where we will 
 * check an empty array for a given element inside the array. If the array is not there, then we will push that
 * element inside our uniqueElemenrs array literal. We will use indexOf on our indexed array values and set it strictly
 * equal to -1 which is the end. Last we will return uniqueElements outside the for loop.
 */
_.unique = function(array){
    let uniqueElements = [];
    for(let i = 0; i < array.length; i++){
        if(uniqueElements.indexOf(array[i]) === -1){
            uniqueElements.push(array[i]);
        }
    }
    return uniqueElements;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//The filter function takes in the parameters of array and test function. The purpose of this function is to
//iterate through an array and a function test will upon each argued element. If the test function returns true, 
//that element will be pushed into a new array, returning an array with all of the passing values.

/**
 * Assign _.filter tp a function taking in the parameters of array and test. Create a variable called 
 * filteredElements and assign it to an empty array literal. Create a for loop, using our index to be assigned
 * to 0 as our starting condition, our index being less than the length of our array as the stopping condition,
 * and an incrementor incrementing forward through our array. Create an if statement where we will use our test
 * parameter acting on the indexed values of the array parameter through bracket notation, the index itself,
 * and the array parameter and we will set that strictly equal to be true. For its codeblock we want those indexed
 * values on our array to be pushed inside our filteredElements storage container. Last we'll return filteredElemnets
 * outside the for loop.
 */
 
_.filter = function(array, test){
    let filteredElements = [];
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) === true){
            filteredElements.push(array[i]);
        }
    }
    return filteredElements;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//The reject function takes in an array and a test function as parameters. The purpose of this function is to 
//iterate through an array and have a logical function test act upon on the arguments. If the test returns false,
//the elements are pushed into an array, returning an array of false arguments.

/**
 * Assign _. reject to a function taking in the parameters of array and test. Within its codeblock, return
 * using _.filter where we will use this function to filter our argued elements. We will have filter test our 
 * array parameter and do a function call on our element, index, and array. For its return, we will use the !
 * operator on our test parameter to give us the opposite resulting arguments of our element, index, and array.
 */

_.reject = function(array, test){
    return _.filter(array, function(element, index, array){
        return !test(element, index, array);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//The partition function takes in array and a test function as its parameters. The purpose of this function is to
//iterate through an array with a function test acting on each element in the array. It will return 
// truthy and falsey values in two sub arrays in a larger array.

/**
 * Assign _.partition to a function with the parameters of array and test. Create three variables of turePartition
 * assigning it to an empty array literal for our true values, a variable called falsePartition and assigning it to
 * an empty array literal for our false values, and an all Partition variable that will be our larger empty array literal
 * containing the two subarrays. Create a for loop iterating our index forward starting at 0 and ending at our length
 * with an incrementor. For its code block, use an if statement where we will use the test parameter testing our 
 * indexed values on our array parameter, our index, and array while setting them strictly equal to be true. If those
 * argued elements turn out to be true then we want to push those index values inside our truePartition array. Else,
 * we will push those false values into our falsePartition array. Outside the for loop we will push both true and false
 * partition valuables inside the allPartition variable and we'll return allPartition completing the function.
 */

_.partition = function(array, test){
    let truePartition = [];
    let falsePartition = [];
    let allPartition = [];
    
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) === true){
            truePartition.push(array[i]);
        }else{
            falsePartition.push(array[i]);
        }
    }
    allPartition.push(truePartition);
    allPartition.push(falsePartition);
    return allPartition;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//The map function takes in the parameters of a collection and a test function. The purpose of this function is 
// to have the function test call upon each element in a collection, and the return value of each function call will 
//be in a new array. An array with the functioned elements will be our return.

/**
 * Assign _.map to a function taking in the parameters of collection and test. Create a variable called storage and
 * assign it to an empty array literal. Create an if statement testing to see if our collection is an array through
 * the Array.isArray method and have it set strictly equal to be true. Within the code block, create afor loop 
 * iterating through our array by setting our index to be 0 as the starting condition, our index being less than
 * the collection's length and an incrementor incrementing forward. After doing a test on collection's indexed
 * values, the index, and the collection, if these are the values we want then we will use the push method and store
 * them inside our storage variable. Else, create a for-in loop inside the default conditional codeblock and we'll 
 * use the test parameter on the keys of our collection, the key, and the collection parameter where we'll use the 
 * push method to store these values inside of our storage variable. Outside of both loops, return our storage
 * variable.
 */
 
_.map = function(collection, test){
    let storage = [];
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            storage.push(test(collection[i],i, collection));
        }
    }else{
        for(let key in collection){
            storage.push(test(collection[key], key, collection));
        }
    }
    return storage;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//The pluck function takes in the parameters of array of objects and a string with the property key. The purpose of this function is to 
// cycle through an object to see if a given property is in the objects of the array. If the key exist, the values are pushed into an array
//It'll return an array containing the values of the identical keys.

/**
 * Assign _.pluck to a function containing the parameters of array and property. Create a variable called propertyValue and
 * assign it to an array literal. Use _.map to have the function test call upon each element in array, and if these are the
 * values we want then we will push the element's properties into our propertValue storage container. Last, return propertyValue
 * outside the function. 
 */
_.pluck = function(array, property){
    let propertyValue = [];
    _.map(array, function(element){
        propertyValue.push(element[property]);
    });
    return propertyValue;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//The every function takes in the parameters of collection and func. The purpose of this function is to 
//have a function, call upon each element in the collection, and if all of the returning values are true, true will be returned.
//However, If one of the elements returns false, the entire result will now be false.

/**
 * Assign _.every to a function taking in the parameters of collection and func. Create a variable called array and assign it
 * to our _.reject function where we will use the collection and its function test on our element, index, and array. By using this
 * we can create a conditional statement where if those argued e, i, and a have the bang operator on our function then those elements
 * will be returned. Outside of that reject, create an if statement setting a conditional where if the length of our array 
 * collection is greater than 0, then return false underneath and return true outside of it. 
 * 
 */
 
_.every = function(collection, func){
    let array =_.reject(collection, function(element, index, array){
        if(!func){
            return element;
        }
        return func(element, index, array);
    });
    if(array.length > 0){
        return false;
    }
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//The some function takes in the parameters of collection and test. The purpose of the function is to 
//have a function call upon each element in the collection and if all of the returning values are true,
//true will be returned. If even one of the elements returns true, true will be returned.

/**
 * Assign _.some to a function taking in the parameters of collection and test. Create a variable called startingCount
 * and assign it to 0. Create an if-else-if chain. Our if statement will use the test parameter to be strictly equal ato undefined
 * && test to see if our collection is an array using Array.isArray and setting both condtionals to strictly equal to be true. Next,
 * create a for loop iterating through the collecion's length and have an if statement within its codeblock sayiyng that if this
 * collection holds any of the indexed values that we want than have our starting count use the += operator and be assigned to 1.
 * Our first else if will practically do the same thing but this time we are going to set our boolean to strictly equal false. The 
 * difference now is that we will use a for in loop testing for the keys in our object on our collection, and if any of these
 * keys are found then have startingCount be += to 1. Our second else if reverts back to our Array.isArray method on our collection
 * testing our values stored in our collection[i], our index, and our collection to see if the startingCount will be incremented if they
 * were set strictly equal to be true. And our else statement will do the same for our object collection testing on the keys of the 
 * collection, the key, and the collection parameter.Outside of all of that, create a conditional where if our startingCount is
 * greater than 0 then return true stating that if we have at least one truthy value, else return false if no values exist.
 *
 * 
 */
_.some = function(collection, test){
    let startingCount = 0;
    if(test === undefined && Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            if(collection[i]){
                startingCount += 1;
            }
        }
    }else if(test === undefined && Array.isArray(collection) === false){
        for (let key in collection){
            if(collection[key]){
                startingCount += 1;
            }
        }
    }else if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(test(collection[i], i, collection) === true){
                startingCount++;
            }
        }
    } else{
        for (let key in collection){
            if(test(collection[key], key, collection) === true){
                startingCount++;
            }
        }
    }if(startingCount > 0){
        return true;
    }else{
        return false;
    }
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//The reudce function takes in the parameters of an array, a function, and a seed.The purpose of this function is to 
//calls a function for every element passing the arguments: previousResults, element, index. and uses the return value of 
//the function as the "previous result" for the next iteration and seed as the first "previous result". 
//If no seed is given, the first "previous value" will be the first index value of the array. After the last iteration,
//the return value of the final function call will be returned.

/**
 * Assign _.reduce to a function taking in the parameters of array, func, and seed. Use _.each function 
 * to loop over a collection(array) and have the function call for each elemen, index, and array. Create
 * a conditional where if our seed is strictly equal to be undefined then have the seed be assigned to our element. 
 * Else, have the seed be assigned to our func calling on our seed, element, and index. Then return the seed outside.
 * 
 */
 
_.reduce = function(array, func, seed){
 _.each(array, function(element, index, array){
     if(seed === undefined){
         seed = element;
     }else{
         seed = func(seed, element, index);
     }
 });
 return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//The extend function takes in multiple objects as its parameters. The purpose of this function is to updates the first
//object's value with another object's value if they share a key. If the key does not exist in the first object, the key-
//value pair will be added.

/**
 * Assign _.extend to a function with the parameters of object1, object2, and the spread of an object. Create a for in loop 
 * for object2 and in its codeblock assign the key of object1 to the key of object2. We don't know the keys so we use 
 * bracket notation around the word key. Then create a for loop to iterate through the length of the object and nest inside of it
 * a for in loop to see if the key is in our indexed values of our object, then have object1 accessing the key accessing the index
 * be assigned to and object accessing both the index and the key, Return object1 outside both for loops.
 * 
 */
_.extend = function(object1, object2, ...object){
    for(let key in object2){
        object1[key] = object2[key];
    }for(let i = 0; i < object.length; i++){
        for(let key in object[i]){
            object1[key[i]] = object[i][key];
        }
    }
    return object1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
