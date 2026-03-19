"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick(){
  // Get values from inputs
  let width = parseFloat(document.getElementById("txtRectWidth").value);
  let height = parseFloat(document.getElementById("txtRectHeight").value);

  // Calculate
  let area = width * height;
  let circumference = 2 * (width + height);

  // Display results
  document.getElementById("txtTask1Output").textContent = "Circumference = " + circumference + ", Area = " + area;
}
document.getElementById("txtTask1Output").addEventListener("click", cmbTask1CalculateClick);


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

let task2Words = [];

function txtTask2WordKeyPress(event) {
  // Check if Enter key was pressed
  if(event.key === "Enter"){

    // Get input value
    let word = document.getElementById("txtTask2Word").value;

    //Add to array (only if not empty)
    if(word.trim() !== ""){
      task2Words.push(word);
    }

    // Display results
    document.getElementById("txtTask2Output").textContent = "Words (" + task2Words.length + "): " + task2Words.join(", ");

    // Clear input field
    document.getElementById("txtTask2Word").value = "";
  }
}
document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask3CheckAnswerClick() {
  let selected = [];

  // Get all checkboxes with the same name
  let checkboxes = document.getElementsByName("chkTask3");

  //Loop through them
  checkboxes.forEach(cb => {
    if (cb.checked){
      // Get the text next to the checkbox
      selected.push(cb.parentElement.textContent.trim());
    }
  });

  // Display results
  document.getElementById("txtTask3Output").textContent = "Selected: " + selected.join(", ");
}
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", cmbTask3CheckAnswerClick);


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function createCarRadioButtons(){
  let container = document.getElementById("divTask4Cars");

  for(let i = 0; i < CarTypes.length; i++){
    // Create radio button
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "car"; // IMPORTANT: same name = grouped / group all radios
    radio.value = CarTypes[i].value; // store the numeric value

    // Add event listener to show selection
    radio.addEventListener("change", showSelectedCar);

    // Create label text
    let label = document.createTextNode(CarTypes[i].caption);

    // Add to page
    container.appendChild(radio);
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  }
}

// Show selected car when changed
function showSelectedCar(event) {
  const selectedValue = Number(event.target.value);  // convert string to number
  const selectedCar = CarTypes.find(car => car.value === selectedValue);
  document.getElementById("txtTask4Output").textContent =
    "Selected car: " + selectedCar.caption;
}

// Calls everything onto page
window.onload = function(){
  createCarRadioButtons();
}



//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//What to do: 
//1. Detect when the user changes the dropdown
//2. Get the selected option's text
//3. Display it in txtTask5Output

function showSelectedAnimal(event){
  // Get the selected element
  let select = event.target;

  // Get the selected text
  let selectedText = select.options[select.selectedIndex].text;

  //Show it in the output paragraph
  document.getElementById("txtTask5Output").textContent = "You selected: " + selectedText;
}

document.getElementById("selectTask5Animals").addEventListener("change", showSelectedAnimal);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function fillGirlsDropdown() {
  const select = document.getElementById("selectTask6Girls");

  for (let i = 0; i < GirlsNames.length; i++) {
    const option = document.createElement("option");
    option.value = GirlsNames[i];  // use name as value
    option.text = GirlsNames[i];   // display name
    select.appendChild(option);
  }

  // Optional: set initial output
  document.getElementById("txtTask6Output").textContent = "You selected: " + select.value;
}

function showSelectedGirl(event) {
  const selectedName = event.target.value;  // value is already the name
  document.getElementById("txtTask6Output").textContent = "You selected: " + selectedName;
}

// Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  fillGirlsDropdown();
  document.getElementById("selectTask6Girls").addEventListener("change", showSelectedGirl);
});



//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//What to do:
//1. Fill selectMovieGenre with the MovieGenre array
//2. On button click (cmbAddMovie), read all the inputs:
    //Title (txtMovieTitle)
    //Genre (selectMovieGenre)
    //Director (txtMovieDirector)
    //Rate (txtMovieRate)
//3. Add a new row to the table (tblMovies) with this data
//4. Keep a running movie count for the "Nr:" column

function fillMovieGenreDropdown(){
  const select = document.getElementById("selectMovieGenre");

  for(let i = 0; i < MovieGenre.length; i++){
    const option = document.createElement("option");
    option.value = MovieGenre[i]; // store name
    option.text = MovieGenre[i]; // display name
    select.appendChild(option);
  }
}

let movieCount = 0; // keep track of rows

function addMovieToTable(){
  movieCount++;

  // Read input values
  const title = document.getElementById("txtMovieTitle").value;
  const genre = document.getElementById("selectMovieGenre").value;
  const director = document.getElementById("txtMovieDirector").value;
  const rate = document.getElementById("txtMovieRate").value;

  // Get table
  const table = document.getElementById("tblMovies");

  // Create new row
  const row = table.insertRow(-1); // -1 adds to the end

  // Insert cells
  const cellNr = row.insertCell(0);
  const cellTitle = row.insertCell(1);
  const cellGenre = row.insertCell(2);
  const cellDirector = row.insertCell(3);
  const cellRate = row.insertCell(4);

  // Fill cells
  cellNr.textContent = movieCount;
  cellTitle.textContent = title;
  cellGenre.textContent = genre;
  cellDirector.textContent = director;
  cellRate.textContent = rate;
}

window.onload = function(){
  fillMovieGenreDropdown();
  document.getElementById("cmbAddMovie").addEventListener("click", addMovieToTable);
};
