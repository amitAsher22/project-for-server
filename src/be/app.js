const express = require('express');
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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/checkout', (req, res) => {
    const body = req.body;
    const { products } = body;
    let total = 0;
    let names= []

    for (const product of products) {
        total = total + (product.price * product.quantity);
        names.push(product.title)
    }
    const response = {
        total,
        names,
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
