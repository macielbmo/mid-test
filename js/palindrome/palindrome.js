const btnCheck = document.getElementById('btn-check')

btnCheck.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const word = document.getElementById('word-input').value
    const arrayWord = word.split('')
    let theContrary = ''
    console.log(arrayWord)

    // For que transforma a palavra da forma como é lida de tras para frente
    for (let i = word.length - 1; i >= 0; i--) {
        theContrary += arrayWord[i]
        console.log(theContrary)
    }

    //If que copara se a palavra é igual lida de tras para frente
    if (theContrary === word) {
        // impressão do resultado POSITIVO na tela de forma dinamica
        const section = document.getElementById('result')
        const p = document.createElement('p')
        p.id = 'p-result'
        p.innerText = `A palavra ${word} é um Palindrome!`
        section.appendChild(p)
    } else {
        // impressão do resultado NEGATIVO na tela de forma dinamica
        const section = document.getElementById('result')
        const p = document.createElement('p')
        p.id = 'p-result'
        p.innerText = `A palavra ${word} não é um Palindrome!`
        section.appendChild(p)
    }
})

// Função para limpar o resultado do DOM
function removeResult() {
    const section = document.getElementById('result')
    const p = document.getElementById('p-result')

    if (p) {
        section.removeChild(p)
    }
}