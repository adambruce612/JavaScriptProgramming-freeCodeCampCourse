// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

//MY solution
let listing = {
    name: "Adam's Castle",
    rooms: 4,
    isAvailable: false,
    tags: ["Scenic", "Convenient Location"]
}

console.log(listing.isAvailable)
console.log(listing.tags)


//Instructor solution
let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)