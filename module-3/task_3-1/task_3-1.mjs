"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text1 = "I can take the bus to school.";
const text2 = "I will make it to the buss on time."
const text3 = "I missed the buss...";

let WakeUpTime = 8;

const TimeBussLeaves = 7;
const TimeBusLeaves2 = 8;
 

if (WakeUpTime === TimeBussLeaves) { // Wake up at 6
  printOut("I woke up at 6. " + text1); 
} else if(WakeUpTime === TimeBussLeaves) { // Wake up at 7
  printOut("I woke up at 7. " + text2);
} 
else { 
  printOut("I woke up at 8. " + text3); // Wake up at 8
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let variable = ((Math.random()*3) - 1); // generates a random number between -1 and 1

if (variable === 1) {
  printOut("variable is positive");
} else if (variable === -1) {
  printOut("variable is negative");
} else {
  printOut("variable is zero");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let picturesize = Math.floor(Math.random()*8)+1; //generates a random number between 1 and 8

if (picturesize < 4) {
  printOut("The picture size is too small");
} else if (picturesize > 6) {
  printOut("The picture size is too large");
} else {
  printOut("The picture size is ok");
}

printOut("Thank you.");
printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut("Month = " + monthName);
  printOut("You must take vitamin D")
}
  else {
    printOut("You do not need to take vitamin D")
  }

const daysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = monthList.indexOf(monthName);
const days = daysInMonth[monthIndex];

printOut("The number of days = " + days);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let GalleryOpenType = "Open";

switch (monthName) {
  case "January":
    printOut("Month = " + monthName);
    break;
  case "February":
    printOut("Month = " + monthName);
    break;
  case "Mars":
    GalleryOpenType = "Closed";
    printOut("Month = " + monthName);
    break;
  case "April":
    GalleryOpenType = "Open nextdoor";
    printOut("Month = " + monthName);
    break;
  case "May":
    GalleryOpenType = "Closed";
    printOut("Month = " + monthName);
    break;
  case "June":
    printOut("Month = " + monthName);
    break;
  case "July":
    printOut("Month = " + monthName);
    break;
  case "August":
    printOut("Month = " + monthName);
    break;
  case "September":
    printOut("Month = " + monthName);
    break;
  case "October":
    printOut("Month = " + monthName);
    break;
  case "November":
    printOut("Month = " + monthName);
    break;
  case "December":
    printOut("Month = " + monthName);
}
printOut("Gallery status: " + GalleryOpenType);

printOut(newLine);
