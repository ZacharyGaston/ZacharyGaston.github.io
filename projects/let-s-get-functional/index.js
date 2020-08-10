// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-zacharygaston");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      //Make sure you're in your github.io folder in the terminal
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
 
/**
 *Assign a variable called maleCount to a function taking array as its parameter. Within the code block, 
 * create a variable called malesArray and aassign it to the _.filter we created in underpants. The 
 * purpose of using filter here is to go through our array of an object and filter who is a male. So as
 * our call function looks through customerObj, the index, and the array, we will return customerObj
 * with a key of gender attached through dot notation and strictly equal that to a string of male. Outside
 * of this we will return malesArray with the length property attached to give us the full length of people
 * who are male.
 */
 
var maleCount = function(array) {
    var malesArray = _.filter(array, function(customerObj, index, array){
        return customerObj.gender === "male";
    });
    return malesArray.length;

};

/**
 *Assign a variable called femaleCount to a function taking array as its parameter. Within the code block, 
 * after using the keyword return use our _.reduce from underpants where we are going to be looking through
 * our array parameter and within our call function will be the seed, customerObj, index, and array. 
 * By using reduce here, my intention is to look through this array and when I state a conditional
 * stating that if any of people's gender on customerObj is strictly equal to the string female, then
 * I want the seed in my reduce to increment by 1. Outside of that, return seed and have seed begin at 0.
 */
var femaleCount = function(array){
    return _.reduce(array, function(seed, customerObj, index, array){
        if(customerObj.gender === "female"){
            seed++;
        }
        return seed;
    }, 0);
};

/**
 *Assign a variable called oldestCustomer to a function taking array as its parameter. Within the code block, 
 * declare a variable called resultAge and assign it to the array parameter using the sort method. The sort
 * method  sorts the elements of an array in place and returns the sorted array. The default sort order is 
 * ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code 
 * units values. So, within our function we are going to compare a against b and in the return we will attach
 * the age property to both parameters and subtract against each other. Finally when we return, we want the 
 * resultAge accessed at index 0 to give us the name property of our oldestCustomer.
 */

var oldestCustomer = function(array){
var resultAge = array.sort(function(a, b){
    return b.age - a.age;
}); return resultAge[0].name;
};

/**
 *Assign a variable called youngestCustomer to a function taking array as its parameter. Within the code block, 
 * declare a variable called resultAge2 and assign it to the array parameter using the sort method. The sort
 * method sorts the elements of an array in place and returns the sorted array. The default sort order is 
 * ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code 
 * units values. So, within our function we are going to compare a against b and in the return we will attach
 * the age property to both parameters and subtract against each other, this time having a first and b second for 
 * our subraction. Finally when we return, we want the resultAge2 accessed at index 0 to give us the name property
 * of our youngestCustomer.
 */

var youngestCustomer = function(array){
    var resultAge2 = array.sort(function(a, b){
        return a.age - b.age;
    });
    return resultAge2[0].name;
};


/**
 *Assign a variable called averageBalance to a function taking array as its parameter. Within the code block, 
 * we are going to iterate through the array of customers, find their balances, use our _.reduce function
 * to add the balances together and divide by all of the customers in the array. To begin we will declare
 * a variable called finalMoney and assign it to 0. Then we'll create a variable called avgBalance and assign
 * it to the _.reduce function, taking in the parameter array and a callback function calling on our seed, 
 * customer, index, and array. Next we will assign finalMoney to our customer parameter where we'll use the
 * key called balance and attach it through dot notation as well as using the slice method since we just want
 * the balance and none of those other properties. Next we are going to get rid of the comma so we will use 
 * the split method on finalMoney and then we will join those numbers back together with the string literal.
 * Afterwards, we'll assign finalMoney to Number.parseFloat acting on finalMoney. The parseFloat() function parses
 * a string and returns a floating point number. This function determines if the first character in the specified 
 * string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number 
 * as a number, not as a string. Then we will return our seed and use the += operator assigning it to finalMoney
 * and we will have our seed begin at 0. Outside of the codeblock, we will return avgBalance divided by the
 * length of the array. 
 */
 
var averageBalance = function(array){
    let finalMoney = 0;
    let avgBalance = _.reduce(array, function(seed, customer, index, array){
        finalMoney = customer.balance.slice(1);
        finalMoney = finalMoney.split(",").join("");
        finalMoney = Number.parseFloat(finalMoney);
        return seed += finalMoney;
    }, 0);
    return avgBalance / array.length;
};

/**
 *Assign a variable called firstLetterCount to a function taking array and letter as its parameters. Within the code block, 
 * we are going to iterate through the array of customers to find out how many of our customers start
 * with a first letter. Inside of our codeblock, we will begin with a return statement and implement the 
 * _.reduce function, iterating through our array parameter and issuing a callback function taking within
 * its parenteses: seed, customer, index, and array. Then we will need a conditional comparing the property
 * name of our customer using the .toLowerCase method to be strictly equal to our letter parameter using 
 * .toLowerCase as well. For our customer name we will also need to be accessing the first index since this
 * is the purpose of this function. Next, increment our seed by 1 and outside of the code block, return seed and
 * have it start at 0.
 */

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(seed, customer, index, array){
        if(customer.name[0].toLowerCase() === letter.toLowerCase()){
            seed++;
        }
        return seed;
    }, 0);
    
};


