/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Implement a variable called animal and assign it to an object literal
var animal = {};

//use dot notation to give our animal object a property named species and give it a value of any animal species
animal.species = "Black Panther";

//use bracket notation to give animal a property called name and assign it a value to your animal's name
animal["name"] = "Bacura";

//use either notation to give animal a property called noises with a value of an empty array
animal.noises = [];

//print your animal object to the console.
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named noises assigned to an empty array literal
var noises = [];

//use bracket notation to give noises to your first element and assign it a string value
noises[0] = "Roar";

//use an array function to add another noise to the end of noises
noises.push("Purr");

//Add an element to the beginning of the array
noises.unshift("Growl");

//use bracket notation to add another element to the end of the noises array again
noises[noises.length] = "Grumble";

//console log the length of noises
console.log(noises.length);

//console log the least element in noises without hardcoding the index
console.log(noises.length -1);

//console.log the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//use bracket notation to assign the noises property on animal to our new noises array
animal["noises"] = noises;

//use any notation to add another noise to the noises property on animal
noises.push("Scream");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //access properties through dot and bracket notation
 
 * 2. What are the different ways of accessing elements on arrays?
 * //access through bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable called animals and assign it to an empty array literal
var animals = [];

//use the push method on our animal(Bacura) that we created to animals
animals.push(animal);
console.log(animals);

//create a variable called duck and assign it to an object literal containing the following:
//{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`

var duck = {species: 'duck',
            name: 'Jerome',
            noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
//push duck to animals
animals.push(duck);
console.log(animals);

/* create two more animal objects with the keys of species, name, and noises. The noises should have 
at least two sounds as key value pairs. Then add them to the animals array with the push method and console.log
*/

var komodoDragon = {species : "reptile",
                    name: "Excalibur",
                    noises:["hiss", "roar"]};
                    
var crocodile = {species: "reptile",
                name: "King.K Rool",
                noises: ["Augghh", "Big laugh"]};
                
animals.push(komodoDragon);
animals.push(crocodile);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Choose a data structure for this list of friends.
Write a comment in your code that explains why you chose this data structure.

Create a variable called friends and assign it to the data structure that you chose.

Write a function called getRandom that takes our animals array and returns a possible index of a 
random element using Math.random. You are creating your own random number generator.
random element using Math.random.
Using a random index from this function that you just created, get a random 
animal and add its name to friends.

console.log friends.

add friends as a property named friends on one of the animals in animals
console.log your work.*/

var friends = [];

function getRandom(){
    return Math.floor(Math.random() * friends.length);
}

friends.push(animals[getRandom()].name);
console.log(friends);
animal.friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}