const altura = parseFloat(prompt('Qual a sua altura?'))
const genero = prompt('Qual o seu gênero? Inserir H ou M')
let pesoIdeal = 0

if(genero == 'H'){
    pesoIdeal = (72.7 * altura) - 58
    alert(`Peso Ideal: ${pesoIdeal}`)
}else {
    pesoIdeal = (62.1 * altura) - 44.7
    alert(`Peso Ideal: ${pesoIdeal}`)
}