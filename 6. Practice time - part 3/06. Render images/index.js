// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

// const container = document.getElementById("container");

// function renderImages(images) {
//     for (let i = 0; i < images.length; i++) {
//         container.innerHTML += `<img class = "team-img" src="${images[i]}">`;
//     } 
// }

// renderImages(imgs);

// //Instructor Solution
// const container = document.getElementById("container")

// function renderImages() {
//     for (let i = 0; i < imgs.length; i++) {
//         container.innerHTML += `<img class = "team-img" src="${imgs[i]}">`;
//     } 
// }

// renderImages();

//Refactor Instructor Code-Better to manipulate DOM as few times as possible.
const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class = "team-img" src="${imgs[i]}">`;
    } 
    container.innerHTML = imgsDOM;
}

renderImages();

