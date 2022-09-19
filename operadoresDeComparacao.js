/**
 * operadores de comparação
 * verdadeiro (true) ou falso (false)
 */

const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"

console.log(msg == msg2)

const num = 5
const num2 = 5

console.log(num == num2)

let a = 78
let b = "78"

console.log(a == b) // == compara o valor, independente do tipo
console.log(a === b)// === compara o valor e o tipo.

//pode declarar uma variavel e receber tipos de variaveis diferentes
let c = 5
c = "Olá mundo"

console.log(msg != msg2)
console.log(a != b)
console.log(a !== b)

a = 56
b = 30
c = 500
let d = 500

console.log(a > b)
console.log(c >= d)
