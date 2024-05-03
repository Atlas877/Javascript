
//Object é a representação da classe
var pessoa = {nome: 'Jaime', Idade: 27};


// Class é um molde ou estrutura para o objecto 
class Pessoa {

    constructor(nome,idade,endereco) {

        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }


    andar() {

        console.log('a pessoa' + this.nome + 'esta andando...');
    }



}


var pessoa1 = new Pessoa('Jaime',27,'Avenida 5 de Outubro');