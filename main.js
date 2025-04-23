// Given Array of planets with respective weight multiplier
var planets = [    
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];      
// Get dropdown element from HTML element with the id "planets"
const dropdown = document.getElementById("planets") 

// Loop through each item in the array
planets.forEach(planet => {
    // Create new <option> element to add to dropdown
    const option = document.createElement("option");
    // Set 'value' to be the multiplier portion of the option
    option.value = planet[1];
    // Set visible text to be taken from index 0 of sub-arrays
    option.text = planet[0];
    // Add the <option> element to the dropdown menu
    dropdown.appendChild(option);
});

function calculateWeight(weight, planetName) { 
    // Loop through every planet 
    for (let i = 0; i < planets.length; i++) {
        const name = planets[i][0];         // Planet name
        const gravity = planets[i][1];      // Planet gravity
        // User selects planet
        if (name === planetName) {
            // Calculate and return new weight 
            
            return weight * gravity;
        }
    }
} 


function handleClickEvent(e) {
    // Store user input weight in variable "userWeight" and converts string into a number 
    const userWeight = parseFloat(document.getElementById("user-weight").value);
    // Set planetName to planet chosen by user from dropdown options 
    const planetName = dropdown.options[dropdown.selectedIndex].text;
    // Calls previous function and stores value inside of "reselt"
    let result = calculateWeight(userWeight, planetName);
    console.log("result:", result)
    // Clean up unnecessary decimals with Number()
   const cleanResult = Number(result.toFixed(2));
    // Get result text
    const resultText = document.getElementById("output");
    resultText.innerHTML = `If you were on ${planetName}, you would weigh ${cleanResult}lbs!`;
    // resultText.innerText = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
} 

document.getElementById("calculate-button").onclick = handleClickEvent;

// Reverses dropdown menu options for bonus challenge

function reverseDropdown() {
    // Store planet options inside "dropdown"
    const dropdown = document.getElementById("planets");
    // Turn dropdown options into an array
    const options = Array.from(dropdown.options);
    // clear existing options
    dropdown.innerHTML = ''; 
    // Add options in reverse order
    options.reverse().forEach(option => {
      dropdown.appendChild(option);
    });
  }

  reverseDropdown();

