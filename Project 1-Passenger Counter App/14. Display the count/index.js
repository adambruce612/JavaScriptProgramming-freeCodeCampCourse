// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count\

//camelCase naming convention for names
let countEl = document.getElementById("count-el"); //pass in argument (count-el is the argument)

console.log(countEl);

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count;
    console.log(count)
}


