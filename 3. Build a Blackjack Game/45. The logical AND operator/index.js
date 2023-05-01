let hasCompletedCourse = true
let givesCertificate = true

//Could also be written as if (hasCompletedCourse && givesCertificate) as the if statement automatically checks for if statement is true or false
if (hasCompletedCourse === true && givesCertificate === true) {
    //Nested if statements work but require more code
    // if (givesCertificate === true) {
    //     generateCertificate()
    // }
    generateCertificate();
}

function generateCertificate() {
    console.log("Generating certificate....")
}


