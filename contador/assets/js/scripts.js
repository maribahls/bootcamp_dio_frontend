// Variável para armazenar o valor atual do contador
let count = 0;

// Elemento HTML que exibe o número atual
const CURRENT_NUMBER = document.getElementById('currentNumber');

// Elementos HTML dos botões de incremento e decremento
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Função para atualizar o estado dos botões com base no valor atual do contador
function updateButtons() {
    // Desabilita o botão de decremento se o contador for menor ou igual a 0
    if (count <= 0) {
        decrementButton.disabled = true;
    } else {
        decrementButton.disabled = false;
    }

    // Desabilita o botão de incremento se o contador for maior ou igual a 10
    if (count >= 10) {
        incrementButton.disabled = true;
    } else {
        incrementButton.disabled = false;
    }
}

// Função para incrementar o contador e atualizar os botões
function increment() {
    // Verifica se o contador é menor que 10 antes de incrementar
    if (count < 10) {
        count++; // Incrementa o contador
        CURRENT_NUMBER.innerHTML = count; // Atualiza o número exibido
        updateButtons(); // Atualiza o estado dos botões
    }
}

// Função para decrementar o contador e atualizar os botões
function decrement() {
    // Verifica se o contador é maior que 0 antes de decrementar
    if (count > 0) {
        count--; // Decrementa o contador
        CURRENT_NUMBER.innerHTML = count; // Atualiza o número exibido
        updateButtons(); // Atualiza o estado dos botões
    }
}

// Adiciona eventos de clique aos botões
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

// Chama updateButtons para inicializar o estado dos botões
updateButtons();