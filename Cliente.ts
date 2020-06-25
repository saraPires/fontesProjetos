class Cliente {

    nome: string;
    idade: number;
    CPF: number;

    constructor(nome: string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    aparesentar():string {
        return `olá eu sou ${this.nome} e tenho ${this.idade} anos`;
    }

}

let sara: Cliente = new Cliente('Sara', 33);
let aparesentacao:string = sara.aparesentar();

console.log(aparesentacao);  
