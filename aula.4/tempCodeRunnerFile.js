// calculadora.js
const prompt = require("prompt-sync")();
// Importa o módulo readline para entrada via terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal da calculadora
function calcular(numero1, numero2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
    case '/':
      resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: divisão por zero';
      break;
    default:
      resultado = 'Operador inválido';
  }

  console.log(`Resultado: ${resultado}`);
}

// Coleta os dados do usuário
readline.question('Digite o primeiro número: ', (num1) => {
  readline.question('Digite o segundo número: ', (num2) => {
    readline.question('Digite o operador (+, -, *, /): ', (operador) => {
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);
      calcular(numero1, numero2, operador);
      readline.close();
    });
  });
});
