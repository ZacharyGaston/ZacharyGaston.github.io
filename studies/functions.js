/**
 * 
 * Functions:
 * 
 * 0. In Javascript functions are considered to be one of its main fundamental building blocks. 
 * This procedure is a machine-like factory that consists of a set of statements that can perform task or calculate values.
 * Functions have the ability to be called or invoked a multitude of times later.
 * 
 */

// 1a. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? //

/**
 * There are two phases when it comes to using functions. The first phase involves declaring or naming our function which is done with 
 * either a variable declaration or expression. The second phase is done by executing an invocation of the function by calling it with
 * your arguments.
 * 
 */
 
let a = 30;
let b = 5;
function myMultiplyFunc(c, d){
console.log(a * b); /*this is the code block that will be executed when we call our arguments */
}
 myMultiplyFunc(a, b); // prints => 150
 

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //

/**
 * A function’s parameters are located within the function’s parentheses that are directly positioned
 * right after the name of the function. Arguments come into play when the function is invoked. 
 * This involves using the function name you declared followed by parentheses with our arguments 
 * in which our parameters will substitute. In my above example, I used the parameters of c and d, 
 * while for my arguments, I used a and b for my invocation.
 */


// 3. What’s the syntax for a NAMED function? //

/**
 * It’s important to note that functions in Javascript do not always need a name. In my above example, 
 * however, I used myMultiplyFunc as the function name.
 */
 
// 4. How do we assign a function to a variable?//

/**
 * In javascript, assigning a function to a variable involves first off realizing we are using a function
 * expression. The example below uses this concept where I assigned my function to the const variable
 * myFruitTotal, but I did not name my function.
 */
 
let apples = 20;
let bananas = 12;
const myFruitTotal = function(w, x){
return w + x;
}
myFruitTotal(apples, bananas); // prints => 32 to the console.

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.//
//How do we specify inputs, and how do we specify outputs?//

/**
 * When using functions, Inputs come into play when we decide what arguments we want to utilize when
 * invocating our function. There is no limit on the number of inputs we want to use. However, this is 
 * only the case depending on if those inputs match the number of parameters when the function was named, 
 * declared, or expressed. The two examples I’ll provide below will showcase one function that will demonstrate
 * one input and two outputs and for the function example I’ll use a function with no inputs.
 */
 
let z = 99;
function myValue(m){
console.log(z + 101); 
console.log(z - 69);
}
myValue(z); //  prints => 200 and 30 to the console

function invisibleInputs() {
console.log("Where are my inputs?");
}
invisibleInputs();// prints => “Where are my inputs?” to the console.

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.//

/**
 * In this example below, childrenFunk takes one argument from its parent function, which is named
 * parentalVariable, and an argument from the global scope, which is named globalVariable.
 */
 
var globalVariable = 29;
(function parentalFunk(){
var parentalVariable = 19;
console.log(parentalVariable); // => logs to the console 19.
function childrenFunk(a, b) { //here are our parameters named a and b
return a - b; // will subtract 19 from 29
}
console.log(childrenFunk(globalVariable, parentalVariable));
/* => our arguments here are globalVariable and parentalVariable. The console.log will evaluate to 10. */
} ()); //self invokes parentalFunk

/*7. Closures: Functions form closures around the data they house. If an object returned from the
Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue 
to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding 
JavaScript Closures with Ease)*/

/**
 * A closure consists of an action that involves referencing a variable located in a parent scope
 * which ultimately leads to being able to keep the value alive. We know that Javascript variables
 * have the ability to belong to the local or global scope. This makes closures useful because
 * essentially, we can make our global variables that we declared, local or private. In my example
 * below, my childrenFunk2 is a closure. It references variables that are located in both its parent
 * function and its global function. 
 */
 
var secondGlobalVariable = 16;
(function secondParentalFunk(){
    var parentalVariable2 = 8; //parentalVariable2 is a local variable
    console.log(parentalVariable2); //prints => 8 to the console
    function childrenFunk2(j, k){ // childrenFunk2 is the inner function as well as a closure
        return j - k; 
    }
console.log(childrenFunk2(secondGlobalVariable, parentalVariable2)); /*Right here I am calling/invoking using
a global variable and an outer variable. Prints to the console 8*/ 
}());