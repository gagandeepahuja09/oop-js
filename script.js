const Person = function(firstName, birthYear) {
  console.log(this)
  this.firstName = firstName
  this.birthYear = birthYear
  // bad practice
  // if we have 10k instances of Person, then all of them will create a copy 
  // of this function. This is not ideal
  // this.calcAge = function() {
  //   return 2037 - this.birthYear
  // }
}

console.log(Person.prototype)


const gagan = new Person('Gagan', 1998)
console.log(gagan)
const str = 'HERE1234'

console.log(
  gagan instanceof Person, 
  str instanceof Person,
  str instanceof Array,
  str instanceof Object,
  str instanceof String,
  typeof(str) === 'string'
)

// new Person STEPS
// 1. New {} is created 
// 2. this = {}, function is called
// 3. this is linked to the Prototype by setting __proto__ property obj.__proto__ = Person.prototype
// linking rather than copying
// (it doesn't create a copy as object is reference type)
// 4. function automatically returns this

// Prototypes
// Each a every function in JS has access to a property call prototype
// This also includes constructor functions

// Every object created by constructor function will get access to all 
// methods and properties defined on constructor's prototype property.

// Provides reusability, we don't have to create this for each object.
Person.prototype.calcAge = function() {
  return 2037 - this.birthYear
}

// so, we can access the calcAge function for gagan object
// even if it's not a part of the gagan object
// this keyword is set to the object all the method
gagan.calcAge()

// why can we do this? 
// because every object has access to it's constructor function's prototype
console.log('G1', gagan.__proto__ === Person.prototype)

// Person.prototype is the prototype of all objects that will be created 
// with that constructor
// It's not the prototype of Person as name might suggest
// the constructor function.

console.log('G2', Person.prototype.isPrototypeOf(gagan))
console.log('G3', Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(gagan.species)



// hasOwnProperty checks whether that's it's own property or it's prototype's property
console.log(gagan.hasOwnProperty('birthYear'), gagan.hasOwnProperty('firstName'), gagan.hasOwnProperty('species'))

// Person.__proto__ ===> Object.prototype

// Object literal is same as {} === new Object(...)
// [] === new Array(...)

// gagan.hasOwnProperty gagan object does not have it's own hasOwnProperty function
// Object.prototype has it and it is inherited through prototype chain.

console.log(Person.prototype.__proto__ === Object.prototype)
console.log(gagan.__proto__.__proto__ === Object.prototype)

console.log(Person.prototype.constructor === Person)
console.dir(Person)

const arr = [ -1, 2, 4, 1 ]

console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype)
console.log(arr.__proto__.__proto__.__proto__ === null)


// Prototype inheritance on built-in objects
// We can add new functions to array prototype which will be accessible to all 
// arrays created
// Don't do this on production(team of developers)
Array.prototype.unique = function() {
  return [...new Set(this)]
}

arr1 = [ 1, 1, 1, 2, 3, 5, 4, 5, 2, 98, 7]
console.log(arr1.unique())

const h1 = document.querySelector('h1')
console.dir(h1)
// Prototype chain
// h1 --> HTMLHeadingElement --> HTMLElement --> Element --> Node
// --> EventTaget --> Object --> null

console.dir(x => x + 1)
// How does a function have access to call a function, like call, apply 
// and bind?
// Because  Function.prototype.__proto__ === Object.prototype.__proto__ === Object.prototype
// And Function.prototype has these methods, hence all functions can use them

// CODING CHALLENGE #1

// Car constructor function
// const Car = function(make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function() {
//   this.speed += 10
// }

// Car.prototype.brake = function() {
//   this.speed -= 5
// }

// ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  get age() {
    return 2021 - this.birthYear
  }

  // Setters can also be used for validation.
  set fullName(name) {
    // this would result in infinite loop(call stack limit exceeded) because whenever we try to 
    // set the fullName, the setter would be called.
    // this.fullName = name
    // so we set a different property name, by convention with _ and then create a getter for fullName
    // and use that _ property
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
  }

  get fullName() {
    return this._fullName
  }

  get fullName() {
    return this._fullName
  }

  static hey() {
    console.log(`Hey there 👋🏻`)
  }
}


// const gagan1 = new PersonCl('Gagan', 1998)
// console.log(gagan1.age, gagan1.name = 'Gagandeep', gagan1)

// Interesting class properties
// 1. Classes are not hoisted.
// 2. Classes are first-class citizens.
// 3. Classes are executed in strict mode.

// Getters & Setters
// const account = {
//   owner: 'Gagandeep',
//   movements: [200, 30, 40, 120],
//   get latest() {
//     return this.movements.slice(-1).pop()
//   },
//   // any setter should always have only 1 parameter 
//   set latest(mov) {
//     this.movements.push(mov)
//   }
// }

// console.log(account.latest)
// account.latest = 20
// console.log(account.movements, account.latest)

// Static Methods
// They are not directly tied to an object / instance
// Not a part of the prototype
// Rather a property / method of the class itself
// Eg. Array.from() ==> converts an array like object(eg. NodeList) to array
// Array.from(document.querySelectorAll('h1'))
// Eg. Number.parseFloat()

// This is Method 2. Method 1 is using static keyword
// PersonCl.hey = function() {
//   console.log(`Hey there 👋🏻`)
// }