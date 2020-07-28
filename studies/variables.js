/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //

var myName;
console.log(myName); // prints => undefined

/**
 * When declaring a variable we will always start with the keywords var, let, or const. Camel 
 * casing is also important as you would have your first word lowercased and any subsequent
 * words will have the first letter of that word capitalized. In the above example, we decalred
 * our variable with the name myName. Although it is possible to declare and initialize at the same time
 * this example shows us what a standard declaration would look like in javascript. The variable
 * myName prints undefined to the console because we have not initialize it to anything using the equal operator.
 */


// 2. initialization or assignment //

myName = 'john';
console.log(myName); // prints => john

/**
 * This coding example shows our initialization process. Since we already declared a var keyword
 * previously, it is not needed to declare var any further. We are now assigning our var, myName to 
 * the string of "john" using our equal operator. 
 */

// 3. re-assignment //

myName = 'bob';
console.log(myName); // prints => bob

/**
 * The above example shows that we have re-assigned a new balue to our variable myName called "bob".
 * It is important to note that when declaring the value, we will always have the authority to change these
 *  values to whatever we want them to be. The exception to this is when we are using the keyword "const".
 */

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

var myVariable = 1;
var myVariable = true;
myVariable = "someString"; 
console.log(myVariable); // prints => "someString"

/**Note: Another important reminder is that we can keep declaring the var keyword whether we are in
 * the declaration or initialization process. However, if we were to do the same with let and const,
 * we would see on the console: SyntaxError: Identifier 'myVariable' has already been declared. 
 */
 
 // 4. var, let, and const //
 
 let newVariable = "Nina Simone";
 newVariable = "Mahalia Jackson";
 
 console.log(newVariable); // => prints to the console "Mahalia Jackson"
 //This shows us that reassignment using the let keyword is possible.
 
 const secondVariable = "Miles Davis";
 console.log(secondVariable); //prints => "Miles Davis"
 
 /**const secondVariable = "Thad Jones"; if we were to console.log this, the console would give us
  * SyntaxError: Identifier 'secondVariable' has already been declared. This means that we cannot 
  * reassign const variables.
  */
  
  if (secondVariable === "Miles Davis"){
      let instrument = "Trumpet";
      console.log(instrument); //prints => "Trumpet" but will only be allowed inside the block scope.
      //since we declared using the let keyword.
      var city = "Alton"; 
  }
  console.log(city); // prints => "Alton since our values are allowed outside of the scope because city was
  //declared with the var keyword
  
  /**
   * There are three main differences to keep in mind when using these different variable types. The 
   * first is that let and var contain the ability to be reassigned but not const. The second is that 
   * let and const are contained specifically to the block scope, while var can either be scoped 
   * locally or globally. The last difference is the way that they can be hoisted which will be discussed
   * in the next section.
   */
   
   // 5. Hoisting //
   
   x = 30; // Here this line of code shows that we possibly may have a variable written below and it
   //has been assigned to 30.
   console.log(x); //prints => 30 to the console.
   var x; //our variable is hoisted to the top of our interpreter ready to be used.
   
   /**
    * In JavaScript, variables are designed to be hoitsted to the top of the page. However, let and
    * const are kept in the "Temporal Dead Zone". This is a zone where you cannot access these kinds
    * of variables before they are defined. However, when using the var keyword, this variable is 
    * available for use in the global scope. The var keyword is then ready to be hoisted, initialized,
    * or assigned. The exception to this is if the var is stuck inside of a function, in which means
    * that the var is function scoped.
    */