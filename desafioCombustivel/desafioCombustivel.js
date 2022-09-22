const tipoDeCombustivel = prompt(`
Selecione qual o tipo de Combustivel
A) Alcool
G) Gasolina`).toUpperCase()
let valorFinal = 0

if(tipoDeCombustivel == 'A'){
    const alcool = parseFloat(prompt('Quantidade de Litros de alcool?'))
    if (alcool <= 25){
        valorFinal = (alcool * 1.90) * 0.98
        alert(`Valor a Pagar: ${valorFinal}`)
    } else {
        valorFinal = (alcool * 1.90) * 0.96
        alert(`Valor a Pagar: ${valorFinal}`)
    }
}else if (tipoDeCombustivel == 2){
    const gasolina = parseFloat(prompt('Quantidade de Litros de Gasolina?'))
    if (gasolina <= 25){
        valorFinal = (gasolina * 2.70) * 0.97
        alert(`Valor a Pagar: ${valorFinal}`)
    }else {
        valorFinal = (gasolina * 2.70) * 0.95
        alert(`Valor a Pagar: ${valorFinal}`)
    }
}else {
    alert('Opção Invalida')
}
