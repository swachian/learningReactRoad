const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
const [fin, _ , ice, , den] = countries
console.log(fin, ice, den, _) // Finland, Iceland, Denmark

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}


countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase())
})

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => cur + acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

products.forEach(product => console.log(product.price))

products.forEach(product => {
    if (Number.isFinite(product.price)) {
        console.log(`The price of ${product.product} is ${product.price} euros.`)
    } else {
        console.log(`The price of ${product.product} is unknown.`)

    }
})

products.forEach(({product, price}) => {
    if (Number.isFinite(price)) {
        console.log(`The price of ${product} is ${price} euros.`)
    } else {
        console.log(`The price of ${product} is unknown.`)

    }
})

let sum = 0
products.forEach(({price}) => {
    if (Number.isFinite(price)) {
        sum += price
    }
})
console.log(sum)

const prices = products.map(product => product.price).filter(price => Number.isFinite(price))
console.log(prices)

let sumPriceByChain = products.map(product => product.price).filter(price => Number.isFinite(price))
                              .reduce((sum, price) => sum + price)
console.log(sumPriceByChain)

const sumByReduce = products.reduce((sum, product) => {
    if (Number.isFinite(product.price)) {
        return sum + product.price
    } else {
        return sum
    }
}, 0)

console.log(sumByReduce)

console.log(products.find(product => !Number.isFinite(product.price)))

console.log(products.findIndex(product => !Number.isFinite(product.price)))

console.log(products.some(product => !Number.isFinite(product.price)))

console.log(products.every(product => Number.isFinite(product.price)))
