function convertCelciusToFahrenheit(oC) {
    return oC*9/5+32
}
console.log(convertCelciusToFahrenheit(35))

const cF = (oC) => oC*9/5+32
console.log(cF(35))

function bmi(height, weight) {
    const bmi = weight/(height*height)
    let result 
    switch (true) {
        case bmi > 30:
            result = 'Obese'
            break
        case bmi > 25:
            result = 'Overweight'
            break
        case bmi > 18.5:
            result = 'Normal weight'
            break
        default:
            result = 'Underweight'
            break
    }
    return {bmi: bmi.toFixed(2), group: result}
}

console.log(bmi(1.75, 70))

const solveQuadratic = (a, b, c) => new Set([(-1*b - Math.sqrt(b*b-4*a*c))/(2*a), (-1*b + Math.sqrt(b*b-4*a*c))/(2*a)])


console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function printArray(array) {
    for (const ele of array) {
        console.log(ele)
    }
}
printArray([1, 2, 3])

import {format} from 'date-fns'

function showDateTime(date) {
    return format(date, "dd/MM/yyyy hh:MM")
}
console.log(showDateTime(new Date()))

function swapValues(x, y) {
    return [y, x]
}

console.log(swapValues(3, 4))

function reverseArray(array) {
    const result = []
    for (let j = array.length - 1; j >= 0; j--) {
        result.push(array[j])
    }
    return result
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function titleArray(array) {
    return array.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
}
console.log(titleArray(['abc', 'danny', 'chales']))

function evensAndOdds(number) {
    if (number < 1) {
        throw new Error("The number is less than 1")
    }
    const result = {odd: 0, even: 0}
    if (number % 2 == 0) {
        result.odd = Math.ceil(number / 2) 
        result.even = Math.ceil(number /2) + 1
    } else {
        result.odd = Math.ceil(number / 2)
        result.even = Math.ceil(number / 2)
    }
    console.log(`The number of odds are ${result.odd}`)
    console.log(`The number of evens are ${result.even}`)

}
evensAndOdds(100)
evensAndOdds(99)

function sum(...args) {
    return args.reduce((sum, ele) => sum + ele, 0)
}

console.log(sum(1, 2, 3))

function userIdGenerator() {
    const strs = "0123456789ABCDEFGabcdeft"
    const result = []
    for (let i = 0; i < 7; i++) {
        let r = Math.floor(Math.random()*strs.length)
        result.push(strs.charAt(r))
    }
    return result.join("")
}

console.log(userIdGenerator());

function generateColors(format, number) {
    function randomColor() {
        return Math.floor(Math.random()*255)
    }
    const result = []
    for (let i = 0; i < number; i++) {
        const [x, y, z] = [randomColor(), randomColor(), randomColor()]
        if (format === 'hexa') {
            result.push(`#${x.toString(16)}${y.toString(16)}${z.toString(16)}`)
        } else {
            result.push(`rgb(${x}, ${y}, ${z})`)
        }
    }
    return result
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function shuffleArray(arr) {
    const result = []
    const arrCopy = arr.slice()
    while (arrCopy.length > 0) {
        const index = Math.ceil(Math.random() * arrCopy.length) - 1
        console.log(index)
        result.push(arrCopy[index])
        arrCopy.splice(index, 1)
    }
    return result
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

function factorial(number) {
    const result = []
    for (let i = 1; i < Math.ceil(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            result.push(i)
            if (number/i !== i) {
                result.push(number / i)
            }
        }
    }
    return result.sort((a, b) => a -b)
}

console.log(factorial(21))

function isEmpty(obj) {
    if (obj === null || obj === undefined) {
        return true
    }
    return false
}

function average(array) {
    if (!Array.isArray(array)) {
        throw new Error(`'${array}' is not an array`)

    }
    if (array.find(ele => !Number.isFinite(ele))) {
        throw new Error(`'${array.find(ele => !Number.isFinite(ele))}' is not a number`)
    } 
    const sum = array.reduce((sum, ele) => sum + ele)
    return sum/array.length
}

console.log(average([1, 2, 3, 5, 6]))
// console.log(average("aa"))
// console.log(average([1, "bb", 3, 5, 6]))

const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

