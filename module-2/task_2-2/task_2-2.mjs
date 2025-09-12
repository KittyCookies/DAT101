"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("2 + (3 * (2 - 4)) * 6 = " + (2 + (3 * (2 - 4)) * 6));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meter = 25.34;
const svar = meter * 39.37;
printOut("25.34 meter er " + (svar).toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dager = 3;
let timer = 12;
let minutter = 14;
let sekunder = 45;
let totalSekunder = (dager * 24 * 3600) + (timer * 3600) + (minutter * 60) + sekunder;
totalSekunder = totalSekunder/60;
printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + totalSekunder + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let min = 6322.52;
let days = min/60/24;
let wholedays = Math.floor(days);
let remainingofdays = days - wholedays;

let hours = remainingofdays*24;
let wholehours = Math.floor(hours);
let remainingofhours = hours - wholehours;

let minutes = remainingofhours*60;
let wholeminutes = Math.floor(minutes);
let remainingofminutes = minutes - wholeminutes;

let seconds = remainingofminutes*60;
let wholeseconds = Math.floor(seconds);
let remainingofseconds = seconds - wholeseconds;

printOut("6322.52 minutes = " + wholedays + " days " + wholehours + " hours " + wholeminutes + " minutes " + wholeseconds + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollars = 54;
const oneNOK = 76 / 8.6;
const oneDollar = 8.6 / 76;
const nok = Math.round(dollars * oneNOK);

const usd = Math.round(nok * oneDollar);

printOut("54 USD = " + nok + " NOK" + newLine + "477 NOK  = " + usd + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
const length = text.length;
const char = text.charAt(19);
let part = text.slice(35, 43);
let index = text.indexOf("earth");
//https://www.w3schools.com/js/js_string_methods.asp#mark_slice
printOut(length + " characters" + newLine + char + " is the 19th character in the string" + newLine + "The starting position at 35 to 43 are: " + part + newLine + " The word 'earth' starts at position " + index);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Is 5 greater than 3?
const svar6a = 5 > 3;
printOut("Is 5 greater than 3?: " + svar6a);

//Is 7 greater than or equal to 7?
const svar6b = 7 >= 7;
printOut("Is 7 greater than or equal to 7?: " + svar6b);

//Is "a" greater than "b"?
const svar6c = "a" > "b";
printOut("Is 'a' greater than 'b'?: " + svar6c);

//Is "1" less than "a"?
const svar6d = 1 < "a";
printOut("Is '1' less than 'a'?: " + svar6d);

//is "2500" less than "abcd"?
const svar6e = 2500 < "abcd";
printOut("Is '2500' less than 'abcd'?: " + svar6e);

//"arne" is not equal to "thomas".
const svar6f = "arne" != "thomas";
printOut(" 'arne' is not equal to 'thomas'?: " + svar6f);

//(2 equals 5) is this statement true?
const svar6g = 2 == 5;
printOut("(2 equals 5) is this statement true?: " + svar6g);

//("abcd" is greater than "bcd") is this statement false?
const svar6h = "abcd" > "bcd";
printOut("('abcd' is greater than 'bcd') is this statement false?: " + svar6h);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Value "245" as a string to a number
const value1text = "245";
const value1number = parseInt(value1text, 10);

//Value "57.23 NOK" as a string to a number
const value2text = "57.23 NOK";
const value2number = parseFloat(value2text);

//Value "25 Kroner" as a string to a number
const value3text = "25 Kroner";
const value3number = parseFloat(value3text);

printOut("\"245\" = " + value1number + newLine + "\"57.23 NOK\" = " + value2number + newLine + "\"25 Kroner\" = " + value3number);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.random();
r = r * 360+1;
r = Math.ceil(r);

printOut("Random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let QuestionDays = 131;
let OneDay = 1
let Weeks = OneDay * 7;

let convertweeks = Math.floor(QuestionDays / Weeks);
let remainingdays = (QuestionDays % Weeks);

printOut("131 days are " + convertweeks + " weeks and " + remainingdays + " days");
printOut(newLine);