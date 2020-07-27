// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    /**
     * For the first step of this exercise we are going to return an object containing the following key/value pairs for our makeContact
     * function: "id": id, "nameFirst": nameFirst, and "nameLast": nameLast
     * 
     */ 

return {
    "id": id,
    "nameFirst": nameFirst,
    "nameLast": nameLast
};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     //Let's create a storage container where our variable called contacts is assigned to an empty array literal.
    var contacts = [];
    
    /**
     * Next we are going to be creating a series of objects inside our return statement where length, addContact, findContact, removeContact, 
     * and printAllContactNames will be the keys and for the values each one will be given an anonoymous function that will coincide with the 
     * overall function makeContactList. Our first key/value pair of length will use an empty parameter for its function and return contacts along with
     * its length property *Remember the var we created is assigned to an array*. Our next key/value pair of addContact will use an anon function with the
     * parameter contact as its input. Inside of its code block we are going to use our contacts variable and have the push method attached on to it using
     * dot notation where we will be pushing our contact parameter. Our third key/value pair of findContact will use the anon function with a parameter called
     * fullName. For this code block, we will execute a for loop where our starting condition of our index is assigned to 0, our stopping condition for our
     * index is less than the length of our contacts variable, and an incrementor will account for all of our contacts. The code block will have if-else-if 
     * conditionals where our first conditional is testing to see if the contacts we are accessing through our index have the properties of our parameters of
     * nameFirst and nameLast so we can set it strictly equal to the value of fullName parameter, then it will return those contacts[i] for we know the  
     * function will output a full name like "Zachary Gaston". We will also concatenate and use a " " to give a space between firstName and lastName. Else if
     * will be the following statement where we will compare our index to be greater than the length of our contacts in order to return undefined. The next 
     * key/value pair is the removeContact along with its anon function with the parameter of contact. This code block is going to use a for loop again where
     * we want to loop through the length of our contacts with our main object being to use the splice method on our contacts. This method changes the contents 
     * of an array by removing or replacing existing elements and/or adding new elements in place. So, when we set our conditional to have our contacts[i]
     * variable to be strictly equal to our contact parameter then we want our contacts to splice at our index followed by 1. Our last key/value pair is 
     * the printAllContactNames with the value of an anon function with no input. Its code block will begin with the creation of a variable called
     * fullNames assigned to an empty array literal. Next we are going to for loop through our array where our starting conditon is our index assigned
     * to 0, our stopping condition will be our index less than the length of our contacts, and last we will utilize an incrementor accounting for all of
     * the fullNames when looped through our contacts to be printed. Inside the code block we will create another variable called everyContact and assign
     * it to our accesible contacts: contacts[i]. Then we will create another variable called fullName and assign it to our everyContact variable where we 
     * will be utilizing our nameFirst and nameLast properties on the storage container as well as concatenating a stringed space in between to get the syntax
     * of a fullName that we want. Last we will push this fullName variable into our fullNames array. Our last steps of this exercise involves a lineBreak between
     * our fullNames contact list. First we will create a variable called lineBreak and we are going to assign our fullNames variable to it and use the join
     * method where our input will be ("\n") indicating our lineBreak between names. Last we are going to return lineBreak.
     */
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    return contacts[i];
                } else if(i > contacts.length){
                    return undefined;
                }
            }
        },
        removeContact: function(contact){
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i] === contact){
                    contacts.splice(i, 1);
                }
            }
        }, printAllContactNames: function(){
            var fullNames = [];
            for(var i = 0; i < contacts.length; i++){
                var everyContact = contacts[i];
                var fullName = everyContact.nameFirst + " " + everyContact.nameLast;
                fullNames.push(fullName);
            }
            var lineBreak = fullNames.join("\n");
            return lineBreak;
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
