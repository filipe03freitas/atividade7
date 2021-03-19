// Pedindo os dados

const nome1 = prompt('Informe o nome da pessoa 1: ');
const peso1Str = prompt('Informe o peso da pessoa 1: (Ex: 70.4)');
const altura1Str = prompt('Informe a altura da pessoa 1: (Ex: 1.75)');

const nome2 = prompt('Informe o nome da pessoa 2: ');
const peso2Str = prompt('Informe o peso da pessoa 2: (Ex: 70.4)');
const altura2Str = prompt('Informe a altura da pessoa 2: (Ex: 1.75)');

// Transformando os valores de String pra Float

const peso1 = parseFloat(peso1Str);
const peso2 = parseFloat(peso2Str);
const altura1 = parseFloat(altura1Str);
const altura2 = parseFloat(altura2Str);

// Informar no console, os valores de cada variável

// console.log(peso1);
// console.log(typeof peso1);

// console.log(peso2);
// console.log(typeof peso2);

// console.log(altura1);
// console.log(typeof altura1);

// console.log(altura2);
// console.log(typeof altura2);

// Calculo dos IMC's

let imc1 = peso1 / (altura1 * altura1);
// console.log(imc1);
// console.log(typeof imc1);

let imc2 = peso2 / (altura2 * altura2);
// console.log(imc2);
// console.log(typeof imc2);

// Apresentar a resposta

if (imc1 > imc2) {
    console.log(`o IMC de ${nome1} (${imc1.toFixed(2)}) é maior que o de ${nome2} (${imc2.toFixed(2)})`);
} else {
    console.log(`o IMC de ${nome2} (${imc2.toFixed(2)}) é maior que o de ${nome1} (${imc1.toFixed(2)})`);
}