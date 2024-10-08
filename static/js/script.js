
function generateRandomInteger(min = 1, max = 100) {
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
    }

function sanitizeInput(input) {
    input = input.trim
    input = parseInt(input)
    return input
}

function handleClick(event) {

    guess = sanitizeInput(document.querySelector("#guess").value);
    console.log(guess)
    let tentativi = 5
    let indovinato = false

    if (guess > numVincente) {
        console.log("Troppo grande")
    } else if (guess < numVincente) {
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

let numVincente = generateRandomInteger(1, 100)
console.log (numVincente)

let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)





