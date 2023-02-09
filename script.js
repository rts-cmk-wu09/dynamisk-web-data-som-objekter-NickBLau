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
  tv: ["lorem", "lorem"],
  spil: ["rogueLite", " sandBox", " FPS", " deckBuilder", " survivor"],
  rogueLites: 
      {hades:
          {
          title: "hades",
          dato: "september, 2020",
          score: "10/10",
          pris: "24.50€",
          publisher: "Supergiant games",
          platform:["steam", " epic"]
      },
      rogueLegacy:
          {
          title: "rogue legacy",
          dato: "dato.lorem",
          score: "score.lorem",
          pris: "pris.lorem",
          publisher: "publisher.lorem",
          platform:["lorem", "lorem"]
      }
},
  sandbox: 
  {minecraft:
      {
      title: "minecraft",
      dato: "november 18, 2011",
      score: "9/10",
      pris: "22.47€",
      publisher: "Mojang",
      platform:["minecraft.net", " playstation store"]
      
},
  terraria:
      {
      title: "terraria",
      dato: "16 maj, 2011",
      score: "10/10",
      pris: "9.99€",
      publisher: "re-logic",
      platform:["lorem", "lorem"]
}

},
fps:{doom:
  {
      title: "doom",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]

  },
  superhot:{
      title: "superhot",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]
  }
  ,
  counter_strike:{
      title: "counter_strike",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]
  }

}
,
deckBuilder:{Slay_the_sprire:
  {
      title: "Slay the spire",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]

  }
}
,
Survivor:{vampire_survivor:
  {
      title: "Vampire survivor",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]

  },
  holocure: {
      title: "holocure",
      dato: "dato.lorem",
      score: "score.lorem",
      pris: "pris.lorem",
      publisher: "publisher.lorem",
      platform:["lorem", "lorem"]
  }
}
}
    
console.log(minListe.spil);
console.log(minListe.sandbox.minecraft.title);
console.log("opgave 3");