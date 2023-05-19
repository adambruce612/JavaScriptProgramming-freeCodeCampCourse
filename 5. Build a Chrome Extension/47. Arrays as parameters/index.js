// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    console.log(arr[0]);
    return arr[0];
}


// Call it with an array as an argument to verify that it works
getFirst(["test", "array"]);

//Instructor solution
function getfirst(arr) {
    return arr[0];
}

let firstCard = getFirst([10, 2, 5]);

console.log(firstCard);