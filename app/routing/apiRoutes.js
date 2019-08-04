let friends = require('../data/friends');

module.exports = (app) => {
    
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    })

    app.post('/api/friends', (request, result) => {
        let user = request.body.scores
        let friendIndex = 0
        let minScore = 65
        let totalScores = []
        //Loop through each item in user scores and grabbing the number value
        for(let item in user) {

            user[item] = parseInt(user[item])
        }
        //Map and reduce methods are used to grab the absolute value of the difference in values contained in newFriend and user scores
        for(let item in friends) {
   
            let newFriend = friends[item].scores
           
            let differences = newFriend.map((x,i) => x - user[i]).map(x => Math.abs(x))
            
            
            let newScores = differences.reduce((a,b)=> a + b)
        
            
            totalScores.push(newScores)
        }
        //Reduce is used again to get the total difference which is compared with the minimum difference to find a match.
        totalScores = totalScores.reduce((a,b) => a + b)
        if(totalScores < minScore) {
            friendIndex = friends[Math.floor(Math.random() * 5) + 1]
            minScore = totalScores
        }
    
        friends.push(request.body)
        result.json(friends[friendIndex])
    })
};
