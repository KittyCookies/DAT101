"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < 20; i++) {
    printOut(number1[i])
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut(number2.join("-"))

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const greeting = ("Hei på deg, hvordan har du det?");

const greetingA = greeting.split(" ");

for (let i1 = 0; i1 < greetingA.length; i1++){
    printOut("Word number: " + (i1 + 1) + ", Index: " + i1 + ", Word: " + greetingA[i1]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const NameList = ["Anne","Inger","Kari","Marit","Ingrid","Liv","Eva","Berit","Astrid","Bjørg","Hilde","Anna","Solveig","Marianne","Randi","Ida","Nina","Maria","Elisabeth","Kristin"]

function RemoveName(NameList, NametoRemove){
    let index = NameList.indexOf(NametoRemove)
    if (index !== -1){
        //the name exists
        NameList.splice(index, 1);
        printOut(NametoRemove + " was removed from the list.")
    } else {
        //the name does not exist
        printOut(NametoRemove + " does not exist.")
    }
}
RemoveName(NameList, "Liv"); //The function should remove the name Liv form the list here.
RemoveName(NameList, "Benny"); //The function will say this name does not exist.

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Namelist1 = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]

const AllNames = NameList.concat(Namelist1);
printOut(AllNames)

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(aTitle, aAuthor, aISBN){
    this.aTitle = aTitle;
    this.aAuthor = aAuthor;
    this.aISBN = aISBN;
    }

    toString() {
        return `Title: ${this.aTitle}, Author: ${this.aAuthor}, ISBN: ${this.aISBN}`;
    }

}

//Create three books
const books = [
    new TBook("Transformers Vol. 1", "Daniel Warren Johnson", "9781534398177"),
    new TBook("How to Piss Off Men: 109 Things to Say to Shatter the Male Ego", "Kyle Prue", "9781728291925"),
    new TBook("The Hobbit", "J.R.R. Tolkien", "978-0261102217"),
];

//loop through the array and print each book
for (let i3 = 0; i3 < books.length; i3++){
    printOut(books[i3].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

const keys = Object.keys(EWeekDays);

for (let i4 = 0; i4 < keys.length; i4++){
    const key = keys[i4]; //Current key, eks, "WeekDay1"
    const day = EWeekDays[key]; //Corresponding object with value and name

    printOut(key + ": value = " + day.value + ", name = " + day.name);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const RandomNumbers = Array.from({length: 35}, () => Math.floor(Math.random() * 20) + 1);

//function printArrayInRows(arr, itemsPerRow){
    //let line = "";
    //for (let i5 = 0; i5 < arr.length; i5++){
        //line += arr[i5] + " ";
        //if((i5 + 1) % itemsPerRow === 0 || i5 === arr.length - 1){
            //printOut(line.trim());
            //line = "";
        //}
    //}
//}

function chunkArray(arr, chunkSize) {
    let chunks = [];
    for (let i5 = 0; i5 < arr.length; i5 += chunkSize){
        //Take a slice of the array, join the numbers with spaces, and add to chunks.
        chunks.push(arr.slice(i5, i5 + chunkSize).join(" "));
    }
    // Join all chunks with newline characters to make rows
    return chunks.join("\n");
}
//Original array
printOut("Original array:\n" + chunkArray(RandomNumbers, 10));

//Sorting out numbers ascending
RandomNumbers.sort((a, b) => a - b);
printOut("Sorted ascending:\n" + chunkArray(RandomNumbers, 10));


//Sorting out numbers descending
RandomNumbers.sort((a, b) => b - a);
printOut("Sorted descending:\n" + chunkArray(RandomNumbers, 10));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Count frequency
let frequency = {};
for (let i6 = 0; i6 < RandomNumbers.length; i6++){
    let num = RandomNumbers[i6];
    frequency[num] = (frequency[num] || 0) + 1;
}

//Print numbers and their frequency
printOut("Numbers and their frequency:");
for (let num in frequency){
    printOut(num + ": " + frequency[num]);
}

//Map frequencies to numbers and sort numbers
let freqToNumbers = {};
for (let num in frequency){
    let freq = frequency[num];
    if (!freqToNumbers[freq]) freqToNumbers[freq] = [];
    freqToNumbers[freq].push(Number(num));
}
for (let freq in freqToNumbers){
    freqToNumbers[freq].sort((a, b) => a - b);
}

//Sort everything
let sortedFrequencies = Object.keys(freqToNumbers).map(Number).sort((a, b) => b - a);
printOut("Frequencies and corresponding numbers:");
for (let freq of sortedFrequencies){
    printOut(freq + ": " + freqToNumbers[freq].join(", "));
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
