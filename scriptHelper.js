// Write your helper functions here!
require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
// }

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(Number(testInput)) === true) {
    return "Not a number";
   } else {
    return "Is a number";
   };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // alert("The formSubmission function is working.");

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if ((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")) {
        alert("All fields are required.")
        preventDefault();
    };

    if (validateInput(pilot) === "Is a number") {
        alert("Please enter a valid name for Pilot.");
        preventDefault();
    } else if (validateInput(pilot) === "Not a number") {
        pilotStatus.innerHTML = `Pilot ${pilot} ready for launch.`;
        // alert("Pilot ready for launch.");
        // preventDefault();
    };

    if (validateInput(copilot) === "Is a number") {
        alert("Please enter a valid name for Copilot.");
        preventDefault();
    } else if (validateInput(copilot) === "Not a number") {
        copilotStatus.innerHTML = `Copilot ${copilot} ready for launch.`;
        // alert("Copilot ready for launch.");
        // preventDefault();
    };

    if (validateInput(fuelLevel) === "Not a number") {
        alert("Please enter a valid fuel level.");
        preventDefault();
    } else if (fuelLevel < 10000) {
        alert("Fuel is too low for launch.");
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel too low for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
        preventDefault();
    } else {
        fuelStatus.innerHTML = "Fuel supply high enough for launch."
        // preventDefault();
    };

    if (validateInput(cargoLevel) === "Not a number") {
        alert("Please enter a valid cargo mass.");
        preventDefault();
    } else if (cargoLevel > 10000) {
        alert("Cargo mass is too high.");
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch."
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "#C7254E";
        preventDefault();
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch."
        // preventDefault();
    };

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        document.getElementById("launchStatus").style.color = "#419F6A";
        // preventDefault();
    };
};


// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
