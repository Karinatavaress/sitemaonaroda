function filtrar(categoria) {
    const cards = document.querySelectorAll('.product-card');
    const botoes = document.querySelectorAll('.btn-filter');

    // 1. Gerencia os botões
    botoes.forEach(btn => {
        btn.classList.remove('active');
        // Verifica se o onclick do botão contém a categoria selecionada
        if (btn.getAttribute('onclick').includes(`'${categoria}'`)) {
            btn.classList.add('active');
        }
    });

    // 2. Gerencia os cards
    cards.forEach(card => {
        if (categoria === 'todos' || card.classList.contains(categoria)) {
            card.style.display = 'flex';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            card.style.display = 'none';
        }
    });
}

// Inicializa o site mostrando tudo
document.addEventListener("DOMContentLoaded", () => {
    filtrar('todos');
});