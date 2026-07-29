// Callback Hell
// Callback hell is a term used to describe the situation where multiple nested callbacks are used in asynchronous programming, leading to code that is difficult to read and maintain. This often occurs in JavaScript when dealing with asynchronous operations like API calls, file reading, or timers.

// -----------------------------------------------------------------------------
// Zomato application

// function placedOrder(){
//   console.log("Payment is in progress");
//   setTimeout(()=>{
//     console.log("Payment is received and order is in progress");
//   }, 3000);
// }

// function preparingOrder(){
//   console.log("Your food preparation started");
//   setTimeout(()=>{
//     console.log("Your food is prepared and ready to be delivered");
//   }, 3000);
// }

// placedOrder();
// preparingOrder();

// In the above example, we have two functions placedOrder and preparingOrder that simulate the process of placing an order and preparing food. Each function uses setTimeout to simulate a delay in the process. However, if we want to ensure that the order is prepared only after the payment is received, we would need to nest the preparingOrder function inside the callback of placedOrder, leading to a callback hell situation.

// -----------------------------------------------------------------------------

function placedOrder(callback){
  console.log("Payment is in progress");
  setTimeout(()=>{
    console.log("Payment is received and order is in progress");
    callback();
  }, 3000);
}

function preparingOrder(callback) {
// function preparingOrder() {
  console.log("Your food preparation started");
  setTimeout(() => {
    console.log("Your food is prepared and ready to be delivered");
    callback();
  }, 3000);
}

// placedOrder(preparingOrder); // This will ensure that preparingOrder is called only after the payment is received, but it can lead to callback hell if we have more nested callbacks in the future.

function pickupOrder(callback){
  console.log("Delivery boy is on way to pickup order from restaurant");
  setTimeout(()=>{
    console.log("I have picked up your order and on way to deliver");
  }, 3000);
  callback();
}

// placedOrder(preparingOrder(pickupOrder)); // This will lead to callback hell as we are nesting multiple callbacks, making the code difficult to read and maintain.

function deliverOrder(){
  console.log("Delivery boy is on way to deliver your order");
  setTimeout(()=>{
    console.log("Your order is delivered");
  }, 3000);
}

placedOrder(()=>{
  preparingOrder(()=>{
    pickupOrder(()=>{
      deliverOrder();
    });
  });
});

// This is an example of callback hell, where we have multiple nested callbacks, making the code difficult to read and maintain. Each function is dependent on the completion of the previous function, leading to a pyramid-like structure of nested callbacks.

// -----------------------------------------------------------------------------

const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "biryani", "coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restaurant_location: "Delhi",
};

function placedOrder(orderDetail, Callback) {
  console.log(`${orderDetail.cost} Payment is in progress`);
  setTimeout(() => {
    console.log("Payment is received and order get placed");
    orderDetail.status = true;
    Callback(orderDetail);
  }, 3000);
}

function preparingOrder(orderDetail, Callback) {
  console.log(`Your food preparation started of ${orderDetail.food}`);
  setTimeout(() => {
    console.log("Your order is now prepared");
    orderDetail.token = 123;
    Callback(orderDetail);
  }, 3000);
}


function pickupOrder(orderDetail, Callback) {
  console.log( `Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
  setTimeout(() => {
    console.log("I have picked up the order");
    orderDetail.received = true;
    Callback(orderDetail);
  }, 3000);
}

function deliverOrder(orderDetail) {
  console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
  setTimeout(() => {
    console.log("Order delivered succesfully");
    orderDetail.delivery = true;
  }, 3000);
}


placedOrder(orderDetail, (orderDetail) => {
  preparingOrder(orderDetail, (orderDetail) => {
    pickupOrder(orderDetail, (orderDetail) => {
      deliverOrder(orderDetail);
    });
  });
});
