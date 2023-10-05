//   ARRAY OPERATIONS- ASSIGNMENT 1
let fruits = ["apple", "banana", "orange"]
fruits.shift()
fruits.push("grape")
fruits[1] = "pear"
console.log(fruits)


//  **********************************************************************************************************************




// OBJECT OPERATIONS- ASSIGNMENT 2
let person = {
    name: "John",
    age: 30,
    city: "New York"

}

delete person.age
person.job = "Engineer"
person.city = "San Francisco"
console.log(person)

// *****************************************************************************************************************************



// ARRAY OF OBJECTS OPERATIONS- ASSIGNMENT 3
let cars = [{
    make: "Toyota",
    model: "Camry",
    year: 2018
}, {
    make: "Toyota",
    model: "Camry",
    year: 2018
}, {
    make: "Toyota",
    model: "Camry",
    year: 2018
},]

cars.shift()
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
})

cars[1].model = "Accord"
console.log(cars)
