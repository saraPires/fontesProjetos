var obj = {
	nome:"sara", 
	sobrenome:"pires", 
	idade:"16",
	apresentar: apresente
};

function apresente() {
	console.log("Ola eu sou " + this.nome + ' ' + this.sobrenome + '!' );
}


console.log(obj.sobrenome);
obj.apresentar();
	