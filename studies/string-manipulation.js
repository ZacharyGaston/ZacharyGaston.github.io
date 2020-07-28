/**
 * 
 * STRING MANIPULATION:
 * 
 * 0. When we are crating a string in Javascript, our variable becomes an instance
 * of a string object. This means that we gain access to the ability of manipulating 
 * our strings by using methods, operators, and locating their specific properties. 
 * 
 */
 
 // 1. String Manipulation With Operators
 
 /**
  * With the help of the assignment operator I used it in my example to assign my birthName
  * and my surName variables to a fictional character. Then under my fullName variable, I used
  * concatenation through the additional operator. This + operator gives us the ability to make giant
  * strings no matter the size, no matter the amount of times as well. Javascript does not add spaces so
  * we have to manually insert them as indicated with the space in between the quotations. With my
  * additionalName variable I also put a space after the quotation which is another way of adding spaces.
  * Lastly, with the help of the addition assignment operator, this concatenated my strings together including
  * the spaces as well.
  */
  
 let birthName = "Robin";
 let surName = "Nico";
 let additionalName = " Light of the Revolution";
 let fullName = surName + " " + birthName;
 console.log(fullName); //prints => "Nico Robin"
 console.log(fullName += additionalName);// prints => "Nico Robin Light of the Revolution" with 
 //the help of the additional assignment operator
 
 // 2. String Manipulation with string methods //
 
 /**
  * In the examples listed below, I executed some basic methods of string manipulation in order to acquire
  * a multitude of properties of my strings that I used from the previous example. The length property when 
  * attached to my fullName variable game a length of 34 characters within my string.I used the indexOf method
  * to returns the 1 since i is the 1st index within the string. The slice method will perform an extraction of
  * letters when I start at 0 and end at 3 producing the result of Nic. The .toUpperCase and .toLowerCase methods
  * are used to modify all characters within the string to be uppercased or lowercased respectively. The .charAt method
  * performs by returning the said value of the character at its current index. And last, the repeat method will 
  * repeat the string that is associated with it to the left of the dot the number of times that is within the 
  * parentheses.
  */
  
 console.log(fullName.length); //prints => 34
 console.log(surName.indexOf('i')); // prints => 1
 console.log(surName.slice(0, 3)); //prints => Nic
 console.log(fullName.toUpperCase()); //prints => NICO ROBIN LIGHT OF THE REVOLUTION
 console.log(fullName.toLowerCase()); //prints => nico robin light of the revolution
 console.log(birthName.charAt(2)); //prints => b
 console.log(birthName.repeat(4)); //prints => RobinRobinRobinRobin