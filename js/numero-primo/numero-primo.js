const btnCheck = document.getElementById('btn-check')

btnCheck.addEventListener('click', function (e) {
    e.preventDefault()
    removerResultado()

    const number = document.getElementById('number-input').value
    const section = document.getElementById('result')

    //For verifica se um número é ou não primo, realizando um calc que compara se o resto da disião é zero, se for zero o número não é primo
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {

            // impressão do resultado NEGATIVO na tela de forma dinamica
            const img = document.createElement('img')
            img.id = 'img-result'
            img.src = '../img/false.png'

            const spanResult = document.createElement('span')
            spanResult.innerText = `O número ${number} NÃO é um número Primo`
            spanResult.id = 'result-span'
            spanResult.className = 'result-span'
            section.append(img, spanResult)
            tenNumberPrime()

            return false
        }
    }

    // impressão do resultado POSITIVO, na tela de forma dinamica
    const img = document.createElement('img')
    img.id = 'img-result'
    img.src = '../img/true.png'
    const spanResult = document.createElement('span')
    spanResult.innerText = `O número ${number} é um número Primo`
    spanResult.id = 'result-span'
    spanResult.className = 'result-span'
    section.append(img, spanResult)
    tenNumberPrime()
})

// Função que gera os 10 primeiros números primos
function tenNumberPrime() {
    let listNumbers = []
    let excluir = 0

    for (let n = 2; listNumbers.length < 10; n++) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                excluir = n
            }
        }

        if (n !== excluir) {
            listNumbers.push(n)
            if (listNumbers.length === 10) {
                break
            }
        }
    }

    // impressão dos 10 primeiro números primos de forma dinamica
    const section = document.getElementById('result')
    const span = document.createElement('span')
    span.innerText = `10 Primeiros números primos: ${listNumbers}`
    span.id = 'result-span2'
    span.className = 'result-span'
    section.appendChild(span)
}

// Função para limpar o resultado do DOM
function removerResultado() {
    const section = document.getElementById('result')
    const imgResult = document.getElementById('img-result')
    const span1 = document.getElementById('result-span')
    const span2 = document.getElementById('result-span2')


    if (imgResult) {
        section.removeChild(imgResult)
    } else { }

    if (span1) {
        section.removeChild(span1)
    } else { }

    if (span2) {
        section.removeChild(span2)
    } else { }
}