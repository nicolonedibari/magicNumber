function generateRandomInteger(min, max){
    // qui devo usare Math.random
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let numVincente = generateRandomInteger(1, 100)
let tentativi = 5
let numInserito
let indovinato = false

while (tentativi > 0 && !indovinato){

    numInserito = prompt("Indovina il numero vincente! Deve essere compreso tra 1 e 100.")
    numInserito = parseInt(numInserito)

    while(isNaN(numInserito) || numInserito < 1 || numInserito > 100){
        numInserito = prompt("Numero non inserito correttamente. Deve essere compreso tra 1 e 100.")
    }

    numInserito = parseInt(numInserito)

    if (numInserito > numVincente) {
        console.log("Troppo grande")
    } else if (numInserito < numVincente) {
        console.log("Troppo piccolo")
    } else {
        console.log("Bravo, hai vinto. Il numero da indovinare era " + numVincente)
        indovinato = true
    }

    tentativi = tentativi - 1

    if (tentativi === 0 && indovinato === false) {
        console.log("Mi dispiace, hai esaurito i tentativi. Il numero da indovinare era " + numVincente)
    }

}

