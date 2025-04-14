// 1 - names.js
//     1a. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
//     1b. Esporta la funzione dal file.

let names = (firstName, lastName) =>{
    const fullName = {
        firstName: firstName,
        lastName: lastName,
    }
    return  fullName;
}

// console.log(names("Carlo", "Madella"));