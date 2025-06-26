// console.log("aaaa")
type Pizza = {
    id: number,
    name: string,
    price: number,
    onSold?: boolean,
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister : number = 100
const orderQueue: Order[] = []
let nextPizzaId = 1
let nextOrderId = 1

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 10},
    {id: nextPizzaId++, name: "Hawaiian", price: 10},
    {id: nextPizzaId++, name: "Veggie", price: 9},

]

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Veggie2", price: 9})

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza | undefined{
    menu.push({
        id: nextPizzaId++,
        ...pizza
    })
    return menu[menu.length - 1]
}

addNewPizza({name: "Popo", price: 15})

function placeOrder(pizzaName: string): Order | undefined {
    const pizza = menu.find(p => p.name === pizzaName)
    if (!pizza) {
        console.error(`There is no such a pizza ${pizzaName}`)
        return
    }
    cashInRegister += pizza.price
    const order: Order = {id: nextOrderId++, pizza: pizza, status: "ordered"}
    orderQueue.push(order)
    return order
}

placeOrder("Hawaiian")
console.log(orderQueue)
console.log(cashInRegister)
placeOrder("none")

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(orderObj => orderObj.id === orderId)
    if (order) {
        order.status = 'completed'
    }
    return order
}

console.log(completeOrder(1))

function getPizzDetail(param: string | number) : Pizza | undefined {
    let result : Pizza | undefined
    if (typeof param === 'string') {
        result = menu.find(pizza => pizza.name === param)
    } else {
        result = menu.find(pizza => pizza.id === param)

    }
    return result
}

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens"]
const voters = [{ name: "Alice", age: 42}, { name: "Bob", age: 77}]

function getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1] 
}

let r1 = getLastItem(gameScores)
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))