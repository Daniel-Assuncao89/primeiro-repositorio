/**
 * Criar uma função responsavel por mostrar o alerta na tela
 */
let count = 0;

function mostrarAlerta() {
    /**
     * Objeto document é objeto que faz uma representação do HTML do seu site dentro do Javascript
     */

    /**
     * A propriedade classList retona um array com todas as classes CSS que um elemento possui
     * classList.add() serve para adicionar dinamicamente uma nova classe no arquivo HTML
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

function fecharAlerta(){
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
    count ++;
    btnFechar.innerHTML = count;
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')
/**
 * addEventListener é um metodo que te permite ouvir eventos do HTML pleo Javascript
 * Se eu precisar passar uma função como parametro para outra, eu passo a referencia dela, ou seja, a funcao sem parenteses
 */
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)
