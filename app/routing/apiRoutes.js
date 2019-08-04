let friends = require('../data/friends');

module.exports = (app) => {
    
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    })

    app.post('/api/friends', (request, result) => {
        let user = request.body.scores
       for(let item in friends) {
           let friendScores = friends[item].scores
           console.log(friendScores)
       }
        
        console.log(user)
        
    //   friends.push(request.body);
    })
};
