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
  CorrectNumber = Math.floor(Math.random() * 50) + 1; //Change it to 1 000 000 after figuring out stuff
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
//For loop within a for loop, for this code.

let TableP5 = "";
for (let row = 1; row <= 7; row++) {
  let line5 = "";

  for (let col = 1; col <= 10; col++) {
    line5 += "K" + col + "R" + row + " ";
  }

  TableP5 += line5 + newLine;
}
printOut(TableP5);
printOut(newLine);

printOut("--- Part 6 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for(let i = 0; i < 5; i++){
  let score = Math.floor(Math.random() * 236) + 1;
  let percent = (score / 236) * 100;

  if (percent >= 89) {
  printOut("The Student's scores are in. The grade is A, you passed.")
}
else if (percent >= 77) {
  printOut("The Student's scores are in. The grade is B, you passed.")
}
else if (percent >= 65) {
  printOut("The Student's scores are in. The grade is C, you passed.")
}
else if (percent >= 53) {
  printOut("The Student's scores are in. The grade is D, you passed.")
}
else if (percent >= 41) {
  printOut("The Student's scores are in. The grade is E, you barely passed.")
}
else {
  printOut("The Student's scores are in. The grade is F, get out.")
}

}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for(let i > 5; i < 5; i++) {

  Math.floor(Math.random() * 6) + 1;

  let throws = 0;
  let done = false;

  if (!done){
    throws++;

    // roll your 6 dice here
    // check if the condition is met
    // if yes → done = true
  }
 //I couldn't figure this out..
}

printOut(newLine);