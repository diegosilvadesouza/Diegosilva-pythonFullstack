const prompt = require("prompt-sync")();

const nota = parseInt(prompt("Digite a nota do aluno (0 a 100): "));

let conceito = "";
let status = "";
let proximaFaixa = 0;

if (nota >= 90 && nota <= 100) {
  conceito = "A";
  status = "Aprovado";
  proximaFaixa = 0;
} else if (nota >= 80) {
  conceito = "B";
  status = "Aprovado";
  proximaFaixa = 90 - nota;
} else if (nota >= 70) {
  conceito = "C";
  status = "Recuperação";
  proximaFaixa = 80 - nota;
} else if (nota >= 60) {
  conceito = "D";
  status = "Recuperação";
  proximaFaixa = 70 - nota;
} else if (nota >= 0) {
  conceito = "F";
  status = "Reprovado";
  proximaFaixa = 60 - nota;
} else {
  console.log("❌ Nota inválida. Digite um valor entre 0 e 100.");
  process.exit();
}

console.log(`\n📊 Resultado:`);
console.log(`Nota: ${nota}`);
console.log(`Conceito: ${conceito}`);
console.log(`Situação: ${status}`);

if (proximaFaixa > 0) {
  console.log(`📈 Faltam ${proximaFaixa} ponto(s) para alcançar o próximo conceito.`);
} else {
  console.log("🎉 Você já está no conceito máximo!");
}