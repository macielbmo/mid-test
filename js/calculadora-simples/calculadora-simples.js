const btnCalculate = document.getElementById('btn-calculate')

btnCalculate.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const radio = document.getElementsByName('type-operation')
    let selectRadio = ''

    // For que identifica o radio selecionado e atribui o value na variavel selectRadio
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            selectRadio = radio[i].value
            break;
        }
    }

    const firstNumber = parseFloat(document.getElementById('first-number').value)
    const secondNumber = parseFloat(document.getElementById('second-number').value)

    let result = 0
    let inputValue = ''

    // switch case que executa o calculo de acordo com o resultado do selectRadio
    switch (selectRadio) {
        case 'sum':
            result = firstNumber + secondNumber
            inputValue = `${firstNumber} + ${secondNumber}  =  ${result}`
            break
        case 'subtraction':
            result = firstNumber - secondNumber
            inputValue = `${firstNumber} - ${secondNumber}  =  ${result}`
            break
        case 'multiplication':
            result = firstNumber * secondNumber
            inputValue = `${firstNumber} * ${secondNumber}  =  ${result}`
            break
        case 'division':
            result = firstNumber / secondNumber
            inputValue = `${firstNumber} / ${secondNumber}  =  ${result}`
            break
        default:
            alert("Erro, tente novamente!")
    }

    // impressão do resultado na tela de forma dinamica
    const containerResult = document.getElementById('container-result')
    const inputResult = document.createElement('input')
    inputResult.id = 'result-input'
    inputResult.value = inputValue
    inputResult.disabled = true

    containerResult.appendChild(inputResult)
}
)


// Função para limpar o resultado do DOM
function removeResult() {
    const containerResult = document.getElementById('container-result')
    const inputResult = document.getElementById('result-input')

    if (inputResult) {
        containerResult.removeChild(inputResult)
    }

    result = 0
}