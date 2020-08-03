//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called objectValues that takes object as a parameter
 * Input: Object 
 * Output: Array
 * Constraints: Function takes an argument that is an object. Function should 
 * pull out the values of the object and sort them into a new array
 * Function should return a new array
 */
function objectValues(object) {
//Initialize a variable called arrayOfValues to an empty array literal
//Implement a for in  tha'll iterate forward through our object parameter
//use the push method on our object argumenet to push those values into the array
//return arrayOfValues

let arrayOfValues = [];
for(let key in object){
    arrayOfValues.push(object[key]);
}
return arrayOfValues;
} 

//Second way
/**
 * Use Object.values method to return an array of a given object's own
 * enumerable property values, in the same order provided by a for in loop.
 * Within the codeblock of our declared function, use this after our return
 * keyword and make sure to put object inside the parentheses so we can obtain those values.
 * Also, make sure the o in object is capitalized and the v in values is lawercased.
 */
 
//  function objectValues(object){
//      return Object.values(object);
//  }

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called keysToString taking object as its parameter.
 * This function's purpose is to return object's keys as strings and have the keys separated
 * by spaces. 
 * Input: Object
 * Output: Object
 * Constraints: Function takes an object as its argument, it should pull and sort those object's keys into
 * a new string, and the function should return the new string with spaces in between each name of our key
 * 
 */

function keysToString(object) {
    //Initialize a variable called arrayOfKeys to an empty array literal
    //implement a for in loop that'll iterate forward through our passed in object argument
    //use the push method on the key of the object argument and push those values into the arrayOfKeys storage 
    //container. Return arrayOfKeys with the join method so we can use the " " to put a space in between
    //each key.
    
    let arrayOfKeys = [];
    for (let key in object){
        arrayOfKeys.push(key);
    }
    return arrayOfKeys.join(" ");

}

//Second Method
/**
 * Create a new variable called objectToArray that will be assigned to the Object.getOwnPropertyNames()
 * method using object as our input. This method will return an array of all properties found directly in a 
 * given object. Initialize a new variable called spacedString and assign it to an empty string.
 * Implement a for loop to iterate through the length of our objectToArray array. Have our spacedString
 * variable use the += operator to assign it to the objectToArray variable and concatenate it with a string
 * literal that has a space in between. Return spacedString outside the for loop and use the slice method
 * to slice at the end of our words. 
 */ 
 
//  function keysToString(object) {
//      let objectToArray = Object.getOwnPropertyNames(object);
     
//      let spacedString = "";
//      for(let i = 0; i <= objectToArray.length - 1; i++){
//          spacedString += objectToArray[i] + " ";
//      }
//      return spacedString.slice(0, -1);
//  }

//Third Method
/**
 * Initialize a new variable called keysOfObjects and assign it to the method Object.Keys where the input
 * will be an object and it'll return an array of a given object's own enumerable property names. Then
 * we are going to return keysOfObjects  with the join method where we'll join them with a " " inside the
 * parentheses.
 */
 
//  function keysToString(object) {
//      let keysOfObjects = Object.keys(object);
//      return keysOfObjects.join(" ");
//  }
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called valuesToString taking object as its parameter.
 * This function's purpose is to return object's values as strings and have the values separated
 * by spaces. 
 * Input: Object
 * Output: String
 * Constraints: Function takes an object as its argument, it should pull and sort those object's values into
 * a new string, and the function should return the new string with spaces in between each name of our value.
 * 
 */
 
function valuesToString(object) {
    //Create a variable called stringedValues and assign it to an empty array literal.
    //Use a for in loop to iterate forward through the passed in object
    //Implement a conditional statement to tests if the value saved at each object key is a string value
    //We're going to use the typeof method on our objects keys and strictly equal them to a string in quotes
    //if the string values are true, then push those values at their property key into stringedValues
    //return stringedValues with the join method to join our stringed values with a space in between.
    let stringedValues = [];
    for(let key in object){
        if(typeof object[key] === "string"){
        stringedValues.push(object[key]);
    }
}
return stringedValues.join(" ");

}

