/**
 * Checkout route is expected to go over the products and calculate the total price of the order
 * and also accumulate all the product names (titles) into an array
 *
 * @param products - array of product items
 * each product has a: title, price, quantity, etc
 *
 * @returns {{total: number, names: []}}
 */
const getTotalAndNames = (products) => {
    let total = 0;
    let names = []

    for (const product of products) {
        total = total + (product.price * product.quantity);
        names.push(product.title);
    }
    return {total, names};
};

module.exports = {
    getTotalAndNames,
}
