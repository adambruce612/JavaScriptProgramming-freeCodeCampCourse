let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()\

//Removes an item from the end
largeCountries.pop();
console.log(largeCountries);

//Adds an item to the end
largeCountries.push("Pakistan");
console.log(largeCountries);

//Removes an item from the beginning
largeCountries.shift();
console.log(largeCountries);

//Adds an item to the beginning 
largeCountries.unshift("China");
console.log(largeCountries);