//Second Method
/**
 * After creating a function called valuesToString taking a parameter called object, initialiaze a variable
 * called myObject and assign it to Object.values method to return an array of a given object's own
 * enumerable property values, in the same order provided by a for in loop. Initialize a variable called 
 * stringedValues2 and assign it to an empty string. Use a for loop to iterate through the length of the
 * variable myObject and count forward through the array. Create a conditional inside the code block and 
 * use the typeof method on our objects' indexed values and strictly equal them to a string in quotes. For 
 * its code block have stringedValues2 use the += operator and assign it to myObject accessing the index values
 * through bracket notation and concatenate it with an empty string with a space in between. Outside of these
 * code blocks, return stringValues2 with the slice method slicing off at the end of our words.
 */ 
 
//  function valuesToString(object) {
//      let myObject = Object.values(object);
//      let stringValues2 = "";
     
//      for(let i = 0; i <= myObject.length - 1; i++){
//          if(typeof myObject[i] === "string"){
//              stringValues2 += myObject[i] + " ";
//          }
//      }
//      return stringValues2.slice(0, -1);
//  }
 
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called arrayOrObject taking collection as its parameter.
 * This function's purpose is to return if our argument was either an array or an object
 * Input: Collection: Array or Object
 * Output: String
 * Constraints: Function takes a collection as its argument, and should determine whether or not if its 
 * either an array or an object.
 */
function arrayOrObject(collection) {
    //implement an conditional if statement to test whether or not our array collection argument is an array
    //using the Array.isArray method on our parameter collection and have our function return the string of array
    //use an else statement saying if it is not an array then return the string of the word object.
    
    if(Array.isArray(collection)){
        return "array";
    }else{
        return "object";
    }
    
}

//Second Method
/**
 * Create a function called arrayOrObject taking the parameter called collection. Inside of its code block
 * will lie dormant a series of if-else-if chains wher the conditional statements are testing to see if our 
 * collection is an object, an array, or an instance of Date. We will use Array.isArray for testing our Array
 * collection arguments and returning a string of array and setting one else if statement testing condtional
 * to have our collection equal null just to be safe. Our instance of date will return the string of date. Our 
 * last else statement will return typeof collection.
 */

// function arrayOrObject(collection){
//     if(typeof collection === "object" && collection !== null && !Array.isArray(collection) &&
//     !(collection instanceof Date)){
//         return typeof collection;
//     }else if(collection === null){
//         return null;
//     }else if (Array.isArray(collection)){
//         return "array";
//     }else if (collection instanceof Date){
//         return "date";
//     }else{
//         return typeof collection;
//     }
// }

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called capitalizeWord taking string as its parameter.
 * This function's purpose is to return the first letter of our string capitalized.
 * Input: String
 * Output: String
 * Constraints: Function takes a string as its argument, and should capitalize the first letter
 * of the string, returning the new string value.
 */
 
function capitalizeWord(string) {
    //initialize a variable named stringCapitalized and assign it to the value of string accessing the
    //zeroth index of it [0] as well as using the .toUpperCase method on it.
    //implement a for loop, iterating forward through the length of our string input
    //our starting condition should be 1, for our index, which will be our second character
    //Reassign the stringCapitalized variable to equal the string values of i, [i], and then use the
    //.toLowerCase method so the remaining characters of our string will be lowercased
    //return stringCapitalized variable.
    
    let stringCapitalized = string[0].toUpperCase();
    for(let i = 1; i < string.length; i++){
        stringCapitalized += string[i].toLowerCase();
    }
    return stringCapitalized;
}

//Second Method//

/**
 * Implement a function called capitalizeWord taking string as its parameter. Initialize a 
 * variable called methodizedString where we will assign it to the string parameter. Create a new variable 
 * called finalFormString and assign it to methodizedString using the methods .charAt(0).to
 * UpperCase() and concatenate it with the slice method where we will slice after every word.
 * return finalFormString.
 * 
 */
 
//  function capitalizeWord(string) {
//      let methodizedString = string;
//      let finalFormString = methodizedString.charAt(0).toUpperCase() + methodizedString.slice(1);
//      return finalFormString;
//  }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//First we are going to split our string parameter so that our words will have spaces in between
//2nd declare a for loop that will iterate through the entire length of our string
//3rd accessing those indexed values on our string parameter, assign it to string[i] again 
//where we want to all of our words at the first index to be capitalized
//concatenate it with string[i] where we need to use the slice method 
//return string with the join method to join our words back together as a string outside of our for loop.
    string = string.split(" ");

    for (var i = 0; i < string.length; i++){

        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
   
} 
return string.join(" ");
}

