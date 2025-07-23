import { countries } from "./contries.js";
import { webTechs } from "./webTechs.js";

console.log(countries)
console.log(webTechs)

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const cleanedText = text.replace(/[^\w\s]/g, "")
console.log(cleanedText)

const words = cleanedText.split(/\s/)
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

const index = shoppingCart.indexOf('Honey')
if (index != -1) {
    shoppingCart.splice(index, 1)
}


shoppingCart[3] = 'Grean Tea'
console.log(shoppingCart)

const Ethiopia = 'Ethiopia'
if (countries.includes(Ethiopia)) {
    console.log(Ethiopia.toUpperCase())
} else {
    countries.push(Ethiopia)
}

const Sass = 'Sass'
if (webTechs.includes(Sass)) {
    console.log('Sass is a CSS preprocess')
} else {
    countries.push(Sass)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sorted_ages = ages.sort()
console.log(sorted_ages)
const min = sorted_ages[0]
const max = sorted_ages[sorted_ages.length - 1]
const medianAge = medianAgeFun(sorted_ages) 
const sum = sorted_ages.reduce((acc, num) => acc + num, 0)
const average = sum / sorted_ages.length
const range = max - min
console.log(`min: ${min}, max: ${max}, medianAge: ${medianAge}, 
    average: ${average}, range: ${range}`)
    
function medianAgeFun(arr) {
    let result = 0
    if (arr.length % 2 == 0) {
        const mid = arr.length/2
        result = (arr[mid-1] + arr[mid])/2
    } else {
        result = arr[arr.length/2]
    }
    return result
}

const sliced_countries = countries.slice(0, 10)
console.log(sliced_countries)

function middleFind(arr) {
    let result = []
    if (arr.length % 2 == 0) {
        const mid = arr.length/2
        result.push(arr[mid-1])
        result.push(arr[mid])
    } else {
        result.push(arr[arr.length/2])
    }
    return result
}

console.log(middleFind(countries))