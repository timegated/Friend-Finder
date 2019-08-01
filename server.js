const path = require("path")
const express = require("express");

const app = express();



const PORT = process.env.PORT || 3000;

require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`)
})