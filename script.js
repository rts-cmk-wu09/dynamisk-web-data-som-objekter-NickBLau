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


// let person = {
//     firstName: "Jim",
//     lastName: "Peterson",
//     job: "Taxi-driver",
//     favoriteFood: "Pizza",
//     transport: "Bike",
//     driversLicence: false,
//     pets: ["Cat", "Bird", "Fish", "Hamster"],
//     family: {
//         type: "Sibling",
//         firstName: "Alice",
//         lastName: "Peterson"
//     }

// }

// console.log("opgave 2");

// console.log(" ")

// console.log(person.driversLicence);

// console.log(" ")

// person.pets.forEach(function (pets){console.log(pets)
// });

// console.log(" ")

// console.log(person.family.type);
// console.log(person.family.firstName);
// console.log(person.family.lastName);

// console.log(" ")


// for (let i=0; i<[person.family].length; i++){
//     console.log(person.family);
// }

// console.log(" ")

// for (let i=0; i<[person.pets].length; i++){
//     console.log(person.pets);
// }


let minListe = { 
film:{},
tv:{},
spil:{
    rogueLite: [
        "Hades " ,
        {
        dato: "september, 2020",
        score: "10/10",
        pris: "24.50€",
        publisher: "Supergiant games"
    }], 
    sandBox:[
        "Minecraft" ,
    {
        dato: "november 18, 2011",
        score: "9/10",
        pris: "22.47€",
        publisher: "Mojang",
    },

    "Terraria", 
    {
        dato: "16 maj, 2011",
        score: "10/10",
        pris: "9.99€",
        publisher: "re-logic",
    } 
],
 fps: {
    Doom:
{
  title: "Doom",
   dato: "lorem",
   score: "lorem",
   pris: "lorem",
   publisher: "lorem" 
 }, 
 superhot:
 {
    dato: "lorem",
    score: "lorem",
    pris: "lorem",
    publisher: "lorem" 
  }, 
  Counter_strike:{ 
    dato: "lorem",
    score: "lorem",
    pris: "lorem",
    publisher: "lorem" 
  },
 },
 deckBuilder: [
    "Slay the spire" ,
    {
    dato: "lorem",
    score: "lorem",
    pris: "lorem",
    publisher: "lorem"
}], 
 Survivor: 
 [
    "Vampire survivor ",
 {
    dato: "lorem",
    score: "lorem",
    pris: "lorem",
    publisher: "lorem" 
}, 
  "holocure",
  {
    dato: "lorem",
    score: "lorem",
    pris: "lorem",
    publisher: "lorem" 
  }],
}
}
console.log("opgave 3");
console.log(minListe.spil.fps);