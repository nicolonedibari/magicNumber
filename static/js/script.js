
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
            tentativi = tentativi - 1
        } else if (numInserito < numVincente) {
            document.querySelector("#feedback").innerHTML = "Numero troppo basso!"
            tentativi = tentativi - 1
        } else {
            document.querySelector("#risultato").innerHTML = "Hai vinto! Il numero da indovinare era proprio " + numVincente
        }

        document.querySelector("#tentativi").innerHTML = `Tentativi rimasti: ${tentativi}`

    }

    if (tentativi === 3){
        tr.classList.remove("greenBg")
        tr.classList.add("yellowBg")
        tr.classList.add("transition")
        btn.classList.remove("bgBottone")
        btn.classList.add("purpleBg")
        btn.classList.add("transition")
    }

    if(tentativi === 0){
        document.querySelector("#risultato").innerHTML = "Hai perso! Il numero da indovinare era proprio " + numVincente
        tr.classList.remove("yellowBg")
        tr.classList.add("redBg")
        tr.classList.add("transition")
        btn.classList.remove("purpleBg")
        btn.classList.add("grayBg")
        btn.classList.add("transition")
    }
    
}

let numVincente = generateRandomInteger(1, 100)
let tentativi = 5
let tr = document.querySelector("#bg")
let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)





