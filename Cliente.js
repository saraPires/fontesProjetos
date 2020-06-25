var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.aparesentar = function () {
        return "ol\u00E1 eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var sara = new Cliente('Sara', 33);
var aparesentacao = sara.aparesentar();
console.log(aparesentacao);
