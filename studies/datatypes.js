/**
 * 
 * DATATYPES:
 * 
 * 0. There are a plethora of datatypes in Javascript. Javascript variables can 
 * contain any type of data and also have the ability to change datatypes. Listed
 * below, will be the following datatypes that are present in Javascript as well as
 * some coding examples that will coincide with the explanation.
 * 
 */
 
 // 1. Number //
 
 /**
  * The number datatype is a primitive datatype that allows you to work with any 
  * numerical values as you desire. These numerical values contain any number of integers
  * as well as numbers that contain decimal places. Numerical values should not be 
  * surrounded by quotation marks and you will primarily see them in mathematical equations.
  */
  
 var num = 59;
 console.log(num); // prints => 59
 
 // 2. String //
 
 /**
  * The string datatype is a primitive datatype. Strings contain a combination of letters primarily
  * but it can also contain numbers as well. It is important to note that in order to be a string it
  * must be surrounded by quotation marks. These quotation markes can either be 'single', "double",
  * or represented through `backticks`. The main difference between single/double vs backticks is that
  * if you want to have a string that goes across multiple lines, then backticks are required. Otherwise 
  * it all comes down to preference. Sometimes single or double quotes are much more useful than the other
  * when you want to differentiate your code and not bring any confusion when you have to use apostraphes
  * or when you may have to use them in bracket notation.
  */
 
 var myName = "Roronoa Zoro";
 var longestSentence = `You need to accept the fact that you’re not the best and have
 all the will to strive to be better than anyone you face.`;
 console.log(myName); // prints => "Roronoa Zoro"
 
 // 3. Boolean //
 
 /**
  * Boolean are another example of primitive datatypes. Taking only 1 bit of data, Booleans are the 
  * smallest datatypes possible in Javascript. They can only evaluate to be either true or false, in
  * which they always appear on the console in lowercase format. You can think of Booleans as any kind 
  * of power switch where if the switch is on then it will evaluate to true and off will evaluate to false.
  * Booleans really get their shine on when using conditional statements. The if/else conditional 
  * for example will frequently feature if statements that are true and the else statements evaluating to be false. 
  * 
  */
  
  var myBoolean = true;
  var thisOtherBoolean = false;
  console.log(myBoolean); //prints => true;
  
  // 4. Array //
  
  /**
   * An array is a collection datatype tha is represented with the square bracket notation []. It is 
   * possible for arrays to withhold any or all of the datatypes available in Javascript such as strings,
   * booleans, numbers, objects, declared variables, functions, or even other arrays. In arrays, the values 
   * are all 0-indexed and can be accessed using bracket notation only. The first index is always 0, the second 
   * is 1, etc. Arrays come equipped with the length propety telling us how many values are inside the array.
   * Keep in mind that there are many other methods that can be used on arrays, but not on our other 
   * collection, objects, since arrays are always ordered.
   */
  
  let myFilledArray = [7, "The Rock", myBoolean, false, [101, 2.5, 777]];
  const secondArray = [64, 66, 68];
  console.log(secondArray[0]); // prints => 64
  console.log(myFilledArray.length); //prints => 5
  
  // 5. Object //
  
  /**
   * The object datatype is a complex datatype. Objects are unordered collections that contain "key" : value
   * pairs. To access anything within your object, you can use dot or bracket notation. The difference is that with
   * objects, dot notation can only be used. Arrays do not accept dot notation.
   */
  
  var personal = {
      firstName: "Zachary",
      lastName: "Gaston",
      age: 30,
      dog: "Chelsea"
  };
  console.log(personal.dog); //prints => "Chelsea"
  console.log(personal["age"]); //prints => 30
  
  // 6. Function //
  
  /**
   * Functions in Javascript are a blocks of code designed to run when the function is invoked or called. The
   * syntax for functions begins with the keyword function, followed by the name of the function, the parameters
   * if there are any that are to be included within the parenteses, curly braces, and inside those curly braces 
   * a specific block of code to be executed. To invoke a function, one must first use the name of the function,
   * followed by parentheses containing the arguments you put inside.
   * 
   */
  
 function concatenation(a, b) {
 
 return a + b;
 }
 concatenation("Ro", "cky"); //prints => "Rocky" when called
 
 // 7. undefined //
 
 /**
  * The undefined datatype appears primarily when a variable has been declared in your code, but that variable has
  * not been defined yet.
  */ 
  
 var insect;
 console.log(insect); // prints => undefined
 
 // 8. Null //
 
 /**
  * The null datatype simply means that there is an empty or non-existent value within your code. Null has been 
  * essentially defined but in actuality it means nothing.
  */
  
  let fan = null;
  console.log(fan); // prints => "null" to the console.
  
  // 9. NaN //
  
  /**
   * NaN is a datatype that means that its value is "Not a Number". Inherently, this means that the value
   * can not be configured and it can not be written. When math functions fail, this is the returned value.
   * 
   */
  
  console.log(Math.sqrt(-777)); // prints NaN
  
  // 10. Infinity and -Infinity //
  
  /**
   * The infinity datatype is a property that belongs to the global object. It is a variable within the 
   * global scope. Infinity has the same behaviors as it does within mathematics. One behavior is that infinity is greater
   * than any other number. Another one is that any numerical value that is added or multiplied by infinity
   * will evaluate to infinity. Any numerical value divided by infinity will evaluate to 0. The negative 
   * datatype is the same as the negative value within our global object that is infinity. Some behaviors
   * negative infinity have are that any negative value that is multiplied by negative infinity will eaual a
   * positive infinity and any positive value that is multiplied by negative infinity will evaluate to be negative
   * infinity.
   */
  
console.log(2020/0);  // => prints "Infinity"

console.log(64*-Infinity); // => prints "-Infinity"


// 11. What is the difference between primitive/simple and complex data types?//

/**
 * Primitive datatypes are essentially only one value. This is the case for example with all strings, booleans, and 
 * numbers. Complex datatypes represent a collection of values, that can be a conglomerate of many datatypes 
 * whether they are simple or complex.
 * 
 */
 
 /*12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 What does that mean, and how are they different? */
 
 /**
  * The main difference between datatypes that utilize reference vs datatypes that use copy is that a 
  * reference datatype's value will be stored as a reference. They are not stored directly on the variable, 
  * as a value, as compared to the primitive datatypes in which that they are stored. In my first primitive example,
  * when I assign originName to equal my fullName variable, the value of fullName is kept. This even occurs when 
  * I changed the value of fullName. In the second example representing our complex datatypes, when I changed the 
  * original value, both values changed because it simply was not the reference. 
  * 
  * 
  */

var fullName = 'Zachary Gaston'; 
var originName = fullName; // => means originName evaluates to the value of fullName
fullName =  'Dwayne Johnson';
console.log(originName); // => prints "Zachary Gaston"
console.log(fullName); // => prints "Dwayne Johnson"

var people = {name: "Monica"};
var morePeople = people;
people.name = "Austin";
console.log(people.name); // prints => "Austin"
console.log(morePeople.name); //prints => "Austin"