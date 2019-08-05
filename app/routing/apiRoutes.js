let friends = require('../data/friends');
//
module.exports = (app) => {
    
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    })

    app.post('/api/friends', (request, result) => {
       let user = request.body.scores
       let newUser = []
       let totalScores = []
       //Parsing the real numbers from user scores (Stored as strings)
        for(let item in user) {
            user[item] = parseInt(user[item])
            newUser.push(parseInt(user[item]))
        }
        console.log(newUser)
        //Subtracting each user score from each score of each item in each friend in the friend database.
        //Getting only the absolute value of each operation
        
        for(let item in friends) {

            let yourNewFriend = friends[item].scores
            
            let differences  = yourNewFriend.map((x,i) => x - newUser[i]).map(x => Math.abs(x))
            
            let differencesInScores = differences.reduce((a,b) => a + b)

            totalScores.push(Object.assign({}, friends[item], {totalDiff: differencesInScores}))
        }
        //Giving each friend in the array a new propert(the total differences) and assigning that total difference as a property
        //Returning the friend which has the lowest difference property.
        totalScores.sort(function compareScores(a,b) {
            return a.totalDiff - b.totalDiff
        })
        result.json(totalScores[0])
        

      
       
    })
};
