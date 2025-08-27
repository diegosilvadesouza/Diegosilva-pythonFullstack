let nota = 82;

let conceito;
let situacao;
let proximaNota;

if (nota >= 90) {
  conceito = 'A';
  situacao = 'APROVADO';
} else if (nota >= 80) {
  conceito = 'B';
  situacao = 'APROVADO';
  proximaNota = 90;
} else if (nota >= 70) {
  conceito = 'C';
  situacao = 'APROVADO';
  proximaNota = 80;
} else if (nota >= 60) {
  conceito = 'D';
  situacao = 'RECUPERAÇÃO';
  proximaNota = 70;
} else {
  conceito = 'F';
  situacao = 'REPROVADO';
  proximaNota = 60;
}

let mensagem = `Sua nota foi ${nota}. Você obteve o conceito ${conceito} e está ${situacao}.`;

if (conceito !== 'A') {
  let faltam = proximaNota - nota;
  mensagem += ` Faltaram ${faltam} ponto${faltam > 1 ? 's' : ''} para alcançar o conceito ${String.fromCharCode(conceito.charCodeAt(0) - 1)}.`;
}

console.log(mensagem);