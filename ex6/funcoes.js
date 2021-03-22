let restaurantes = [];
let valor = [];
let gorjetas = [];

function gorjeta(valor) {
    if (valor < 50) {
        return valor * 0.20;
    }
    else if (valor >= 50 && valor < 200) {
        return valor * 0.15;
    }
    else {
        return valor * 0.10;
    }
}

for (let i = 0; i < 3; i++) {
    // Coletando dados
    restaurantes[i] = prompt(`Informe o nome do restaurante: `);
    valor[i] = prompt(`Informe o valor gasto no restaurante: `);
    gorjetas[i] = gorjeta(valor[i]);

    // Transformando os valores em Float
    valor[i] = parseFloat(valor[i]).toFixed(2);
    gorjetas[i] = parseFloat(gorjetas[i]).toFixed(2);
}

// Apresentar as respostas
function detalhes(valor, restaurantes, gorjetas) {
    for (let i = 0; i < 3; i++) {
        console.log(`Restaurante ${restaurantes[i]} - [Valor: R$${valor[i]} | Gorjeta: R$${gorjetas[i]} | Total: R$${parseFloat(gorjetas[i]) + parseFloat(valor[i])}`);
    }
}

detalhes(valor, restaurantes, gorjetas);