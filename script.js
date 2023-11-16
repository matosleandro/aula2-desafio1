// Dados fornecidos
const totalClientes = 100;
const avaliacoes = {
    '1 estrela': 2,
    '2 estrelas': 15,
    '3 estrelas': 18,
    '4 estrelas': 25,
    '5 estrelas': 40
};

// Calcular a nota média
let somaTotal = 0;

for (const estrelas in avaliacoes) {
    somaTotal += parseInt(estrelas) * avaliacoes[estrelas];
}

const notaMedia = somaTotal / totalClientes;

// Exibir a nota média
console.log('A nota média das avaliações é: ' + notaMedia.toFixed(2));