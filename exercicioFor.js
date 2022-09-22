/**
 * Crie um algoritmo para ler N números, some-os e faça a média entre os números
 */

let numeros = parseInt(prompt('Quantidade de numeros desejada?'))
let soma = 0
let media = 0
for(let i = 1; i <= numeros; i++){
    let valor = parseFloat(prompt('Digite o valor para somar numero'))
    soma = soma + valor
}

media = soma / numeros

alert(`A media dos valores digitados é: ${media}`)