# Demo GitHub Actions Deploy

Questo progetto è una semplice dimostrazione di come implementare un workflow di GitHub Actions per il deploy automatico di un sito web statico su GitHub Pages.

## Struttura del Progetto

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml    # File di configurazione GitHub Actions
├── css/
│   └── style.css         # Foglio di stile principale
├── js/
│   └── script.js         # Script JavaScript
├── index.html            # Pagina principale
└── README.md             # Questo file
```

## Funzionalità

- Sito web statico responsive con HTML, CSS e JavaScript
- Tema chiaro/scuro con pulsante per cambiare
- Deployment automatico su GitHub Pages tramite GitHub Actions

## Il Workflow di GitHub Actions

Il file `.github/workflows/deploy.yml` definisce un workflow che:

1. Si attiva quando viene fatto un push sul branch `main`
2. Esegue una verifica di base con linting JavaScript
3. Ottimizza i file CSS e JavaScript (minificazione)
4. Minifica i file HTML
5. Pubblica il risultato su GitHub Pages

## Come Utilizzare

1. Clona questo repository
2. Modifica i file secondo le tue esigenze
3. Effettua il push sul branch `main`
4. GitHub Actions eseguirà automaticamente il deploy su GitHub Pages

## Personalizzazione

- Modifica `index.html` per cambiare il contenuto
- Personalizza gli stili in `css/style.css`
- Aggiungi funzionalità in `js/script.js`

## Requisiti

Non è necessario alcun requisito specifico per lo sviluppo locale. Per il deploy:

- Un account GitHub
- Repository con GitHub Pages abilitato

## Note per lo Sviluppo

Questo progetto è intenzionalmente semplice per dimostrare i concetti base di GitHub Actions. In un progetto reale, potresti voler aggiungere:

- Test più completi
- Gestione degli asset (immagini, font, ecc.)
- Preprocessori CSS (Sass, Less)
- Framework JavaScript
- Gestione delle dipendenze con npm/yarn