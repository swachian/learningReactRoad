/*
// console.log("aaaa")
const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},

]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 1

function addNewPizza(pizza) {
    menu.push(pizza)
}

// addNewPizza({name: "Popo", price: 15})
// console.log(menu)

function placeOrder(pizzaName) {
    const pizza = menu.find(p => p.name === pizzaName)
    if (!pizza) {
        console.error(`There is no such a pizza ${pizzaName}`)
        return
    }
    cashInRegister += pizza.price
    const order = {id: nextOrderId++, pizza: pizza, status: "ordered"}
    orderQueue.push(order)
    return order
}

placeOrder("Hawaiian")
console.log(orderQueue)
console.log(cashInRegister)
placeOrder("none")

function completeOrder(orderId) {
    const order = orderQueue.find(orderObj => orderObj.id === orderId)
    if (order) {
        order.status = 'completed'
    }
    return order
}

console.log(completeOrder(1))
*/