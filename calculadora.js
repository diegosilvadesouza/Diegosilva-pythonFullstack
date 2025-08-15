
let preco = 150.0;      
let valorDesconto = 20;      
// Cálculo do preço final
let precoFinal = preco - valorDesconto;
console.log("Preço final após desconto: R$" + precoFinal);


let peso = 71;
let altura = 1.75;
// Calcular IMC
let imc = peso / (altura ** 2);
console.log("O IMC é:" + imc);


let idade = 34;
let tem_Experiencia = true;

// Verificar elegibilidade
if (idade >= 18 && tem_Experiencia) {
    console.log('Elegível para o concurso.');
} else {
    console.log('Não elegível para o concurso.');
}



let nivel_Acesso = 3;

// Verificar nível de acesso
if (nivel_Acesso === 3) {
    console.log('Acesso total');
} else if (nivel_Acesso === 2) {
    console.log('Acesso parcial');
} else {
    console.log('Acesso restrito');
}




let celsius = 5;

// Converter para Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C equivale a ${fahrenheit}°F`);



let numero = 21;

// Verificar se é par ou ímpar
if (numero % 2 === 0) {
    console.log('O número é par.');
} else {
    console.log('O número é ímpar.');
}



// Peso do pacote em kg
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
console.log("Valor do frete: R$" + frete);

