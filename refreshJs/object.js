import {countriesInfo as countries} from './contries.js'
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.slice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())










let dog = {
    name: 'pianpian',
    legs: 4,
    color: 'White and Black',
    age: 5,
    bark: function() {
        return "woof woof"
    }
}
console.log(dog)
console.log(dog.name)
console.log(dog['age'])
console.log(dog.bark())
dog.breed = 'Border Collie'
dog.getDogInfo = function() {
    return `The dog is ${this.name} at ${this.age} and it is a ${this.breed}`
}
console.log(dog)
console.log(dog.getDogInfo())



const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const new_users = Object.entries(users).sort((entryA, entryB) => {
    return entryA[1].skills.length - entryB[1].skills.length
})

console.log(new_users.reverse()[0])

const loggedUserCount = Object.entries(users).filter(entry => entry[1].isLoggedIn).length
const pointsUserCount = Object.entries(users).filter(entry => entry[1].points >= 50).length

console.log(loggedUserCount)
console.log(pointsUserCount)

const users1 = Object.entries(users)
                      .filter(entry => entry[1].skills.includes('MongoDB', 'Express', 'React', 'Node'))
                      .map(entry => entry[0]).join(", ")
console.log(users1)

const newUsers2 = Object.assign({}, users)
newUsers2['zhang'] = {skills: ['Ruby', 'Python', 'Java', 'Javascript']}
console.log(newUsers2)

console.log(Object.keys(newUsers2))
console.log(Object.values(newUsers2))

function printCountry(country) {
    return `${country.name} ${country.capital} ${country.population} ${country.languages}`
}
countries.forEach(country => console.log(printCountry(country)))

const peranAccount = {
    firstName: 'Lili',
    lastName: 'Wendou',
    incomes: [],
    outcomes: [],

    totalIncome : function() {

    },

    totalExpens() {

    },

    accountInfo() {

    },

    addIncome() {

    },

    addExpense() {

    }
}

console.log(peranAccount)