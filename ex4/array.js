const numeroStr = prompt("Informe um número: ");

numero = parseInt(numeroStr);

// criando o array com o tamanho da var numero

let array = new Array(numero);

// preenchendo o array
for (let i = 0; i < numero; i++) {
    const palavras = prompt("Informe a palavra: ");
    array.push(palavras);
}

// printando o array em ordem contraria

for (let i = array.length; i >= 0; i--) {
    const ar = array[i];
    if (i < array.length) {
        console.log(`${ar}`);
    }
    else {

    }
}