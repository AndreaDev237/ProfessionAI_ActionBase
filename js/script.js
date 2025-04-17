// Script principale per la demo

// Cambio tema
document.addEventListener('DOMContentLoaded', function() {
    // Ottieni il pulsante per cambiare tema
    const themeButton = document.getElementById('changeTheme');
    
    // Aggiungi event listener per il cambio tema
    themeButton.addEventListener('click', function() {
        // Aggiungi o rimuovi la classe dark-theme dal body
        document.body.classList.toggle('dark-theme');
        
        // Cambia il testo del pulsante in base al tema attuale
        if (document.body.classList.contains('dark-theme')) {
            themeButton.textContent = 'Tema Chiaro';
        } else {
            themeButton.textContent = 'Tema Scuro';
        }
    });

    // Animazione semplice per le cards
    const cards = document.querySelectorAll('.card');
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200);
            }, index * 200);
        });
    }, 1000);
});

// Questa funzione potrebbe essere chiamata dopo che la pagina è stata caricata
// per mostrare un messaggio di benvenuto
function showWelcomeMessage() {
    console.log('Benvenuto nella demo di GitHub Actions!');
    
    // Potremmo usare questa funzione per mostrare un messaggio toast o un alert
    // In un'applicazione reale, questo potrebbe essere più elaborato
    alert('Benvenuto nella demo di GitHub Actions!');
}

// Funzione per simulare una richiesta API (non utilizzata in questa demo semplice)
async function fetchDataExample() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Dati ricevuti:', data);
        return data;
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        return null;
    }
}