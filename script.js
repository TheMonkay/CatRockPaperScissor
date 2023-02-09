// Spray cucumber box (rock paper sciccors for cats)
// let button return value - user choice of weapon
// returned value displayed in html Span
// pc random choice - three numbers
// random nubers converted to text pcweapons
// pcweapons displayed in html span
// function result if statement to compare pcweapons to userchoice
// result displayed in html span
// counter out of 5 for an over all win
// maybe gif pop up for each result
// maybe life bar for health 
// maybe some data collection to see if random choice beats human choice or human choice beats random. I think random will beat. lets find out
// **alternative version where you add mathmatical equations to say the possibilty of computer choice. if you can solve it in a specific time you will be able to predict pc"s choice. 
// **add adjustable timer to allow users more or less time to calculate possibilties %
// spray bottle 0, cucumber 1, box 2 (sb soak box, c wacks sb, b defelcts c)
// 0>2>1>0

// use span id to display funtion reults 
const pcWeaponDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
const userWinCountDisplay = document.getElementById("user-history")
const pcWinCountDisplay = document.getElementById("pc-history")
let userChoice
let computerChoice
let finalResults
let initialUserWinCountDisplay = 0;
let initialPcWinDisplay = 0;

// click of button results in the funtions to be run
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id   
    userChoiceDisplay.innerHTML = userChoice
    pcWeaponChoice()
    results()
    whoWon()
}))

// pc random choice 
function pcWeaponChoice() {
pcWeapon = [0, 1, 2];
const random = Math.floor(Math.random() * pcWeapon.length);
console.log (random, pcWeapon[random]);

if (random === 0) {
    computerChoice = "Spray Bottle"
}
if (random === 1) {
    computerChoice = "Cucumber"
}
if (random === 2) {
    computerChoice = "Box"
}
pcWeaponDisplay.innerHTML = computerChoice
}

// results - function compares pcWeapon and userchoice
function results () {
    // draw options
    if (computerChoice == "Spray Bottle" && userChoice == "Spray Bottle") {
        finalResults = "Draw! You are both wet pussies!"
    }
    if (computerChoice == "Cucumber" && userChoice == "Cucumber") {
        finalResults = "Draw! You both ran away from a snake!"
    }
    if (computerChoice == "Box" && userChoice == "Box") {
        finalResults = "Draw! A minute has passed and you both are still turtles."
    }
    //win options
    if (computerChoice == "Spray Bottle" && userChoice == "Cucumber") {
        finalResults = "Win! You wacked that puss!"
        initialUserWinCountDisplay++
    }
    if (computerChoice == "Box" && userChoice == "Spray Bottle") {
        finalResults = "Win! Radi-claws is a wet puss!"
        initialUserWinCountDisplay++
    }
    if (computerChoice == "Cucumber" && userChoice == "Box") {
        finalResults = "Win! Your box blocked the penetration!"
        initialUserWinCountDisplay++
    }
    // Lose
    if (computerChoice == "Spray Bottle" && userChoice == "Box") {
        finalResults = "Looooooohh-Zzzeerrrr! You got soaked!"
        initialPcWinDisplay++
    }
    if (computerChoice == "Cucumber" && userChoice == "Spray Bottle") {
        finalResults = "Boo Booo you baby! Be better, you thought he had a snake!"
        initialPcWinDisplay++
    }
    if (computerChoice == "Box" && userChoice == "Cucumber") {
        finalResults = "Weak throw! You couldn't penetrate Radi-claws!"
        initialPcWinDisplay++
    }
    resultDisplay.innerHTML = finalResults 
}

/* // // function incrementScore(scoreSpan)
// // scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1; */


function whoWon() {
if (results == "Win! You wacked that puss!", "Win! Radi-claws is a wet puss!", "Win! Your box blocked the penetration!") {
    userWinCountDisplay.innerText = initialUserWinCountDisplay
}
else (results == "Looooooohh-Zzzeerrrr! You got soaked!", "Boo Booo you baby! Be better, you thought he had a snake!", "Weak throw! You couldn't penetrate Radi-claws!")   
    pcWinCountDisplay.innerText = initialPcWinDisplay
}



