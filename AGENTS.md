# Istruzioni per Codex

- Lavorare sempre nella repository esistente `https://github.com/ViaCasilina9/sito-condominio.git`.
- Non creare nuove repository.
- Non eseguire `git init`.
- Non cambiare il remote `origin`.
- Il dominio pubblico ufficiale e' `https://www.viacasilina9.it`.
- Il dominio senza www e' `https://viacasilina9.it` e deve reindirizzare o comunque portare al sito pubblico.
- Non usare piu' `/sito-condominio/` nei link interni o negli asset, salvo motivazione tecnica esplicita.
- L'area riservata documenti e' esterna: `https://documenti.viacasilina9.it`.
- Non modificare la configurazione Cloudflare o Cloudflare Access.
- Non pubblicare documenti riservati nella repository pubblica.
- Non aggiungere autenticazione, database, backend, CMS o framework client-side pesanti.
- Non aggiungere analytics, cookie di profilazione, banner cookie o strumenti di tracciamento senza richiesta esplicita.
- Non aggiungere dipendenze non necessarie.
- Mantenere il sito statico, semplice, sobrio, artigianale e pubblicabile con GitHub Pages.
- Mantenere accessibilita', buon contrasto, navigazione chiara e focus visibile da tastiera.
- Usare Markdown per i contenuti, JSON per dati semplici, Nunjucks per layout e CSS scritto a mano.
- Aggiornare `README.md` quando cambia il flusso operativo o la struttura dei contenuti.
- Dopo ogni modifica eseguire `npm run build`.
