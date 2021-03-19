// Pedindo os dados

const pesoStr = prompt('Informe o seu peso: (Ex: 70.4)');
const alturaStr = prompt('Informe sua altura: (Ex: 1.75)');

// Transformando os valores de String pra Float

const peso = parseFloat(pesoStr);
const altura = parseFloat(alturaStr);

// Calculo do IMC

let imc = peso / (altura * altura);
// console.log(imc);
// console.log(typeof imc);

// Apresentar a resposta

if (imc < 17) {
    console.log(`O IMC é: (${imc.toFixed(2)}) esta muito abaixo do peso`);

} else if(imc >= 17 && imc < 18.5){
    console.log(`O IMC é: (${imc.toFixed(2)}) esta abaixo do peso`);

} else if(imc >= 18.5 && imc < 25){
    console.log(`O IMC é: (${imc.toFixed(2)}) Peso normal`);

} else if(imc >= 25 && imc < 30){
    console.log(`O IMC é: (${imc.toFixed(2)}) Acima do peso`);

} else if(imc >= 30 && imc < 35){
    console.log(`O IMC é: (${imc.toFixed(2)}) Obesidade I`);

} else if(imc >= 35 && imc < 40){
    console.log(`O IMC é: (${imc.toFixed(2)}) Obesidade II`);

} else{
    console.log(`O IMC é: (${imc.toFixed(2)}) Obesidade III (mórbida)`)
}