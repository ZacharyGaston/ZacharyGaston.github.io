/**
 * 
 * Operators:
 * 
 * 0. In Javascript, this program makes use of operators. Operators have the abillty to perform 
 * operations on single or multiple values and in turn, produce a final result. The following operators:
 * Assignment, Arithmetic, Comparison, Logical, Unary, and Ternary will be discussed below.
 */

// 1. Assignment operators //

/**
 * Our first operator is the "=" operator which primarily allows us to assign variables to values. There 
 * are a plethora of other kinds of operators that do more than just assignment, however. There are ones
 * that can do assignment while simultaneously perform mathematics for instance: the addition assignment
 * operator(+=), the subtraction assignment operator(-=), the multiplaction assignment operator(*=),
 * the division assignment operator(/=), the remainder assignment operator(%=), and the exponential
 * assignment operator(^=). In the example below, I have used the additional assignment operator to 
 * add my variables of x and y together. Then I reassigned x so it can have the final value of 36. I will
 * use this reassigned x for later on in future examples.
 * 
 */ 
 
let x = 12; // => the = operator allows us to assign 12 to the variable x
console.log(x); // prints => 12 to the console.
let y = 24; // => the = operator allows us to assign 24 to the variable y
console.log(y);// => prints 24 to the console.
x += y; // => uses the += operator to assign x + y to x.
console.log(x); // prints => 36 to the console.


// 2. Arithmetic Operators //

/**
 * Arithmetic operators are operators that takes any numerical value, that can be a literal or a variable,
 * as their specific operands and returns a singular numerical value.
 */

console.log(y++); // prints => 25 to the console as the ++ operator adds 1 to the final value.
console.log(3 + 7);// prints => 10 to the console using the addition operator to add 2 numbers together.
console.log(25 - 15);//prints => 10 to the console using the subtraction operator to do mathematical standard subtraction.
console.log(25 % 8); // prints => 1 to the console as the remainder operator divides our first number of 25 by
//our second number of 8, giving us a remainder of 1 left over.
console.log(6 * 12); //prints => 72 to the console using the * operator to multiply the values of our numbers together.
console.log(33 / 3); //prints => 11 to the console using the / operator to divide the values of our numbers achieving a single value.


// 3. Comparison operators //

/**
 * In Javascript, a comparison operator has the ability to compare its operands against each other and
 * return a logical value based on whether or not the comparison evaluates to true. Through the usage of
 * comparison operators, we can compare such datatypes like numerical values, strings, or even object values.
 * Comparison operators also make great mileage when writing conditional statements such as our if and else-if
 * statements. The following examples will still continue to utilize the same variables I used from up above. 
 */
 
 console.log("cats" === "dogs");// prints => false to the console because the two strings are not strictly equal to each other
 console.log(y !== 24);// prints => false to the console as our !== operator means that the value we assigned to our y variable 
 //of 24 is strictly not equal to 24. Since it is a value of 24, it's false.
 console.log(x > y); //prints => true to the console since our greater than operator means that our value of 36 is
 //greater than our value of 24.
 console.log(66 <= x); // prints => false to the console since the less than or equal to operator would dictate that 
 //our value of 66 would be less than or equal to our value of 36.
 
 // 4. Logical Operators //
 
 /**
  * In Javascript, Logical operators are used alongside Boolean values, for when they are used, they will return
  * a value of a Boolean evaluating to true or false. They are extremely handy when writing code for if-else-if 
  * statements, especially in an instamces where you want to write more than one condition for a statement. Keep in mind that
  * the && and || operators return the value of a specified operand meaning that if these operators are used alongside
  * non-Boolean values, they may give you a non-Boolean value in return.
  * 
  */
  
  console.log(x > 12 && x < 24); // => returns false to the console because the double ampersand operator means "and.
  //This means that both comparisons must be true. 36 is > 12 but is not less than 24. 
  
  let dog = "Chelsea";
  console.log(dog === "Courage" || dog === "Chelsea");// => prints to the console true because the || operator
  // means "or" meaning that if either of the statements are true then the outcome will be true, in which case would be 
  //our second comparison statement.
  
  // 5. Unary Operators //
  
  /**
   * In Javascript, unary operators only have the ability to deal with one operand. 
   * Some of these unary operators consists of the ! operator, the - operator, and the typeof operator
   */
   
   console.log(!true); //prints => false because the ! operator does the opposite. It means "Not" and Not true 
   //would evaluate to being false.
   
   function thirdFunk(){
       
   }
   
  let pizzaHutCrust = ["StuffedCrust", "Traditional", "Pan"];
  typeof dog; // => returns "string" since the typeof operator recognizes that a string was associated with the variable
  typeof x; // prints => number
  typeof(thirdFunk);// prints => function
  typeof pizzaHutCrust; // prints => object. Arrays are considered objects
  typeof nonApplicable; //returns undefined.
  
  console.log(-x); //prints => -36 since - is an unary negation operator that turns the original value negative
  console.log(-28); //prints => -28 to the console.
  
  // 6. Ternary Operators //
  
  /**
   * The ternary operator is the only operator in Javascript that contains three operands. The operator
   * can be thought of as being used as a shortcut for if statements. In the US, you have to be 21 in order to 
   * drink so I'm using the ternary operator to evaluate if I was at drinking age when I was 20. You can see the three
   * inputs (a ? b : c where a is my personal.age, followed by a ?, then b representing Yes, then a colon,
   * and c representing No),hence it being ternary. This is basically a short hand of using an if-else-if chain. 
   * 
   */
  
  let personal = {
      name: "Zack",
      age: 20,
      canDrink: "null"
  };
  personal.canDrink = personal.age >= 21 ? "Yes" : "No"; // returns No I'm not old enough to drink.