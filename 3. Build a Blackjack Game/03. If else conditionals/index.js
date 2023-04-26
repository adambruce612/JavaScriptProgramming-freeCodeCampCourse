let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) { ///three equals mean strictly equal
    console.log("Wohoo! You're gob Blackjack!");
} else {
    console.log("You're out of the game!");
}