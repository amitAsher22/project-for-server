const {getTotal, getNames} = require('./process_products');

const checkout = (req, res) => {
    try {
        // read the request
        const body = req.body;
        console.log("work",body);
        const { products } = body;

        // run the logic
        const total = getTotal(products);
        const names = getNames(products);

        // return the response
        const response = {
            total,
            names,
        };
        res.send(response);
    } catch (e) {
        console.error('failed to process response', e);
        res.status(500).send('server error , try again');
    }
};

module.exports = {
    checkout,
};
