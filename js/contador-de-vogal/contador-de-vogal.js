const btnCheck = document.getElementById('btn-check')

btnCheck.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const word = document.getElementById('word-input').value
    const arrayWord = word.split('')
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let counter = 0

    // For verifica se na variavel Word tem algum termo preenchido na array vowel
    for (let i = 0; i < word.length; i++) {
        if (vowel.includes(arrayWord[i])) {
            counter++
        }
    }

    // impressão do resultado na tela de forma dinamica
    const section = document.getElementById('result')
    const p = document.createElement('p')
    p.id = 'p-result'
    p.innerText = `A palavra ${word} tem ${counter} vogais!`
    section.appendChild(p)
})

// Função para limpar o resultado do DOM
function removeResult() {
    const section = document.getElementById('result')
    const p = document.getElementById('p-result')

    if (p) {
        section.removeChild(p)
    }
}