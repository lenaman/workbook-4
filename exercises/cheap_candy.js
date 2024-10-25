let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    ];

// Which candies costs less than $4.00?
for (const product of products){
    if (product.price < 4.00) {
    console.log(product)
    }
}
// Which candies has "M&M" its name?
for (const product of products){
    if (product.category == "M&M") {
        console.log(product)
    }
}
// Do we carry "Swedish Fish"?
for (const product of products){
    if (product.category === "Swedish Fish") {
        console.log(product)
    }
}