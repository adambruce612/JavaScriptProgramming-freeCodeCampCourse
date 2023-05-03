// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true || givesCertificate === true) {
//     generateCertificate();
// }

// function generateCertificate() {
//     console.log("Generating certificate....");
// }

// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = false;
let likesStartups = true;
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie();
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