//Second Method//
/**
 * Implement a function called capitalizAlleWords taking string as its parameter. 
 * Input: String
 * Output: String
 * Constraints: Function takes a string as its argument, and should capitalize all the letters
 * of the string, returning the new string value.
 * 
 * Initialize a variable called stringyArray where we will assign it to the string parameter using the split 
 * method on it to seperate our strings with a space between each of our words. Create a variable 
 * called allCapitalizedString and assign it to an empty string literal. Create a for loop, iterating forward through
 * our array where our starting condition will begin at 0 for our index and our stopping condition
 * will be the length of our array. Create a nested for loop where iterating forward will check through
 * each character of our strings as well as check a conditional inside of our code block. The syntax
 * will primarily be the same except for the naming of our second index. Inside of our nested for loop's 
 * code block will be our if/else chain where our if statement will check if the index in the loop is currently
 * at , and if it is then assign the variable allCapitalizedString and apply the .toUpperCase() method to only 
 * index 0's character of stringArray's accesed indexed values. For my else statement, the nested for loop's index
 * will have the .toLowerCase method applied if the index is not equal to zero ensuring all following characters
 * will be lowercased after 0. If the stringyArray index, [i], is less than the last value of its length, then add a 
 * space, so all words are separated. Return the new string.
 */
 
 
//  function capitalizeAllWords(string) {
//      let stringyArray = string.split(" ");
//      let allCapitalizedString = "";
     
//      for(let i = 0; i < stringyArray.length; i++){
         
//          for(let j = 0; j < stringyArray[i].length; j++){
//              if(j === 0){
//                  allCapitalizedString += stringyArray[i][0].toUpperCase();
//              }else{
//                  allCapitalizedString += stringyArray[i][j].toLowerCase();
//              }
//          }
//          if(i < stringyArray.length - 1){
//              allCapitalizedString += " ";
//          }
//      }
//      return allCapitalizedString;
//  }
 


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Implement a function called welcomeMessage taking object as its parameter.
 * This function's purpose is to return the string "Welcome ____!" with the name property of our object 
 * filling in the blank.
 * Input: Object
 * Output: String
 * Constraints: Function takes a object as its argument, and should return the string "Welcome ____!" 
 * with the name property of our object filling in the blank.
 */
 
function welcomeMessage(object) {
//initialize a variable called name and assign it to object. Use dot notation to access the name property
//create a new variable called methodizedNames where we will use charAt(0), .toUpperCase, and slice(1)
//so that each property will hava a capitalized 0th index and be separated
//create a new variable caled finalString where it will be assigned to the string of "Welcome" followed 
//by methodizedNames and concatenated with "!". Return finalString
 

 let name = object.name; 
 let methodizedNames = name.charAt(0).toUpperCase() + name.slice(1);
 let finalString = "Welcome" + " " + methodizedNames + "!";
 return finalString;

}

//Second method

/**
 * Our first method can all be put on the return line and just use the methods on our name property 
 * through dot notation. We add our strings of Welcome and ! before and after respectively.
 */
 
// function welcomeMessage(object) {
//  return "Welcome" + ' ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
//  }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**Implement a function called profileInfo taking in the parameter of object. We will associate each object to have
 * a name and species property and will return the string of "___" is a "____" where our property's value of name goes in
 * the first blank and species' value in the second blank.
 * 
 * input: Object
 * output: string
 * constraints: Value of property name in first blank. Value of species name in second blank
 */
// function profileInfo(object) {
//     //implement a variable called name and assign it to object.name
//     //implement a variable called species and assign it to object.species
//     //implement a variable called uppercaseName and assign to name accessing the 0th index and use the
//     //.toUpperCase method on it.
//     //Create a for loop iterating forward through the length of our name property
//     //Our starting condition will have our index assigned to 1 and our stopping condition will be the length of our name
//     //The purpose of this loop is to chanfe every letter after our 0th index to be lower cased
//     //Create a variable called finalSpecies and assign it to our species property accessing the 0th index and attach
//     //.toUpperCase method on it
//     //Create a for loop iterating forward through the length of our species property
//     //Our starting condition will have our index assigned to 1 and our stopping condition will be the length of our species
//     //The purpose of this loop is to chanfe every letter after our 0th index to be lower cased
//     //Create a return statement concatenating uppercaseName, "is a" and finalSpecies
    
//     let name = object.name;
    
//     let species = object.species;
    
//     let uppercaseName = name[0].toUpperCase();
//     for(let i = 1; i < name.length; i++){
//         uppercaseName += name[i].toLowerCase();
//     }
    
