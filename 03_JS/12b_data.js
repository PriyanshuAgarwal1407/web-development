const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


const electronicsInStock = products.filter(product => product.category === "Electronics" && product.inStock).map(product => product.name);
const affordableBooks = products.filter(product => product.category === "Books" && product.price < 30).map(product => product.name);
const appliancesInStock = products.filter(product => product.category === "Appliances" && product.inStock).map(product => product.name);
const clothingInStock = products.filter(product => product.category === "Clothing" && product.inStock).map(product => product.name);
const homeGoodsInStock = products.filter(product => product.category === "Home Goods" && product.inStock).map(product => product.name);
const groceriesInStock = products.filter(product => product.category === "Groceries" && product.inStock).map(product => product.name);

console.log(electronicsInStock);// Output: ["Laptop", "Headphones", "Monitor", "Keyboard"]
console.log(affordableBooks);   // Output: ["The Hobbit", "Dune"]
console.log(appliancesInStock); // Output: ["Blender", "Toaster", "Microwave Oven"]
console.log(clothingInStock);   // Output: ["T-Shirt", "Jacket"]
console.log(homeGoodsInStock);  // Output: ["Desk Lamp", "Scented Candle"]
console.log(groceriesInStock);  // Output: ["Organic Apples", "Artisan Bread"]



const newProducts = products.filter(product => product.price > 100).sort((a, b) => a.price - b.price)
console.log(newProducts); 
// Output:
/*
[
  {
    id: 15,
    name: 'Jacket',
    category: 'Clothing',
    price: 110,
    inStock: true
  },
  {
    id: 9,
    name: 'Coffee Maker',
    category: 'Appliances',
    price: 150,
    inStock: false
  },
  {
    id: 2,
    name: 'Headphones',
    category: 'Electronics',
    price: 200,
    inStock: true
  },
  {
    id: 12,
    name: 'Microwave Oven',
    category: 'Appliances',
    price: 220,
    inStock: true
  },
  {
    id: 4,
    name: 'Monitor',
    category: 'Electronics',
    price: 300,
    inStock: true
  },
  {
    id: 3,
    name: 'Smartphone',
    category: 'Electronics',
    price: 800,
    inStock: false
  },
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    inStock: true
  }
]
*/


const ans = products.map((product) => ({ name: product.name, price: product.price }));
console.log(ans); 
// Output:
/*
[
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 75 },
  { name: 'The Hobbit', price: 25 },
  { name: 'A Brief History of Time', price: 30 },
  { name: 'Dune', price: 28 },
  { name: 'Coffee Maker', price: 150 },
  { name: 'Blender', price: 80 },
  { name: 'Toaster', price: 45 },
  { name: 'Microwave Oven', price: 220 },
  { name: 'T-Shirt', price: 20 },
  { name: 'Jeans', price: 60 },
  { name: 'Jacket', price: 110 },
  { name: 'Desk Lamp', price: 35 },
  { name: 'Scented Candle', price: 15 },
  { name: 'Picture Frame', price: 22 },
  { name: 'Organic Apples', price: 5 },
  { name: 'Artisan Bread', price: 8 }
]
*/


const reduce = products.reduce((accumulator, product) => {
    if (product.inStock) {
        return accumulator + product.price;
    }
    return accumulator;
}, 0);
console.log(reduce); // Output: 2368