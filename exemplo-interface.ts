interface Pessoa{
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let saraPires = {nome: 'sara pires', idade : 33};
imprimirIdade(saraPires);

