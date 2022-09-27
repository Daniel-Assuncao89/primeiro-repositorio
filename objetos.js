/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */
let end = {
    rua: 'Rua Principal',
    numero: 456,
    estado: 'BH',
    complemento: 'Sem complemento',
    cep: '123000-000'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '123.123.123-12',
    altura: 156,
    endereco: { ...end }, //desestrutura o objeto/array, criando uma copia que não tem referencia o objeto original
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Goland', 'Rust'],
    cumprimentar() {
        // Para referenciar objeto dentro dele mesmo: this.atributo
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}

/*console.log(end)
console.log(pessoa.habilidades[2])
console.log(pessoa.endereco.estado) 
pessoa.cumprimentar()
pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)
console.log(pessoa['cpf']) */
console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua = 'Rua Secundaria'

console.log(pessoa.endereco.rua)