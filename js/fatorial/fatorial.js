const btnCheck = document.getElementById('btn-check')

btnCheck.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const number = document.getElementById('number').value

    let fullFactorial = []
    let result = number
    let calc = `${number}!`

    //For realiza o calculo do fatorial e também grava cada algarimos da multiplica no array fullFactorial
    for (let i = 1; i < number; i++) {
        let factorial = parseFloat(number - i)
        fullFactorial.push(factorial)

        result *= factorial

        calc += `*${factorial}`
    }

    // impressão do resultado na tela de forma dinamica
    const section = document.getElementById('result')
    const options = { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 };

    const h2 = document.createElement('h2')
    h2.id = 'title-result'
    h2.innerText = `Cálculo do fatorial de ${number}:`

    const pCalc = document.createElement('p')
    pCalc.id = 'p-calc'
    pCalc.innerText = `${calc} = ${result.toLocaleString('pt-BR', options)}`

    const pResult = document.createElement('p')
    pResult.id = 'p-result'
    pResult.innerText = `O fatorial de ${number} é igual a ${result.toLocaleString('pt-BR', options)}`

    section.append(h2, pCalc, pResult)
})

// Função para limpar o resultado do DOM
function removeResult() {
    const section = document.getElementById('result')
    const h2 = document.getElementById('title-result')
    const pCalc = document.getElementById('p-calc')
    const pResult = document.getElementById('p-result')

    if (h2) {
        section.removeChild(h2)
    }

    if (h2) {
        section.removeChild(pCalc)
    }

    if (h2) {
        section.removeChild(pResult)
    }
}