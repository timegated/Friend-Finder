let express = require('express');
let path = require('path');
let app = express();

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'app/public/')));
app.use('/public', express.static(path.join(__dirname, 'app/css/')));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT)
})