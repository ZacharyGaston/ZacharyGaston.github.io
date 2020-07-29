/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Input: animals array with the parameters of name and string
/*
    Open up the file functions.js in your editor.
    Implement a function called search with a signature of search(animals, name) { //... } that:
    Takes a paramater representing an Array of animals.
    Takes a paramater representing a String, the name of an animal on which to perform a search.
    Looks through the animals Array, and returns the animal’s Object if an animal with that name exists.
    Returns null if no animal with that name exists
    Use the search bar at the top of the page to make sure your function works.
*/

/**
 * So first we need to implement our function called search and give it the parameters
 * of animals and name. Inside our code block, we need to create a for loop where our
 * starting condition of our index is assigned to 0, our stopping condition has our index
 * less than the length of our animals array, through the animals inside the array. Within
 * the code block of our for loop lies a conditional statement where if the indexed values 
 * of our animals array has a name parameter attached through dot notation is strictly equal
 * to our name parameter then we want this function to return those animals accessing that index
 * through our bracket notation. This will ensure that the names of our animals strictly equal the 
 * name in string format since the name parameter is a string. Otherwise we should return null outside 
 * of our for loop if no animal with that specific name exists when using the search bar.
 */

function search(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name)
        return animals[i];
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Write a function called replace with a signature of replace(animals, name, replacement) { //... } that:
  Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search,
  and an Object that represents the replacement animal. If an animal with that name exists within the 
  animals Array, replace it’s entire Object with the replacement Object.
  Otherwise do nothing.
*/

/**
 * For this part, we will create a function called replace that will take in three parametersL animals, name, and replacement.
 * Inside of its code block, we will create a for loop that uses the index assigned to 0 as its starting condition, for the
 * stopping condition will be the index being less than the length of animals array and last will be our incrementor counting
 * through our animals array. The next code block will feature our conditional statement where if our animals parameter accessing
 * those index values with bracket notation uses the name parameter through dot notation, is strictly equal to our name parameter
 * then animals[i] will equal our replacement parameter object. This will make sure that if an animal with that name exists
 * within that animals array then the entire object will be replaced with the replacement object. Otherwise, we won't have to 
 * do anything else.
 * 
 */ 
 
function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 Write a function called remove with a signature of remove(animals, name) that:
 Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
 If an animal with that name exists within the animals Array, remove it.
*/

/**
 * For this section we are going to create a function called remove and give it the parameters of animals and name.
 * Inside of its code block we are going to utilize our forr loop to iterate through our array starting with our index to 
 * be assigned to 0 as our starting condition, our stopping conditional having our index be less than the length of our 
 * animals array and an incrementor to count through the animals array. The next code block will contain our conditional 
 * statement where if our animals array accessing those indexed values through bracket notation has the name parameter
 * attached to it through dot notatio, is strictly equal to our name parameter, then have our animals[i] equal to our 
 * remove so that animal whose names does not exists within our animals array will be deleted.
 * 
 */
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals[i] = remove;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    Write a function called add with a signature of add(animals, animal) { //... } that:
    Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
    Checks that the animal Object has a name property with a length > 0.
    Checks that the animal Object has a species property with a length > 0.
    Has a unique name, meaning no other animals have that name.
    Adds this new Object to the animals Array, only if all the other conditions pass.
 */
/**
 * First, we will create a function called add that will take in the parameters called animals and animal.Inside of its
 * code block will lie our code block. We are going to make usage of our ! operator here. The ! is a logical operator that 
 * will convert a value to its opposite boolean. We want this because ultimately our function should add an animal if no 
 * other animal shares a name of a possible new animal; making our boolean expectations of false to be true. So, if the two lengths
 * of the name && the species properties, keeping in mind that the parameter animal is an object therefore we can use dot notation,
 * on animal are greater than 0 then we want it to return. Next our for loop will have our starting condition will have our index
 * start at 0, our stopping condtional will have our index be less than the length of our animals and our incrementor will count
 * through the animals array. The code block will feature our conditional statement where if our animals accessing our index values
 * through bracket notation has the name property attached to it through dot notation is strictly equal to our animal object with
 * the name property attached to it then we will have that return. Outside of the for loop we will have our animals be pushed using
 * the push method where we want to push our animal object.
 * 
 * 
 */
function add(animals, animal){
    if(!(animal.name.length > 0 && animal.species.length > 0)){
        return;
    }
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === animal.name){
            return;
        }
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
