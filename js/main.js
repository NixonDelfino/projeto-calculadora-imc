import {modal} from './modal.js'
import {AlertError} from "./alert-error.js";
import {notNumber, calculateIMC} from "./utils.js";

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    
    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}
form.oninput = function (event) {
    AlertError.close()
}
function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}