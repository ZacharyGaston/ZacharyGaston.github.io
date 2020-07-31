/**
 * 
 * SCOPES:
 * 
 * 0. In Javascript, closures determine which of thr created variables within your code
 * has accessibility. Variable access is obtainable when defined within its scope. This 
 * ultimately depends on where in your code your variables are located wihtin a scope,
 * giving you the visibility you need of your variables and values, relaive to the function.
 * Scopes in Javascript, can either be local or block scoped and they can be global scoped.
 * 
 */
 
 // 1. What variables are bound to those scopes? //
 
 /**
  * Our three variables of var, let, and const fall into different categories regarding scopes,
  * reassignment, and hoisting. For our var variable, var has the ability to be reassigned, it 
  * can be hoisted, and they are scoped to functions but, they are not scoped to if blocks or 
  * loop blocks. Our let variable can be reassigned, it cannot be hoisted, and for their scoping,
  * let variables can be scoped to functions, if blocks, and loop blocks. Our last variable, const, 
  * can not be reassigned, it cannot be hoisted, and for its scoping, const is also scoped to 
  * functions, if blocks, and loop blocks.
  */
  
  // 2. Global Scope //
  
  /**
   * Here in the first coding example below, I created a variable called southernUnitedStates
   * and assigned it as a value to the string of "Louisiana". Then I declared a function called 
   * southernStates that uses nothing as a parameter. Within my code block, I have returned 
   * southernUnitedStates which is the name of my declared variable. A general rule of thumb
   * you should generally not write your code to have a variable with the same name as your parameter, 
   * for it may cause errors in the future like writing the wrong name if one were to call this function
   * and the computer probably won't know what you are trying to reference within your code block.
   * If this was the function body, then the name adhered to your function would be the name you would
   * reference, just like in the instance that if you were to use it globally. 
   */ 
 
 // 2a. Global Scope Example //
 
 var southernUnitedStates = "Louisiana"; // our declared variable located outside of our function in the global scope
 
 function southernStates(){ //declared function called southernStates
  return southernUnitedStates; //returns my southern state
 }
 
 southernStates(); //invocation of function prints => "Louisiana"
 
 /**This example of Global scope shows us that even though southernUnitedStates was mentioned inside 
  * of my function, the interpreter had to go outside of my function in order to retrieve the value.
  */
  
  // 2b. Local Scope Examole //
  
  function newState(){ //declared a function called newState
   var westState = "California"; //declared and initialized a variable inside a function's local scope
  }
 
 //console.log(westState); //prints => Reference Error: westState is not defined
 
 /**
  * This example of a local scope has our variable of westState inside of the function. When we try
  * to console.log(westState), we are trying to retrieve the value of westState outside of the
  * local scope. Since, this cannot be done, we cannot obtain an evaluation resulting in a 
  * Reference Error: westState is not defined.
  */ 
 
 // 2b.2 Local Scope Exapmle part 2
 
  function newState(){
   var westState = "California";
    console.log(westState);
  }
 
 newState();
 /**
  * This example of local scope primarily uses the same wording as our previous function example. What we have
  * done differently however, is that I moved our console.log underneath my initialized variable and then I 
  * called my function outside the code block. The variable that is initialized in my code block is bound to
  * the local scope, and in essence, gives us the value of "California" when invoked.
  * 
  */
  
  // 2c. Block Scope Example
  
  /**
   * Block Scopes entail variables being located within the code block, {}, of conditional statements like if
   * statements or loops.
   */
  
  function blockFood(){
   if (true){
    var food1 = "Pizza"; //function scoped. Not scoped to if blocks
    const food2 = "Hamburgers";// block scoped
    let food3 = "Fried Chicken";//block scoped
   }
  }
 blockFood();
 
 /**
  * 
  * 3. There is a variable in the global scope and a parameter with the same name, 
  * if you are within the function body which would you access? If you were in the global
  * scope which would you access? Why?
  * 
  */
  
 var number = 47; // my declared variable called number is within the global scope
 /**
  * in my function called subtract, my parameter of number is the same name as my variable number
  * and my return of number occurs within a local scope.
  */
 function subtract(number){ 
  return number - 27;
 }
 subtract(32); // prints 5
 console.log(number); //prints => 47
 
 /**
  * In the above example, if we are discussing being in the function body, then my parameter of number is 
  * the one being called because it is located within the local scope. The JAvascript interpreter has
  * the ability to look outside of its scope, if and only if there was nothing defined. However,
  * this is not the case since my parameter is being returned in the local scope and being invoked.
  * If we wanted to be in our global scope then we would need to access my variable called var number.
  * It is important to remember that the local scope can go to the global scope but not vice versa.
  */