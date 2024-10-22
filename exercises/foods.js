let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

let subtotal = 0;
for (let index = 0; index < lunch.length; index++) {
    subtotal += lunch[index].price;
}
let tax = subtotal * 0.08;
let tip = subtotal * 0.18;

let total = subtotal + tax + tip;

console.log("Subtotal: $" + subtotal.toFixed(2))
console.log("Tax (8%): $" + tax.toFixed(2))
console.log("tip (18%): $" + tip.toFixed(2))
console.log("Total Due: $" + total.toFixed(2))