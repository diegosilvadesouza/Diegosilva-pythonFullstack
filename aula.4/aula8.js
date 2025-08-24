function mostrarLinha() {
    console.log("--------------------");
}

function calcularBonus(salario) {
    return salario * 0.10;
}

function gerarMensagemBoasVindas(nome, setor) {
    return `Bem-vindo(a), ${nome}! Você foi alocado(a) ao setor de ${setor}.`;
}

// Execução do programa
mostrarLinha();

let mensagem = gerarMensagemBoasVindas("Giovanna leal", "Tecnologia");
console.log(mensagem);

let bonus = calcularBonus(5000);
console.log(`O bônus para este funcionário será de R$ ${bonus}`);

mostrarLinha();


function calcularBonus(salario) {
  return salario * 0.10;
}




