// We use object to model(describe) real-word or abstract features.

// Objects may contain data(properties) and code(methods)

// By using objects we pack the data and corresponding behaviour into one block.

// OOP goal: Better organization of code. To make it more flexible & easier to manage.

// Polymorphism: A child class can overwrite a method it inherited from a parent class.


// Classical OOP: Classes ==> Objects(Instances)
// Behaviour is copied for class to all instances.

// OOPs in JS: PROTOTYPES
// Object ---Inherits---> from a Prototype
// Objects are linked to a prototype object
// Prototypal Inheritance / Delegation: The prototype contains methods(behaviour)
//  that are accessible to all objects linked to that prototype. 
// Behaviour is delegated to the linked prototype object.




// 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

// 1. Constructor Functions
// Technique to create objects from a function.
// This is how built in objects like Arrays, Maps or Sets are actually created. 

// 2. ES6 Classes
// Modern alternative to constructor function syntax.
// "Syntactic Sugar"
// Behind the scenes ES6 classes work exactly like constructor functions.
// ES6 Classes do not behave like classes in classical OOP

// 3. Object.create()
// The easiest & most straightforward way of linking an object to a prototype object.

// With constructor functions, we can't use arrow functions because we won't 
// have access to the this object