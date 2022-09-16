alert("Código Funcionando")
const nomeUsuario = prompt("Olá, usuario, qual o seu nome?")

//let num = prompt("olá, "+ nomeUsuario + "." + " Digite algum número, por favor")

//qualquer coisa digitada no prompt vai ser considerado string
let num = Number(prompt("olá, "+ nomeUsuario + "." + " Digite algum número, por favor")) // transforma em number
console.log(typeof num) //typeof mostra o tipo da variavel

//const sucessor = num++
//const antecessor = num - 1

//alert("O sucessor de " + num + " é " + sucessor)
//alert("O antecessor de " + num + " é " + antecessor)
console.log(num++)
console.log(num)