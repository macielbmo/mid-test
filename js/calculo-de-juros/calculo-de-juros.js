const btnCalcular = document.getElementById('btn-calc')

btnCalcular.addEventListener('click', function (e) {
    e.preventDefault()
    removeResult()

    const valorInicial = document.getElementById('capital-inicial').value
    const taxaDeJuros = document.getElementById('taxa-juros').value
    const tempoDeInvestimento = document.getElementById('tempo-investido').value

    // No input o usr deve inserir taxa de juros anual e aqui convertemos a taxa para mensal
    const jurosMensal = Math.pow(1 + (taxaDeJuros / 100), 1 / 12) - 1

    let valorAcumulado = 0
    let arrayAcumuladoMes = []

    //For que realiza o calculo do valor acumulado com juros mês a mês
    for (let i = 1; i <= tempoDeInvestimento; i++) {
        valorAcumulado = (valorInicial * (1 + jurosMensal) ** i);
        arrayAcumuladoMes.push([`mês ${i}`, `R$${valorAcumulado.toFixed(2)}`])
    }


    // impressão do resultado na tela de forma dinamica
    const section = document.getElementById('result')
    const options = { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 };

    const divValorTotal = document.createElement('div')
    divValorTotal.id = 'div-valor-total'
    divValorTotal.className = 'div-result'
    const spanTitle = document.createElement('span')
    spanTitle.className = 'titulo-resultado'
    spanTitle.innerText = 'Valor total: '

    const spanResultado = document.createElement('span')
    spanResultado.className = 'span-resultado: '
    spanResultado.innerText = ` R$${valorAcumulado.toLocaleString('pt-BR', options)}`


    const divValorInvestido = document.createElement('div')
    divValorInvestido.id = 'div-valor-investido'
    divValorInvestido.className = 'div-result'
    const spanTitle2 = document.createElement('span')
    spanTitle2.className = 'titulo-resultado'
    spanTitle2.innerText = 'Valor investido: '

    const spanInvestimento = document.createElement('span')
    spanInvestimento.className = 'span-resultado: '
    spanInvestimento.innerText = ` R$${valorInicial.toLocaleString('pt-BR', options)}`


    const divValorJuros = document.createElement('div')
    divValorJuros.id = 'div-valor-juros'
    divValorJuros.className = 'div-result'
    const spanTitle3 = document.createElement('span')
    spanTitle3.className = 'titulo-resultado'
    spanTitle3.innerText = 'Ganho em juros: '

    const spanGanhoEmJuros = document.createElement('span')
    spanGanhoEmJuros.className = 'span-resultado: '
    spanGanhoEmJuros.innerText = ` R$${(valorAcumulado - valorInicial).toLocaleString('pt-BR', options)}`

    divValorTotal.append(spanTitle, spanResultado)
    divValorInvestido.append(spanTitle2, spanInvestimento)
    divValorJuros.append(spanTitle3, spanGanhoEmJuros)
    section.append(divValorTotal, divValorInvestido, divValorJuros)
})

// Função para limpar o resultado do DOM
function removeResult() {
    const section = document.getElementById('result')
    const valorTotal = document.getElementById('div-valor-total')
    const valorInvestido = document.getElementById('div-valor-investido')
    const valorJuros = document.getElementById('div-valor-juros')

    if (valorTotal) {
        section.removeChild(valorTotal)
    }

    if (valorInvestido) {
        section.removeChild(valorInvestido)
    }

    if (valorJuros) {
        section.removeChild(valorJuros)
    }
}