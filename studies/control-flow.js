/**
 * 
 * CONTROL-FLOW:
 * 
 * 0. When using Javascript, one of its important roles it utilizes to determine making
 * decisions based on boolean values of true and false is the concept of control flow.
 * Control flow can be boiled down to the statements or functions that will be primarily
 * executed within your code, starting from the first line unitl the last line, unless
 * instructed by other structures to do otherwise, changing its control flow. Below, will
 * showcase the ways of how we can change the control flow.
 */
 
 // 1. If Statements //
 
 /**
  * If statements are initiated by beginning with the keyword if and are followed by 
  * putting your conditional inside the parentheses that needs to be met in order for
  * your code to run. In order for the code to run, the conditional must evaluate to
  * a boolean value of either true or false. After dictaing what your conditional statement
  * is, a code block within the curly braces, {}, is followed right after. It is here where 
  * you will place your code to run if the conditional evaluates to be true. If our if statement
  * is not true, then we will proceed to the next statement. 
  */
  
  var number = 619;
  if (number < 504){
      console.log("We are not in the right area code!"); /*prints => "We are not in the right area code!"
      if our number variable assigned to the number of 619 is smaller than the number of 504. If the number
      variable assigned to 619 is larger than 504, then we will continue to the next conditional
      statement. In this example, our number is larger than 504, therefore the execution of this 
      statement will not perform.*/
      
  }
  
  // 2. Else-if Statements //
  
  /**
   * Within your if statements, you can have zero else-if statements or as many else-if statements as you want.
   * The thing to keep in mind is, if any of our statements within our if-else-if chain determines
   * to be true, then only the else-if statement that evaluates to be true is the one that will run.
   * Else-if statements utilize the keyword else if, and other than that, holds a similar syntax of
   * having a conditional inside of its parentheses, and a code block within the curly braces that will
   * run if the code evaluates to a boolean value of true. 
   * 
   */ 
   
   else if(number < 404){
       console.log("Somehow we are in Atlanta?"); /*=> In this example of our first else-if chain,
       we see that this statement will not execute because when comparing our two numbers of 619 and 404
       while using the less than operator, we see that 619 is larger than 404. Therefore, when using our
       console.log, "Somehow we are in Atlanta?" will not be printed to our console and we will move on to 
       our next else-if statement.*/
       
   }else if(number < 702){
       console.log("Let's go gamble in Vegas!"); /* prints => "Let's go gamble in Vegas!" to the console.
       When performing if-else-if chain statements only one else-if statement will execute. Since this statement
       is the only one that will run, our code will break out of the chain and not look for any other statements
       within its chain to perform. */
       
   }else if(number < 212){
       console.log("Let's visit the 'Big Apple' another time."); /* => Since, our previous else-if 
       statement evaluated its boolean to be true, then this else-ifstatement example will not be read, making our 
       journey to New York delayed until another time.*/
   }
   
   // 3. Else statements //
   
   /**
    * The else statement within Javascript represents the default statemnt in which, if any of our else-if
    * statements are determined to evaluate to be a boolean of false, then this statement will be our default that will 
    * evaluate to a boolean of true. The syntax of else statements begin with the keyword else and then followed by 
    * a specific code block to be executed. No other conditional statements within the parentheses are required. This 
    * is because else statements are our final statements and they only run at the very end of our conditional
    * statement chain.
    * 
    */
    
    else {
        console.log("That's enough traveling for today."); /*Since our previous else-if statement has already
        evaluated to be true, then this else statement example will not run.*/
    }
    
    // 4. Switch Statements //
    
    /**
     * Switch statements in Javascript are another example of control flow in which these statements are based on a set of
     * conditions in order to perform an action. How it works is that it will take a variable and evaluate it, associate it
     * with the different cases according to your code, and then if it discovers a case that matches, it will execute only 
     * that particular statement. If more than one case statement matches, then only the first one will execute only if the break
     * keyword is present. If there are not any cases to be matched, then a default keyword is utilized in order for the program to
     * find and transfer all control to that clause, performing the associated statement. Inherently, default clauses are the final
     * statement within switch statements, but they can be in other places.
     */
     
     let computers = "Apple Mac";
     
     switch (computers){
         case "HP":
         console.log("Never owned a HP.");
         break;
         
         case "Lenovo":
             console.log("No Lenovo computers in this house.");
             break;
             
             case "Apple Mac": // => Here lies our match
             case "Dell":
                 console.log("Currently own a Mac but probably will get a dell pc in the future.");
                 // => This is the case that matches and will print to the console: "Currently own a Mac but probably will get a dell pc in the future.".
                 break;
                 default:
                    console.log("Time to invest in a super computer.");
     }