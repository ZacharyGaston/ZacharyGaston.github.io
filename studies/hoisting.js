/**
 * 
 * HOISTING:
 * 
 * 0. Hoisting is a process in Javascript that involves compiling all of your code. When 
 * the code is compiled, all of our varaible declarations involving the var keyword are
 * figuratively lifted to the top of their function or local scope, if declared inside of
 * a function, or those var declarations are moved to the top of their global scope, which happens 
 * if our var declarations have been declared outside of a function. Keep in mind again that 
 * this happens figuratively, as Javascript will not literally move any amount of your code 
 * around. It's really just a process of how Javascript reads the code when compilation occurs.
 */
 
 // 1. Hoisting Variables in Javascript //
 
 /**
  * As we stated earlier, variable declarations using the var keyword get moved to the top of
  * their scope when Javascript begins its compilation phase at runtime. One thing to keep in
  * mind however is the fact that the only thing that is moved is the variable declaration
  * and not the actual value that may be initialized to the variable. This means that, when
  * console logging, any variable declarations using the var keyword that is hoisted to the top, 
  * will print to the console, undefined first and then will print the value initialized to the
  * variable. However, our other variable keywords, let and const, can not be hoisted.
  */
  
  // Example 1a. Hoisting using the var keyword //
  
  var hoistedVariable; //Here is our declared variable
  console.log(hoistedVariable); //prints undefined to the console.
  hoistedVariable = "All of this will be hoisted."; // hoistedVariable initialized to a string datatype
  console.log(hoistedVariable); // prints => "All of this will be hoisted." to the console.
  
  
  // Example 1b. Hoisting using the let keyword //
  
  console.log(hoistedVariable2); // prints => Reference Error: Cannot Access "hoistedVariable2" before initialization
  let hoistedVariable2 = "Hoist Me";
  
  
  // Example 1c. Hoisting using the const keyword //
  
  /**
   * Constant variables must have a declaration and an initialization on the same line or your code
   * will result in a Syntax error.
   */
   
   //noHoist = "Can't Hoist Me"; //cannot be hoisted
   //const noHoist; 
   //console.log(noHoist) // gives us the Syntax Error: Missing initializer in const declaration.
   
   
   // 2. Hoisting with functions //
   
   /**
    * When hoisting our functions in JAvascript, function declarations are hoisted to the top,
    * right above our hoisted variable declarations. Function expressions are not hoisted.
    * 
    */
    
    // Example 2a. Hoisted function declaration//
    
    hoistedDeclaration();
    
    function hoistedDeclaration(){
        console.log("We're Moving On Up!"); //prints => "We're Moving On Up!" for function declarations
        //are hoisted to the top and in this case, will be above our invocation
    }
    
    // Example 2b. Non-hoisted function expression //
    
    stayingRightHere();
    
    var stayingRightHere = function(){
      console.log("Ain't going nowhere!"); // prints => TypeError: stayingRightHere is not a function
    };
    
    
    //3. What is the JS Interpreter?
    
    /**
     * The Javascript interperter is a program that can analyze and execute code line by line in order to
     * to translate code forming a communication between computer and programmer. The interpreter will
     * analyze your code to figure out what you want to achieve and how to execute those actions. It will
     * convert high-level source code (var x = 93) to low-level machine code, aka binary (010101010 etc.). The 
     * interpreter can read your code in order to hoist any variable and/or function declarations and will
     * let you know if any errors occur that needs to be fixed. 
     */