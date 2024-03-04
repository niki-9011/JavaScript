function orders(product, price) {
  const products = { coffee: 1.5, water: 1.0, coke: 1.4, snacks: 2.0 };
    if (product in products); const result = products[product] * price
        console.log(`${result.toFixed(2)}`);
}
orders("water", 5);
orders("coffee", 2);