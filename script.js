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
// 1. New {} is created 
// this = {}
// add parameters
// function automatically returns this