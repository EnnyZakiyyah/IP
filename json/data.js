const data = require("./data.json");

console.log("1. Find items in the Meeting Room.\n")
var matchingResults = data.filter(function(x){ return x.placement.name == "Meeting Room" ; });
console.log(matchingResults);

console.log("2. Find all electronic devices.\n")
var typeResults = data.filter(function(x){ return x.type == "electronic" ; });
console.log(typeResults);

// console.log("3. Find all the furniture.\n")
// var tagResults = data.filter(function(x){ return x.type == "furniture" && x.tags == "furniture"; });
// console.log(tagResults);

// console.log("4. Find all items were purchased on 16 Januari 2020.\n")

// var tagResults = data.filter(function(x){ return x.purchased_at; });


// console.log("5. Find all items with brown color.\n")
// var Results = data.filter(function(x){ return x.tags == "brown" ; });
// console.log(Results["tags"][2]);


