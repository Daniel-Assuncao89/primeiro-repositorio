/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 A partir de três vezes, preço normal de etiqueta mais juros de 10%
 */

/**
 * -> Metodos de pagamento
 * *Em dinheiro
 * *Em cheque
 * *No Cartão
 */

let precoProduto = parseFloat(prompt('Qual o preço do produto?'))
let precoFinal = 0

while(isNaN(precoProduto) || precoProduto <= 0){
    alert('Preço invalido, digite o valor sem caracteres especiais (letras ou acentos)')
    precoProduto = parseFloat(prompt('Qual o preço do produto?'))
    
}
const metodoDePagamento = prompt(`
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`)

console.log(precoProduto)
console.log(metodoDePagamento)

if (metodoDePagamento == 1 || metodoDePagamento == 2) {

    precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal.toFixed(2)}`)

}else if(metodoDePagamento == 3){
    const quantidadeDeParcelas = parseInt(prompt(`Informe a quantidade de parcelas`))
    if(quantidadeDeParcelas == 1){
        precoFinal = precoProduto * 0.85
        alert(`O preço final do pagamento é ${precoFinal.toFixed(2)}`)
    }else if(quantidadeDeParcelas == 2){
        precoFinal = precoProduto
        alert(`O preço final do pagamento é ${precoFinal.toFixed(2)}`)
    }else if(quantidadeDeParcelas >= 3 && quantidadeDeParcelas <= 10){
        precoFinal = precoProduto * 1.10
        alert(`O preço final do pagamento é ${precoFinal.toFixed(2)}`)
    }else {
        alert('Quantidade de parcelas invalida')
    }

}else {
    alert('Numero invalido')
}