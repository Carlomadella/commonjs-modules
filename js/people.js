// 3 - people.js
//     3a. Importa la tua funzione da names.js
//     3b. Importa la tua funzione da hobbies.js
//     3c. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const names = require("./names.js");

const hobbies = require("./hobbies.js");

let total = () => {
    const totalObj = {
        fullname : names(),
        hobbies : hobbies(),
    };
    return totalObj;
}

console.log(total());