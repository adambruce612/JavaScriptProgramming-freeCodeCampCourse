const welcomeEl = document.getElementById("welcome-el")

// Example
// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + "👋"    
// }

// greetUser("Per")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Adam Bruce 👋"    
}

greetUser("Howdy")