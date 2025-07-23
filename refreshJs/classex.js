class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  // @ts-ignore
  // @ts-ignore
  set setScore(score) {
    this.score += score
  }
  // @ts-ignore
  // @ts-ignore
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      // @ts-ignore
      hours = '0' + hours
    }
    if (minutes < 10) {
      // @ts-ignore
      minutes = '0' + minutes
    }
    if (month < 10) {
        // @ts-ignore
        month = '0' + month
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())

class Student extends Person {
    constructor(firstName, lastName, age, country, city) {
        super(firstName, lastName, age, country, city)
        this.course = []
    }

    // @ts-ignore
    getPersonInfo() {
        return this.course
    }
}

let student = new Student()
console.log(student.getPersonInfo())

class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  getAge() {
    return this.age
  }

  walk() {
    console.log(`I am ${this.name} and I walk one step`)
  }

}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs)
    this.type = 'Dog'
  }

  walk() {
    console.log(`I'm a ${this.type} and I walk.`)
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs)
    this.type = 'Cat'
  }
}


const animal = new Animal('vivi', 28, 'red', 4)
animal.walk()

const dog = new Dog('Jack', 2, 'black', 4)
dog.walk()

class Statistics {
  constructor(data) {
    this.data = data
  }

  count() {
    return this.data.length
  }

  sum() {
    return this.data.reduce((sum, cur) => sum + cur)
  }

  min() {
    return Math.min(...this.data)
  }

  max() {
    return Math.max(...this.data)
  }

  range() {
    return this.max() - this.min()
  }

  mean() {
    return (this.sum() / this.count()).toFixed(0)
  }

  median() {
    const newData = this.data.slice(0)
    newData.sort((a, b) => a - b)
    let result 
    if (newData.length % 2 == 0) {
      const mid = newData.length / 2
      result = (newData[mid-1] + newData[mid+1]) / 2
    } else {
      result = newData[Math.floor(newData.length/2)]
    }
    return result.toFixed(0)
  }

  mode() {
    const modes = {}
    this.data.forEach(ele => {
      if (!modes[ele]) {
        modes[ele] = 1
      } else {
        modes[ele] += 1
      }
    })
    const result = Object.entries(modes).sort((entryA, entryB) => entryA[1] - entryB[1])
    return result.reverse().map(a => [parseInt(a[0]), a[1]])[0]
  }

  variance() {
    const average = this.sum() / this.count()
    // @ts-ignore
    const varianceSum = this.data.reduce((sum, cur) => sum + (cur-average)*(cur-average), 0)
    return (varianceSum / this.count()).toFixed(1)
  }

  std() {
    const result = Math.sqrt(this.variance())
    return result.toFixed(1)
  }

  freqDist() {
    const frequency = {};
    this.data.forEach(ele => {
      frequency[ele] = (frequency[ele] || 0) + 1
    })
    const count = this.count()
    return Object.entries(frequency).map(entry => [(entry[1]/count*100).toFixed(2), parseInt(entry[0])])
                                    .sort((a, b) => b[0] - a[0])
   
  }


}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)
console.log('Count: ', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ', statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ', statistics.variance())
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]



