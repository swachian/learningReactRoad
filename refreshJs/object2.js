const peranAccount = {
    firstName: 'Lili',
    lastName: 'Wendou',
    incomes: [],
    outcomes: [],

    totalIncome : function() {

    },

    totalExpense() {

    },

    accountInfo() {

    },

    addIncome() {

    },

    addExpense() {

    }
}

console.log(peranAccount)

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

function signUp(username) {
  if (users.map(user => user.username).includes(username)) {
    console.log("Your mail has been created.")
  } else {
    users.push({username: username, _id: 'bbbb'})
  }
}

signUp('zhang')
signUp('Asab')
console.log(users)

function signIn(username, password) {
  if (users.find(user => user.username === username && user.password === password)) {
    console.log(`${username} logged`)
  } else {
    console.log(`${username} is denied`)
  }
}

signIn('zhang', '111')
signIn('Thomas', '123333')

function rateProduct(product, rate) {
  product.ratings.push(rate)
}

function averageRating(product) {
  if (product && product.ratings.length > 0) {
    const sum = product.ratings.reduce((sum, rate) => sum += rate.rate, 0) 
    return sum / product.ratings.length
  } else {
    console.log('The product has not been rated')
    return -1
  }

}
rateProduct(products[1], {userId: 'aaaa', rate: 3})
products.forEach(product => console.log(averageRating(product)))

function likes(productId, username) {
  const product = products.find(product => product._id === productId)
  if (product) {
    const index = product.likes.indexOf(username)

    if (index > -1) {
      product.likes.splice(index, 1)
    } else {
      product.likes.push(username)
    }
  }
}

console.log(products)
likes('hedfcg', 'fg12cy')
console.log(products)
likes('hedfcg', 'fg12cy')
console.log(products)
