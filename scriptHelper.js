// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    console.log(imageUrl);
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
};

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(Number(testInput)) === true) {
    return "Not a number";
   } else {
    return "Is a number";
   };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

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
    };

    if (validateInput(copilot) === "Is a number") {
        alert("Please enter a valid name for Copilot.");
        preventDefault();
    } else if (validateInput(copilot) === "Not a number") {
        copilotStatus.innerHTML = `Copilot ${copilot} ready for launch.`;
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
    };

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        document.getElementById("launchStatus").style.color = "#419F6A";
    };
};


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
};

function pickPlanet(planets) {
    let chosenPlanet;
    let index = Math.floor(Math.random(planets)*planets.length);
    chosenPlanet = planets[index];
    console.log(chosenPlanet);
    return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
