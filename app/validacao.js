function verificaChute(chute) {
    // somando já transforma 'string' em Número inteiro
    const numero = parseInt(chute)

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            gameOver()
        } else {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'}
        return
    } else if (verificaSeDentroDoLimite(numero)){
        elementoChute.innerHTML += `<div>Diga um número entre ${menorValor} e ${maiorValor}</div>`
        return
        
    } else if (numero === numeroSecreto){ acertou() }
    
    else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor</div> <i class="fa-solid fa-angle-down"></i>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior</div> <i class="fa-solid fa-angle-up"></i>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificaSeDentroDoLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})

function acertou() {
    document.body.innerHTML = 
        `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogarNovamente' class='btn-jogar'>Jogar Novamente</button>
        `
}

function gameOver() {
    document.body.innerHTML = 
        `
        <h2>Game Over!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogarNovamente' class='btn-jogar'>Jogar Novamente</button>
        `   
}