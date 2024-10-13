
function generateRandomInteger(min = 1, max = 100) {
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
    }

function sanitizeInput(input) {
    input = input.trim()
    input = parseInt(input)
    return input
}

function handleClick(event) {

    let numInserito = sanitizeInput(document.querySelector("#guess").value)

    let inputValido = true

    if (isNaN(numInserito) || numInserito < 1 || numInserito > 100) {
        console.log("Errore: Il numero deve essere compreso tra 1 e 100.")
        inputValido = false
    }

    if (inputValido === true) {
        if (numInserito > numVincente) {
            console.log("Troppo grande")
            tentativi = tentativi - 1
        } else if (numInserito < numVincente) {
            console.log("Troppo piccolo")
            tentativi = tentativi - 1
        } else {
            console.log("Bravo, hai vinto. Il numero da indovinare era " + numVincente)
        }

        if (tentativi === 0) {
            console.log("Mi dispiace, hai esaurito i tentativi. Il numero da indovinare era " + numVincente)
        }
    }
    
}

let numVincente = generateRandomInteger(1, 100)
let tentativi = 5

let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)





