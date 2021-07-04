const hello = (req, res) => {
    res.send('Hello World!');
};

const checkout = (req, res) => {
    try {
        const body = req.body;
        console.log(body);
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
    } catch (e) {
        console.error('failed to process response', e);
        res.status(500).send('server error');
    }
};

module.exports = {
    hello,
    checkout,
};
