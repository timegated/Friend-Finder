
//TIM AND ERIC FRIEND FINDER

//Steve Brule, Tairy Greene, Pierre, Casey Tatum, Raz, Steve Mahanahan, Palmer Scott, Spagett

const path = require("path");

module.exports = function(app) {
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })

    app.use((req, res) => {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })
}


