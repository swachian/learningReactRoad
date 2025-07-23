// const prompt = require("prompt-sync")();
import createPrompt from 'prompt-sync';

// const prompt = createPrompt()
// let ageInput = prompt("Enter your age:")
// console.log(ageInput)

// const age = Number(ageInput)
// if (age >= 18) {
//     console.log("You are old enough to drive.")
// } else {
//     console.log(`You are left with ${18 - age} to drive`)
// }

const a = 3
const b =34
if (a > b) {
    console.log(`${a} is greater than ${b}`)
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)

let grade = ''
const score = 77
switch (true) {
    case score >= 80 :
        grade = 'A'
        break
    case score >= 70:
        grade = 'B'
        break
    case score >= 60:
        grade = 'C'
        break
    case score >= 50:
        grade = 'D'
        break
    case score >= 0:
        grade = 'E'
        break

}
console.log(`Grade is ${grade}`)

let season
const month = 'November'
switch (month) {
    case "September":
    case "October":
    case "November":
        season = 'Autumn'
        break
}

console.log(season)

let workingOnNot = ''
const day2 = 'FrIDAy'
switch (day2.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wendesday":
    case "friday":
        workingOnNot = 'a workding day'
        break
}

console.log(`${title(day2)} is ${workingOnNot}`)

function title(str) {
    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase()
    }
    return str
}

function daysOfMonth(month, year = 2000) {
    function countForFebruary(year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return 29
        }
        return 28
    }
    let daysInMonth = 0
    switch (title(month)) {
        case 'January':
        case 'March':
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            daysInMonth = 31
            break

        case "February":
            daysInMonth = countForFebruary(year)
            break
        
        default:
            daysInMonth = 30
    }
    return daysInMonth
    
}

console.log(daysOfMonth('January'))
console.log(daysOfMonth('February', 2000))
console.log(daysOfMonth('November'))
