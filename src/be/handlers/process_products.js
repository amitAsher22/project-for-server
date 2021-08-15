/**
 * Checkout route is expected to go over the products and calculate the total price of the order
 * and also accumulate all the product names (titles) into an array
 *
 * @param products - array of product items
 * each product has a: title, price, quantity, etc
 *
 * @returns {{total: number, names: []}}
 */
const getTotal = (products) => {
    let total = 0;
    for (const product of products) {
        total = total + (product.price * product.quantity);
    }
    return total;
};


const getNames = (products) => {
    let names = []
    for (const product of products) {
        names.push(product.title);
    }
    return names;
};

module.exports = {
    getTotal,
    getNames,
}
