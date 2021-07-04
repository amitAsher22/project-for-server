const express = require('express');
const { checkout, hello } = require('./handlers');

const app = express();
const port = 3000;

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get('/', hello);

app.post('/checkout', checkout);

app.post('/hi', (req, res) => {
    res.send('hi there');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
