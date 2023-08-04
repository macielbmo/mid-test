const btnCalc = document.getElementById('btn-calc')

btnCalc.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const portugues = parseFloat(document.getElementById('portugues').value)
    const matematica = parseFloat(document.getElementById('matematica').value)
    const ciencias = parseFloat(document.getElementById('ciencias').value)

    // calculo da média
    const media = ((portugues + matematica + ciencias) / 3).toFixed(2)

    // impressão do resultado na tela de forma dinamica
    const section = document.getElementById('result')
    const span = document.createElement('span')
    span.id = 'result-span'
    span.innerText = `A média entre as notas, é: ${media}`
    section.appendChild(span)
})

// Função para limpar o resultado do DOM
function removeResult() {
    const section = document.getElementById('result')
    const span = document.getElementById('result-span')

    if (span) {
        section.removeChild(span)
    }
}