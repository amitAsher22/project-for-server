const { getTotalAndNames } = require('../process_products');

const products = [
    {
        title: 'product 1',
        quantity: 1,
        price: 2
    },
    {
        title: 'product 2',
        quantity: 2,
        price: 3
    },
];

test('check that total is calculated properly', () => {
    const { total } = getTotalAndNames(products);
    expect(total).toBe(8);
});

test('check that names is returned as an expected array of product names', () => {
    const { names } = getTotalAndNames(products);
    expect(names).toStrictEqual(['product 1', 'product 2']);
});
