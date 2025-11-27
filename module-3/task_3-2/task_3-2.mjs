"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtCountUp = "";

for (let i = 1; i <= 10; i++){ //counting up
  txtCountUp += " " + i.toString();
}  

let txtCountDown = "";

for (let i = 10; i > 0; i--){ //counting down
  txtCountDown += " " + i.toString();
}
printOut(txtCountUp + newLine + txtCountDown + newLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Guess number game */

let Number = Math.floor(Math.random() * 60) + 1;
while (Number !== 21){
  Number = Math.floor(Math.random() * 60) + 1;
}

printOut("The number is " + Number);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let CorrectNumber = Math.floor(Math.random() * 1000000) + 1;
while (CorrectNumber !== 21){
  CorrectNumber = Math.floor(Math.random() * 100) + 1; //Change it to 1 000 000 after figuring out stuff
  printOut("The number is " + CorrectNumber);
}
printOut(newLine)
printOut("I guessed it right!")
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Find all prime numbers between 2 and 200*/ //since 1 is not a prime number!

for (let n = 2; n <= 200; n++) {

  let d = 2;
  let isPrime = true;  // assume prime until proven otherwise

  while (d < n){

    /*check*/ if (n % d ==0) {
      isPrime = false; //found a not prime
      break; // stop checking
    }
    d++; // try next divisor
  }
  if (isPrime) {
    printOut(n);
  }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);