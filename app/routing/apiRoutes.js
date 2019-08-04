let friends = require('../data/friends');

module.exports = (app) => {
    
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    })

    app.post('/api/friends', (request, result) => {
        console.log(request)
        friends.push(request.body);
    })
};
