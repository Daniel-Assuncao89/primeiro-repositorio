//dentro do JS array pode aumentar de tamanho e diminuir sem problemas, abaixo temos os 3 metodos de delcarar array no JS.
/* 
let arr = new Array()
let arr2 = new Array(5)
let arr3 = [10, 15, 9.8, 'Eu sou um texto dentro de um array...sim essa é a piada.', 'Ainda mistura com float e booleano...', 'e não precisa de um laço de repetição pra mostrar todo o array O_O', false, true]

arr3[6] = 'Outro texto'
arr3[8] = 'criação posição 8'
console.log(arr3) 
*/

const lista = ['João', 'Maria', 'Pedro', 'Amanda', 'Alessandra', 'Itamar', 'Jose', 'Lucas']
console.log(lista)
lista.push('Roberta') //Adiciona no final da lista
console.log(lista)
lista.unshift('Gustavo') //Adiciona no inicio
console.log(lista)
lista.pop() //remove o ultimo valor
console.log(lista)
lista.shift() //remove o primeiro valor de um aray
console.log(lista)
console.log(lista.concat('Júlio')) // cria um novo array adicionando o novo parametro. Deixando a principal intacta
console.log(lista)
console.log(lista.join('-> ')) // João -> Maria ....