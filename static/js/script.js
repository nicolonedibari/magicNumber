
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
        document.querySelector("#feedback").innerHTML = "Per favore, inserisci un numero valido tra 1 e 100."
        inputValido = false
    }

    if (inputValido === true) {
        if (numInserito > numVincente) {
            document.querySelector("#feedback").innerHTML = "Numero troppo alto!"
            tentativi = tentativi + 1
        } else if (numInserito < numVincente) {
            document.querySelector("#feedback").innerHTML = "Numero troppo basso!"
            tentativi = tentativi + 1
        } else {
            document.querySelector("#risultato").innerHTML = "Hai vinto! Il numero da indovinare era proprio " + numVincente
        }

        document.querySelector("#tentativi").innerHTML = `Tentativi effettuati: ${tentativi}`

    }
    
}

let numVincente = generateRandomInteger(1, 100)
let tentativi = 0

let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)





