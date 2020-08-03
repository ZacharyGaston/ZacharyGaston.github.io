
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//implement a function called triangles taking the parameter number
//create a for loop iterating through our number param. Starting condition should
//have our index assigned to 1 and our stopping condition should have our index be less
//than or equal to number. Last we'll need an incrementor.
//console.log where in the parentheses will be the string of an octathorpe and we'll use the
//repeat method on our index. The repeat() method constructs and returns a new string which 
//contains the specified number of copies of the string on which it was called, concatenated together.

function triangles(number) {
  for (let i = 1; i <= number; i++){
    console.log("#".repeat(i));
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Implement the function called fizzBuzz taking no parameters
//Log the numbers 1 -15
//Create a series of if-else-if chain statements: 
//If the number can be divided by 3, console.log("fizz")
//If the number can be divided by 5, console.log("buzz")
//If the number can be divided by both 3 and 5, console.log("fizzbuzz")
//else console.log(i)
function fizzBuzz() {
  for(let i = 1; i <= 15; i++){
    if( i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    }else if(i % 3 === 0){
      console.log("fizz");
    }else if(i % 5 === 0){
      console.log("buzz");
    }else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//implement a function called drawChessBoard taking number as a parameter. The function's
//purpose is to create a chessboard, using newline characters. At each position of the grid
//should contain an octathorpe or a space. It should work for all sizes.
//create a variable called board and assign it to an empty string
//create a variable called size and assign it to our number parameter
//for loop thorugh our size variable and then create a nested for loop so we can have another
//index going. Create a conditional where if our two indexes are added together and are 
//divided by 2, and if the result strictly equal 0 then have our board variable use the +=
//operator to assign to an empty string. Else have our board variable use the += operator
//to assign to a string of #. Outside the for loop, have the board variable use the +=
//operator to assign to break the line ("\n"). Console.log our board. Call our function at the end

function drawChessboard(number) {
let board = "";
let size = number;
for(let i = 0; i < size; i++){
  for(let j = 0; j < size; j++){
    if((j + i) % 2 === 0) {
      board += " ";
    } else{
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
}
drawChessboard();

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