/**
 *Assign a variable called friendFirstLetterCount to a function taking array, customer and letter as its 
 * parameters. Within the code block, we are going to iterate through the array of customers, find the 
 * friends list, and iterate through that to compare the first letters between the friend and the customer's
 * names. Initialize a variable called matchingCustomer to an object literal. Create a for loop to iterate
 * forward through the length of our array parameter. Next create a conditional comparing the name property
 * on our accessed indexed values on our array to be strictly equal to our customer parameter. If they are,
 * then have matchingCustomer to be assigned to the array accessing our index. Break statement here. Outside
 * of that function's code block, declare a return statement and use the _.reduce method where we will be
 * iterating through the friends property on matchingCustomer and our call back function will take in a 
 * seed, current, index, and array. Next, write out a condtional saying if the first index of our name property
 * on the current argument is set to be lowerCase and is strictly equal to the letter parameter that's also using
 * .toLowerCase, then have our seed increment by 1. Return seed outside of the code block and have it begin at 0.
 * 
 */
 

var friendFirstLetterCount = function(array, customer, letter){
    let matchingCustomer = {};
    for(let i = 0; i < array.length; i++){
        if(array[i].name === customer){
            matchingCustomer = array[i];
            break;
        }
    }
    return _.reduce(matchingCustomer.friends, function(seed, current, index, array){
        if(current.name[0].toLowerCase() === letter.toLowerCase()){
            seed++;
        }
        return seed;
    }, 0);
};


/**
 *Assign a variable called friendsCount to a function taking array and name as its 
 * parameters. Within the code block, we are going to create a variable called 
 * finalFriends and assign it to an empty array literal. Then we are going to create
 * two for loops: one will iterate forward through the length of our array parameter
 * and the nested for loop will iterate forward through the length of the accessed values
 * of our first for loop while using the friends property attached to it. Next we will create
 * a condtional to test to see if the friends array contains a name that we want. So, we need
 * to access the index values of our first for loop which has iterated through the array param
 * and then we need to access our second for loop's purpose which is our friends accessing the
 * second index's values, j. These two will be combined through dot notation as well as given
 * the name property and all of that will be strictly equal to the name parameter. Then we 
 * are going to push array[i].name into the finalFriends array and outside of our function, 
 * we will return finalFriends.
 */


var friendsCount = function(array, name){
    let finalFriends = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].friends.length; j++){
            if(array[i].friends[j].name === name){
                finalFriends.push(array[i].name);
            }
        }
    }
    return finalFriends;
};


/**
 *Assign a variable called topThreeTags to a function taking array as its 
 * parameter. Within the code block, we are going to first declare a variable
 * called finalTags and assign it to an empty array literal. Then we will iterate
 * through the array parameter using _.each and we will push the tags on our elements
 * into the finalTags array. Outside of the each codeblock, we are going to use _.reduce
 * function on finalTags so we can flatten our tags as well as concatenate the previous
 * and current values. Outside of that code block, we will create a new variable called
 * tagCounterObject and use the _. reduce function to increment our seed accessing our tag
 * essentially where in our condtional we will either increment or have that seed be assigned
 * to 1. Then we will return the seed and have it begin as an object literal. Lastly are our
 * two new variables of finalResult and finalResult2. The first finalResult will be assigned
 * to an array literal and we are going to for in loop our tagCounterObject where we 
 * will push an array containing the key and the tagCounterObject accessing key.
 * finalResult2 will use the _.filter function and inside its conditional if our element at 
 * index 1 is greater than 2 then we will push those elements(tags) at element index 0. Finally,
 * return finalResult2.
 */

var topThreeTags = function(array){
    let finalTags = [];
    _.each(array, function(element, index, array){
        finalTags.push(element.tags);
    });
    finalTags = _.reduce(finalTags, function(previous, current){
        return previous.concat(current);
    });
    
    let tagCounterObject = _.reduce(finalTags, function(seed, tag){
        if(seed[tag]){
            seed[tag]++;
        }else{
            seed[tag] = 1;
        }
        return seed;
    }, {});
    
    let finalResult = [];
    for(let key in tagCounterObject){
        finalResult.push([key, tagCounterObject[key]]);
    }
    
    let finalResult2 = [];
    _.filter(finalResult, function(element, index, array){
        if(element[1] > 2){
            finalResult2.push(element[0]);
        }
    });
    return finalResult2;
};

/**
 *Assign a variable called genderCount to a function taking array as its 
 * parameter. Within the code block, create a variable called genderCountObject
 * and assign it to an object literal containing the keys of male, female, and a
 * string of non-binary all having the values of 0. Next we are going to use the
 * _. filter functionto iterate through the array and set up some conditional statements:
 * if the gender property on customerObj is strictly equal to the string of male then 
 * increment genderCustomerObject.male by 1 using the += operator. Else if the gender 
 * property on customerObj is strictly equal to the string of female then 
 * increment genderCustomerObject.female by 1 using the += operator.Else if the gender
 * property on customerObj is strictly equal to the string of non-binary then 
 * increment genderCustomerObject["non-binary"] by 1 using the += operator. Outsid
 * of the filter function return genderCountObject.
 */
 
var genderCount = function(array){
 let genderCountObject = {male: 0,
                          female: 0,
                          "non-binary": 0};
    
    _.filter(array, function(customerObj, index, array){
        if(customerObj.gender === "male"){
            genderCountObject.male += 1;
        }else if(customerObj.gender === "female"){
            genderCountObject.female += 1;
        }else if(customerObj.gender === "non-binary"){
            genderCountObject["non-binary"] += 1;
        }
    });
    return genderCountObject;
 
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
