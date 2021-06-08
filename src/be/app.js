const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/checkout', (req, res) => {
    const params = req.params;
    const query = req.query;
    const body = req.body;
    res.send(`the params: ${JSON.stringify(params)}, query: ${JSON.stringify(query)}, body: ${JSON.stringify(body)}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
