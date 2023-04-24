let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function lapLog() {
    console.log(lap1 + lap2 + lap3);
}

lapLog();

//Instructor solution
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }

//Will not work because of block scope - variable is created in the function and can only be seen in the function
//console.log(totalTime);

// logLapTime();