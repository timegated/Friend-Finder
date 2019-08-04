const path = require("path")
const bodyParser = require("body-parser")
const express = require("express");

const app = express();



const PORT = process.env.PORT || 3000;

//Converting object data into json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api.json"}))

//Getting file from app folder for html content

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});