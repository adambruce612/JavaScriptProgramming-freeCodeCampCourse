// What are greeting and name? Parameters
// What are "Howdy" and "James"? Arguments
// What are num1 and num2? Parameters
// What are 3 and 4? Arguments


//.                parameters are on the inside
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments are on the outside
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)