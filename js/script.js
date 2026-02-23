function filtrar(categoria, isInitial = false) {
    const cards = document.querySelectorAll('.product-card');
    const botoes = document.querySelectorAll('.btn-filter');

    // 1. Gerencia os botões
    botoes.forEach(btn => {
        btn.classList.remove('active');
        // Se for inicial, não acendemos o botão "Todos" ainda, ou deixe como preferir
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${categoria}'`)) {
            btn.classList.add('active');
        }
    });

    // 2. Gerencia os cards
    cards.forEach(card => {
        // Lógica: se for inicial, mostra só 'destaque'. Se clicar em 'todos', mostra tudo. 
        // Se clicar em categoria, mostra a categoria.
        const deveMostrar = isInitial 
            ? card.classList.contains('destaque') 
            : (categoria === 'todos' || card.classList.contains(categoria));

        if (deveMostrar) {
            card.style.display = 'flex';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            card.style.display = 'none';
        }
    });
}

// Inicializa o site mostrando APENAS os 3 destaques
document.addEventListener("DOMContentLoaded", () => {
    // Passamos 'destaque' e o aviso de que é o carregamento inicial
    filtrar('destaque', true);
});