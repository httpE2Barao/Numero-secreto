const menorValor = 10
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elemMenorVal = document.querySelector("#menor-val")
elemMenorVal.innerHTML = menorValor

const elemMaiorVal = document.querySelector("#maior-val")
elemMaiorVal.innerHTML = maiorValor

compatibilidade.addEventListener('click', () => {
    document.body.innerHTML = `
        <h2>Compatibilidade de navegadores</h2>
        <img src='img/compatibilidade.png'></img>
    `
}) 