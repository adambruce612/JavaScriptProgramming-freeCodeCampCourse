// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    //title is key, string is the value
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

//Dot notation is used to access the object keys
console.log( course.tags )
//Bracket notation can also be used
console.log(course["tags"])


