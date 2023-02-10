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
          title: "Hades",
          dato: "september, 2020",
          score: "10/10",
          pris: "24.50€",
          publisher: "Supergiant games",
          store:["Steam", " Epic game store"]
      },
      rogueLegacy:
          {
          title: "Rogue legacy",
          dato: "Juni 27, 2013",
          score: "9/10",
          pris: "14,99€",
          publisher: "Cellar door games",
          store:["Steam", " GOG"]
      }
},
  sandbox: 
  {minecraft:
      {
      title: "Minecraft",
      dato: "november 18, 2011",
      score: "9/10",
      pris: "22.47€",
      publisher: "Mojang",
      store:["minecraft.net", " playstation store"]
      
},
  terraria:
      {
      title: "Terraria",
      dato: "16 maj, 2011",
      score: "10/10",
      pris: "9.99€",
      publisher: "re-logic",
      store:["Steam", " GOG"]
}

},
fps:{doom:
  {
      title: "Doom",
      dato: "12 maj, 2016",
      score: "10/10",
      pris: "19.99€",
      publisher: "Bethesda Softworks",
      store:["Steam", " Playstation store"]

  },
  superhot:{
      title: "Superhot",
      dato: "25 februar, 2016",
      score: "9/10",
      pris: "24,99€",
      publisher: "SUPERHOT team",
      store:["Steam", " Epic Game Store"]
  }
  ,
  counter_strike:{
      title: "Counter_strike Global offensive",
      dato: "21 august, 2012",
      score: "9/10",
      pris: "free",
      publisher: "Valve corporation",
      store:["Steam"]
  }

}
,
deckBuilder:{Slay_the_sprire:
  {
      title: "Slay the spire",
      dato: "14 november, 2017",
      score: "10/10",
      pris: "24,99€",
      publisher: "Mega Crit Games",
      store:["Steam", " GOG"]

  }
}
,
Survivor:{vampire_survivor:
  {
      title: "Vampire survivors",
      dato: "31 marts 2021",
      score: "10/10",
      pris: "3.99€",
      publisher: "Poncle",
      store:["Steam", " itch.io"]

  },
  holocure: {
      title: "Holocure",
      dato: "22 Juni, 2022",
      score: "10/10",
      pris: "free",
      publisher: "Kay Yu",
      store:["itch.io"]
  }
}
}



console.log(minListe.spil);
console.log(minListe.sandbox.minecraft.title);
console.log("opgave 3");