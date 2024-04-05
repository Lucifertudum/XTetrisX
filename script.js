document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');
    const board = document.querySelector('.game-board');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    // Fonction pour créer une cellule (case) sur le plateau de jeu
    function createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        return cell;
    }

    // Fonction pour créer le plateau de jeu (grille)
    function createBoard() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 10; col++) {
                board.appendChild(createCell());
            }
        }
    }

    // Initialiser le plateau de jeu
    createBoard();
});