"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function TodaysDate(date){
    printOut("Today is " + date);
}

TodaysDate("Friday, October 18, 2019");

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getTodaysDate(){
    //makes a date object for today
    const today = new Date();

    //format it like Norwegian date: day.month.year
    const options = {day: "numeric", month: "long", year: "numeric"};
    const norwegianDate = today.toLocaleDateString("no-No", options);
    
    printOut("Today it is: " + norwegianDate);

    return today; // <--returns the Date object
}

function DaysUntil2XKO(today){
    //Release Date
    const releaseDate = new Date("2025-05-14");

    //difference in milliseconds
    const diff = releaseDate - today;

    //convert milliseconds to days
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
}

function showCountdown(){
    const today = getTodaysDate(); // prints the date and returns a Date object
    const daysLeft = DaysUntil2XKO(today); // uses the returned Date object

    printOut("2XKO Countdown")
    printOut("Just " + daysLeft + " days left til the release!");
}

showCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that receives the radius of a circle and prints the diameter, circumference, and area.

function Circle(radius){
    const diameter = 2 * radius
    const area = Math.floor((radius * radius) * Math.PI);
    const circumference = Math.floor((Math.PI * diameter));
    printOut("The radius is " + radius + "." + " The diameter is " + diameter + ". " + "The circumference is " + circumference + "," + " and the area is " + area + ".")
}

Circle(10);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that receives the height and width. Print the circumference and area of the given rectangle.

function Rectangle(){
    const Width = 20
    const Height = 4000
    const areaRectangle = (Width * Height);
    const circumferenceRectangle = ((2 * Width) + (2 * Height));

    printOut("The area of the rectangle is " + areaRectangle + "," + " and the circumference is " + circumferenceRectangle + ".")
}

Rectangle();

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. 
// Use three different numbers and print all three combinations as integers (no decimals). 
// Design the function to take two parameters: first the temperature, then the temperature type/id. 
// Use these parameters to convert to the other two temperature types and print them.

function convertTemperature(value, type){
    // value = the number
    // type = the type (example, "C")
    let Celsius;

    if (type === "C"){
        Celsius = value;
    } else if (type === "F"){
        Celsius = (value - 32) * (5/9);
    } else if (type === "K"){
        Celsius = (value - 273.15);
    } else {
        printOut("Unknown type.");
        return;
    }
//Converts from Celsius to the others
let Fahrenheit = (Celsius * (9/5) + 32);
let Kelvin = Celsius - 273.15;

//Print results as rounded up numbers
printOut("Celsius: ", Math.floor(Celsius));
printOut("Fahrenheit: ", Math.floor(Fahrenheit));
printOut("Kelvin: ", Math.floor(Kelvin));

}
//Put these down for the function to actually run. Just mere examples:

convertTemperature(30, "C");

//For some reason its not printing out numbers, just the words- help???? lol
//Come back to this...

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//1: Have a function make 2
function TwoInputs(){

}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the distance. 
// If more than one parameter is missing, return NaN.

//let Speed = "undefined";
//let Distance = (Speed * Time);    

//function Calculation(){
    //let Time = (Speed * Distance)}


//let Time = Calculation();


//idk...
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function Longtext(){
    let text = "This is a text";
    if (text.length < 21){
        text = text + "!"; //add something to make the text longer
    } else {
        text + " world!"; //???
    }
    printOut(text);
}

Longtext();

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n){
    if (n == 1){
     return 1;
    } else {
     return n * factorial(n - 1);
    }
}
let n = 5;
let result = factorial(n);

printOut("The factorial number is: " + result )

printOut(newLine);
