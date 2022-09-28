/**
 * Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
 * Existem varias formas de declarar função no JS
 */

function cumprimentar(mensagem, repetir = 1) { //não é necessario declarar parametro.
    for(let i = 0; i < repetir; i++){
        alert(mensagem.toUpperCase())
    }
}

function soma(num, num2) {
    return num + num2
}

function maiorValor(a, b) {
    if (a > b){
        return a;
    } else {
        return b;
    }
}
/*cumprimentar('olá, mundo')
cumprimentar('Eu gosto de Java')
cumprimentar(prompt('Saudacao'), prompt('repeticao')) */

//let resultado = soma(4, 7)
//console.log(resultado)
/*const num1 = parseInt(prompt('Valor 1'))
const num2 = parseInt(prompt('Valor 2'))
alert('o maior valor é ' + maiorValor(num1,num2))

maiorValor(parseInt(prompt('Valor 1')), parseInt(prompt('Valor 2')))
const retorno = maiorValor(a, b)
console.log(retorno)*/

/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * ax^2 + bx + c = 0
 * 
 * delta = b^2 -4ac
 * b = -b +- raiz de delta / 2a
 */

function delta(a, b, c){
    return (b**2) - 4 * a * c
}

function equacaoRaiz1(a, b, c, delta){
    return (-b + Math.sqrt(delta)) / (2*a)
}

function equacaoRaiz2(a, b, c, delta){
    return (-b - Math.sqrt(delta)) / (2*a)
}

const deltaR = delta(1, -1, -12)
console.log(deltaR)
console.log(equacaoRaiz1(1, -1, -12, deltaR))
console.log(equacaoRaiz2(1, -1, -12, deltaR))

//resolução do renato abaixo

function equacaoSegundoGrau(a, b, c) {
    const delta = b ** 2 -4 * a * c
    const raizDelta =  Math.sqrt(delta)
    const x1 = (-b + Math.sqrt(delta)) / (2*a)
    const x2 = (-b - Math.sqrt(delta)) / (2*a)
    return [delta, x1, x2]
    
}

console.log(equacaoSegundoGrau(1, -1, -12)) // 4, -3