//     let finalSpecies =species[0].toUpperCase();
//     for(let i = 1; i < species.length; i++){
        
//         finalSpecies += species[i].toLowerCase();
//     }
    
//     return uppercaseName + " is a " + finalSpecies;

// }

//Second Method
/**
 * use a return statement and after attaching the name and species properties to our object parameter,
 * respectively use the methods of charAt(0), .toUpperCase, and .slice. We are also going to concatenate between
 * the whole of name and species with a string value of " is a " completing the function profileInfo.
 */

function profileInfo(object) {
    
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " +
object.species.charAt(0).toUpperCase() + object.species.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**Implement a function called maybeNoises taking in the parameter of object. We will check
 * to see if the object in question has a noises array. If a noises array exist then we should 
 * return noises as a string separated by spaces. If no noises are to be found, then return 
 * "there are no noises" in string format.
 * 
 * input: Object
 * output: string
 * constraints: Function must take an object and return a string. Must check to see if an array exists
 * If a noises array exist then we should return noises as a string separated by spaces. 
 * If no noises are to be found, then return "there are no noises" in string format.
 */
 
// function maybeNoises(object) {
//     //Create a variable called stringedNoises and assign it to an empty string
//     //Implement an if/else chain testing to see object has a noises property, if said property is an array,
//     //and if the property has a length greater than 0 to see if the array is empty or not.
//     //Create a for loop, iterating through the length of the noises property on object. This will happen 
//     //only if all of the previous conditions are met and it will store all of this on stringNoises variable
//     //return stringedNoises and use the trim method to removes whitespace from both ends of a string. Whitespace
//     //in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator
//     //characters (LF, CR, etc.).
//     //Create an else statement where if none of the conditions are met then return "there are no noises"
    
//     let stringedNoises = "";
    
//     if(object.noises && Array.isArray(object.noises) && object.noises.length >= 0){
//         for (let i = 0; i < object.noises.length; i++){
//             stringedNoises += object.noises[i] + " ";
//         }
//         return stringedNoises.trim;
//     }else{
//         return "there are no noises";
//     }

// }

//Second Method
/**
 * Create a if statement testing to see if our noises property on object is not stictly equal to be undefined 
 * and if it has a length greater or equal to 1 then return object.noises and use the join method to join them
 * together as strings. Otherwise, we should return "there are no noises" if there is not a noises array to
 * be found.
 * 
 */
 
function maybeNoises(object) {

    if(object.noises !== undefined && object.noises.length >= 1){
        return object.noises.join(" ");
    }
    {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**Implement a function called hasWord taking in the parameter of string and word. We will check
 * to see if the word is contained in the string and will return boolean values of true or false
 * depending on the result
 * input: strings
 * output: booleans
 * 
 * constraints: Function must take a string and a word and return a boolean. Boolean is only returned
 * if the word was found inside of the string ,true, or not found in the string equaling false.
 */
// function hasWord(string, word) {
// //Create a variable called stringyArray and assign it to the parameter string where we will use the
// //.split method, splitting the param into an array od seperate strings and individual spaces.
// //Implement a for loop iterating though the length of stringyArray. Starting Condition will have the
// //index at 0 and the stopping condition will be the length of stringyArray. For the code block lies the 
// //conditional statement where we will test the comparison of the parameter word against each individual
// //word when passing in our string parameter's values. If the word matches then return true. If not 
// //return false

// let stringyArray = string.split(" ");
// for (let i = 0; i < stringyArray.length; i++){
//     if(word.toLowerCase() === stringyArray[i].toLowerCase()){
//         return true;
//     }
    
// }return false;
// }

//Second method
/**
 * Create a conditional statement where we will use the includes method to see if the string parameter
 * has the word parameter. The method determines whether an array includes a certain value among its 
 * entries, returning true or false as appropriate. Return true inside the conditional code block
 * and return false outside the conditional code block.
 * 
 */
function hasWord(string, word) {
    if(string.includes(word)){
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called addFriend taking in the parameters of name and object. We will check
 * to see if we can add the value of our name param to the friends array of the object. Last we should
 * return the object. 
 * 
 * input: string and object
 * output: object
 * 
 * constraints: Function must take an object with a property of friends and a string of a name. It must
 * return an object
 */
function addFriend (name, object) {
    //use dot notation to access the friends array of our object argument
    //use the push method to move the name argument passed within the array
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called isFriend taking in the parameters of name and object. We will search
 * to see if the friends array contains the name of the object. A boolean of true will be returned if the
 * name is found. Otherwise, false will be the evaluation.
 * 
 * input: string and object
 * output: boolean
 * 
 * constraints: Function must take an object and a string with a property of friends.The function must
 * search for sid Friends' property, array for the name and return true or false depending on the outcome.
 */
// function isFriend(name, object) {
//     //create an if statement where we are testing the friends property on our object param
//     //create a for loop iterating through the length of our object.friends
//     //create a conditional where if the name isstrictly equal to our object.friends indexed values
//     //then return true. outside of the first conditional code block return false
//     if(object.friends){
//         for(let i = 0; i < object.friends.length; i++){
//             if(name === object.friends[i]){
//                 return true;
//             }
//         }
//     } return false;

// }

//Second method
//create a conditional to test and see if our friends property on our object is an array through the
//Array.is Array method AND if our object.friends has the name parameter using the .includes method
//Return true within the codeblock and return false outside the if statement.
function isFriend(name, object) {
    if (Array.isArray(object.friends) && object.friends.includes(name)){
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called nonFriends taking in the parameters of name and array. We will return 
 * a list of all the names we are not friends with
 * 
 * input: string and array
 * output: array
 * 
 * constraints: Function must take an array with a friends list. The function should locate the names found
 * at the name value entered and return a list of the nonfriends not associated with that person's friend list.
 */
function nonFriends(name, array) {
    //create a variabe called nonPeople and assign it to an array literal
    //create a for loop to iterate through the length of our array parameter
    //create a conditional where if the indexed values of our array .includes the name of our friends property
    //strictly equal false AND it is strictly not equal to the array[i].name, then push those array indexed values into nonPeople
    
    let nonPeople = [];
    for (let i = 0; i< array.length; i++){
        if(array[i].friends.includes(name) === false && name !== array[i].name){
            nonPeople.push(array[i].name);
        }
    } return nonPeople;

}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called updateObject taking in the parameters of key, value, and object. We will check
 * to see if we can add the new value of the key in the object argument. If no key is found, add a key and value
 * input: string, string, and object
 * output: new object
 * 
 * constraints: Function must take an object and two strings. Function must search for the first string key of the 
 * object and replace its stored value if found. If the key is not found, the function  must add the new key/value
 * pair. Functiion must return the new object.
 */
function updateObject(object, key, value) {
    //implement bracket notation with key stored inside upon our object parameter and assign it to our value
    //return the object
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called removeProperties taking in the parameters of array and object. This function will
 * check the properties for every string listed in the array, removing them in the process
 * 
 * input: array and object
 * output: object
 * 
 * constraints: Function must search throug and sort the object's properties for any strings. It will remove them
 * if found within the object. Function must return new object.
 */
// function removeProperties(object, array) {
//     //create a for loop iterating through the length of our array parameter
//     //For the conditional, test to see if the string at any index has a matching property then delete it
//     //we can use the .hasOwnProperty method here on our array indexed values as well as the delete operator
//     //return the object outside the for loop
//     for(let i = 0; i < array.length; i++){
//         if(object.hasOwnProperty(array[i])){
//             delete object[array[i]];
//         }
//     }
//     return object;

// }

//Second method
/**
 * For in loop through the object
 * For loop through the array's length
 * Conditional statement if our key is strictly equal to our indexed array values
 * delete object[key] in code block
 * 
 */
 function removeProperties(object, array) {
     for(let key in object){
         for(let i = 0; i < array.length; i++){
             if(key === array[i]){
                 delete object[key];
             }
         }
     }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Implement a function called dedup taking in the parameterof array. We will check
 * to see if the function returns an array with any duplicates removed.
 * 
 * input: array
 * output: array
 * 
 * constraints: Function must take an array of values, ensure no two values are the same, remove only one value 
 * if not the case and return a new array
 */
function dedup(array) {
    //create a variable called finalArray assigned to an empty array literal
    //create a for loop iterating forward through the length of array
    //create a conditional using the .includes method to see if each element exist in the finalArray
    //If the array at its current index of the loop does not match a value that already exits, the the 
    //value at the index will be pushed inside of finalArray
    //return finalArray
    
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
        if(!finalArray.includes(array[i])){
            finalArray.push(array[i]);
        }
        
    }return finalArray;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}