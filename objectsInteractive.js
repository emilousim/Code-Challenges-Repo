// INTERACTIVE LECTURE/TREW/10/19/21

let person = {
    firstName: "Chandler",
    lastName: "Bong",
    age: 34
}

// console.log(person.firstName)

let meal = {
    appetizer: "chips & salsa",
    entree: "al pastor burrito",
    dessert: "churros",
    drink: "dr pep"
}

const{dessert} = meal // DESRTRUCTURING DESSERT

// console.log(dessert)

const{appetizer, entree} = meal // DESTRUCTURING APP AND ENTREE

// console.log(appetizer)
// console.log(entree)

const{drink: bestSodaEver} = meal //RENAMING THE KEY
// const bestSodaEver = meal.drink //DIFF WAYS TO DO SAME THING

// console.log(bestSodaEver)

// const myAppetizer = meal.appetizer  /// DOES THE SAME THING AS LINE 37.
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(bestSodaEver) /// 39 & 40 return the same output
// console.log(myDrink)

// for (key in person){ // prints out all the var/keys in person
//     console.log(key)
// }

// for (key in person){
//     console.log(person[key]) // prints out all the VALUES of the keys
// }

person.job = "Statistical Analysis and Data Reconfiguration"

person['pets'] = ['chicken', 'duck']

// for (key in person){ // SHOWS THE NEW KEYS ADDED
//     console.log(key)
//      }

let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta']
}

delete teams.teamTwo

// for (let team in teams){
//     console.log(teams)
// }

class Dog{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting(){
        console.log(`hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
} 

let lassie = new Dog('Lassie', 'Collie', 18)

// console.log(lassie.name)

let beethoven = new Dog('beethoven', 'St. Bernard', 12)

// console.log(beethoven.breed)

lassie.greeting()

beethoven.greeting()


for (key in lassie){
    console.log(lassie[key])
}