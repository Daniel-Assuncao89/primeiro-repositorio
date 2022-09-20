// Delimitação de Strings

const aspasSimples = 'Olá, \nmundo'
console.log(aspasSimples)

const aspasDuplas = "Olá eu sou o \nJavascript."
console.log(aspasDuplas)

const textoComCrase = `Olá, eu sou o
       Java
   Script`
console.log(textoComCrase)

// métodos das strings

const texto = 'Lorem Ipsum texto aleatorio Ipsum ipsum'
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' Esse texto foi concatenado'))
//console.log(texto[2], texto[10])
console.log(texto.substring(6,17 ))
console.log(texto.replace('Ipsum', 'Troca com replace efetuada')) // Substitui apenas a primeira ocorrencia
console.log(texto.replaceAll('Ipsum', 'replace all efetuado'))
console.log(texto.replace(/Ipsum/g, 'PHP'))//regex
console.log(texto.replace(/Ipsum/gi, 'PHP'))//regex ignorando case sensitive

const html = '<!DOCTYPE html>\n<html><html/>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.endsWith('</body>'))

const mensagem = '                                Olá, mundo                '
console.log(mensagem.trim()) //remove espaços

let senha = 'sonic'
console.log(senha.length)