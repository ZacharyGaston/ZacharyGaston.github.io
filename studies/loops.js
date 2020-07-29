/**
 * 
 * LOOPS:
 * 
 * 0. In Javascript, there are three possible loops that are available to programmers. Anytime that
 * you want to perform any kind of iteration of information repeatedly, loops will be the ideal go to for
 * doing so. Loops contain the following within their syntax structure, a starting condition, a stopping 
 * condition, an incrementor or a decrementor, and a code block. They also have the ability to be nested inside
 * of each other or inside of functions.
 */
 
 // 1. For Loops //
 
 /**
  * The syntax for a for loop begins with the keyword "for". This is then followed by setting up your
  * starting condition, your stopping condition, and either your incrementor or decrementor for your index.
  * Incrementation can be performed by using the ++ sign to count up, the -- sign to count down. We can also
  * use the += or -= operators to perform our iterations in either direction by a numerical value that is more
  * than 1. For loops are designed perfectly for when you want to just iterate code repeatedly and they are the go 
  * to loop for when you need to iterate over arrays.
  */
  
  // Example 1a. Printing and iterating a number of times //
  for (let i = 0; i < 2; i++){
      console.log("What's good?"); /* => this is our codeblock that will print to the console "What's good?" 
      two times*/
  }
  
  // Example 1b. Printing and iterating a range between two numbers //
  for (let i = 15; i < 25; i++){
      console.log(i); // => prints the numbers 15, 16, 17, 18, 19, 20, 21, 22, 23, and 24 to the console.
  }
  
  // Example 1c. Printing and iterating our numbers backwards //
  for (let i = 7; i >= 0; i--){
      console.log(i); //=> prints the numbers 7, 6, 5, 4, 3, 2, 1, 0 to the console.
  }
  
  // Example 1d. Looping forward through our array //
  var favoriteFruits = ["Watermelons", "Strawberries", "Grapes"];
  for (let i = 0; i <= favoriteFruits.length - 1; i++){
      console.log(favoriteFruits[i]); // => prints "Watermelons", "Strawberries", "Grapes" to the console.
  }
  
  //Example 1e. Looping backwards through our array //
  for (let i = favoriteFruits.length - 1; i >= 0; i--){
      console.log(favoriteFruits[i]); // => prints backwards resulting in "Grapes", "Strawberries", "Watermelons" to the console.
  }
  
  // 2. While Loops //
  
  /**
   * While loops begin by initializing a variable that you choose to a number datatype, representing our starting condition.
   * Next we use the while keyword followed by our condtional in parentheses representing our stopping conditonal that will
   * iterate our loop as long as its evaluation proved to be a boolean value of true. Within the curly braces lies our code 
   * block and either our incrementor or decrementor. One of the main issues with while loops is that infinite loops are easy
   * to obtain if you wrote your code with a wrong stopping condition or you forgot or chose a wrong incrementor. 
   */ 
   
  let i = 0;
  while(i < 10){
      console.log(i); /* => prints to the console the numbers 0 through 9. Notice how it doesn't print the 
      the number 10. If we would have used the <= operator, It would have printed 0-10 followed by another 10  
      the console. Or if we wanted to include the 10 one time, then the conditional would need to be i < 11.*/ 
      i++;
  }
  
  // 3. For-in Loops //
  
  /**
   * For-in loops are primarily used for iterating over our object complex datatype. After you have created an object and 
   * initialized a variable to it, the syntax for a for-in loop begins with the keyword for, followed by parentheses where
   * it will contain a variable representing a key in the object, then the keywords "key" and "in", and last the name of the 
   * object that is to be iterated. Next is the codeblock which starts off with our curly braces. Usually what is performed
   * inside the code block is the obtaining of either your keys or your values. Below are examples of how to obtain keys or values.
   * 
   */ 
  
  // 3a. Example of obtaining keys with a for-in loop //
  let trees = {
      Tree1: "Bald Cypress",
      Tree2: "Oak",
      Tree3: "Redwood"
  };
  
  for (var key in trees){
      console.log(key); //prints => Tree1, Tree2, and Tree3, which are our keys, to the console.
  }
  
  // 3a. Example of obtaining values with a for-in loop //
  for(let key in trees){
      console.log(trees[key]); // prints => Bald Cypress, Oak, and Redwood, which are our values, to the console.
      //We did this by accessing our trees object by using bracket notation on our key keyword.
  }