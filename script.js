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

console.log(" ")

console.log(person.driversLicence);

console.log(" ")

person.pets.forEach(function (pets){console.log(pets)
});

console.log(" ")

console.log(person.family.type);
console.log(person.family.firstName);
console.log(person.family.lastName);

console.log(" ")


for (let i=0; i<[person.family].length; i++){
    console.log(person.family);
}

console.log(" ")

for (let i=0; i<[person.pets].length; i++){
    console.log(person.pets);
}