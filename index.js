var obj = {};

var pessoa = function();

var pessoa = new Pessoa();

var Carro = function (marca, nome) {
    this.marca = marca;
    this.nome = nome;
}

var Carro1 = new Carro('vw', 'gol');
alert(Carro1);

var pessoaJuridica = function () {
    var cnpj;

    this.getCNPJ = function () {
        return cnpj;
    }

    this.setCNPJ = function (value) {
        return cnpj;
    }
}

var gato = {
    nome: 'Manda-Chuva',
    cor: 'cinza'
}