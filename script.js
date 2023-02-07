// let person = {
//     firstName: "Jim",
//     lastName: "Peterson",
//     job: "Taxi-driver",
//     favoriteFood: "Pizza",
//     transport: "Bike",
// }

// console.log("opgave 1");
// console.log(person.transport);
// console.log(person["favoriteFood"]);


let person = {
    firstName: "Jim",
    lastName: "Peterson",
    job: "Taxi-driver",
    favoriteFood: "Pizza",
    transport: "Bike",
    driversLicence: false,
    pets: ["Cat", "Bird", "Fish", "Hamster"],
    family: {
        type: "Sibling",
        firstName: "Alice",
        lastName: "Peterson"
    }

}

console.log("opgave 2");
console.log(person.driversLicence);
person.pets.forEach(function (pets){console.log(pets)
});
console.log(person.family.firstName);
