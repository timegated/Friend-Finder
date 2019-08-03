//Accessing items in a nested array - OBJECT PROPERTY
//10 questions with a score range from 1-5
//Each friend gets 10 scores, each question answered gets a score. Array is populated
//Compatibility logic
//Convert scores into arrays, compare arrays (subtract each item in one array from the other item in the other array)
//Add up total differences with no negative numbers, absolute values Math.abs (strong math)

const friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", (req,res) => {
        res.json(friends)
    })
}
