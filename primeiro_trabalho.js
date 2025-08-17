// Cálculo do preço final com desconto
let preco = 150.0;
let valorDesconto = 20;
let precoFinal = preco - valorDesconto;
console.log("Preço final após desconto: R$" + precoFinal);

// Cálculo do IMC
let peso = 73;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("O IMC é: " + imc);

// Verificação de elegibilidade para concurso
let idade = 34;
let temExperiencia = true;

if (idade >= 18 && temExperiencia) {
    console.log("Elegível para o concurso.");
} else {
    console.log("Não elegível para o concurso.");
}

// Verificação do nível de acesso
let nivelAcesso = 3;

if (nivelAcesso === 3) {
    console.log("Acesso total");
} else if (nivelAcesso === 2) {
    console.log("Acesso parcial");
} else {
    console.log("Acesso restrito");
}

// Conversão de Celsius para Fahrenheit
let celsius = 5;
let fahrenheit = (celsius * 9/5) + 32;
console.log('${celsius}°C equivale a ${fahrenheit}°F');

// Verificar se o número é par ou ímpar
let numero = 21;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// Cálculo de frete baseado no peso do pacote
let kg = 20;
let frete;

if (kg <= 5) {
    frete = 10.00;
} else if (kg > 5 && kg <= 10) {
    frete = 20.00;
} else {
    frete = 30.00;
}

console.log(`Peso: ${kg} kg`);
console.log(`Valor do frete: R$ ${frete}`);