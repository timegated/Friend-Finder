let path = require('path');

module.exports = (app) => {
    app.get('/survey', (require, result) => {
        result.sendFile(path.join(__dirname, '../public/survey.html'));
    })

    app.get('/', (require, result) => {
        result.sendFile(path.join(__dirname, '../public/home.html'));
    })

    app.get('*', (require, result) => {
        result.sendFile(path.join(__dirname, '../public/home.html'));
    })
}


