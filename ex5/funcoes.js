function calcularIdade(idade) {

    idade = parseInt(idade);
    const anoNasc = 2021 - idade;
    resul = 2021 - anoNasc;

    if (resul >= 65) {
        return "Aposentado";
    }
    else {
        return "Ainda nao aposentado";
    }
}

const nome = prompt("Informe seu nome: ");
const idade = prompt("Informe sua idade: ");

console.log(calcularIdade(idade));