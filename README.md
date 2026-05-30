# Via Casilina 9 - sito pubblico

Sito statico pubblico del condominio e comprensorio di Via Casilina 9.

## Indirizzi ufficiali

- Sito pubblico ufficiale: <https://www.viacasilina9.it>
- Dominio senza www: <https://viacasilina9.it>
- URL tecnico GitHub Pages: <https://viacasilina9.github.io/sito-condominio/>
- Repository pubblica: <https://github.com/ViaCasilina9/sito-condominio>
- Area riservata separata: <https://documenti.viacasilina9.it>

L'area riservata `documenti.viacasilina9.it` e' esterna a questa repository pubblica, e' protetta tramite Cloudflare Access e non deve essere modificata da questo progetto. Documenti riservati, dati personali non necessari o materiali destinati alla sola area riservata non devono mai essere caricati in questa repository.

## Tecnologie

Il sito usa Eleventy, contenuti Markdown, dati JSON, layout Nunjucks e CSS scritto a mano. Non usa WordPress, database, backend, analytics, Google Fonts, cookie di profilazione o risorse esterne obbligatorie.

## Requisiti

- Node.js LTS, versione 20 o successiva.
- npm.

## Installazione

```bash
npm install
```

## Sviluppo locale

```bash
npm run dev
```

Eleventy avvia un server locale e ricompila il sito quando cambiano i file in `src` o `public`.

## Build produzione

```bash
npm run build
```

Il sito statico finale viene generato nella cartella `dist`.

## Struttura contenuti

- `src/index.md`: homepage.
- `src/storia.md`: pagina storia.
- `src/privacy.md`: informativa privacy.
- `src/avvisi/`: avvisi pubblici.
- `src/documenti/`: pagina documenti pubblici.
- `src/_data/documenti.json`: elenco dei documenti pubblici.
- `public/`: file copiati nella root del sito pubblicato, inclusi `favicon.svg`, `robots.txt`, `CNAME`, immagini e documenti pubblici.

## Creare un nuovo avviso

Creare un file Markdown in `src/avvisi/`, per esempio `src/avvisi/nuovo-avviso.md`.

```md
---
layout: layouts/base.njk
title: Titolo avviso
description: "Descrizione breve della pagina."
date: 2026-05-20
summary: "Riepilogo mostrato nella lista avvisi."
tags: avvisi
---
# Titolo avviso

Testo dell'avviso.
```

Gli avvisi sono ordinati automaticamente per data decrescente. La homepage mostra gli ultimi tre.

## Aggiungere un documento pubblico

1. Caricare il file in `public/documenti/`.
2. Aggiungere una voce in `src/_data/documenti.json`.

```json
{
  "title": "Titolo documento",
  "date": "2026-05-20",
  "category": "Categoria",
  "file": "/documenti/nome-file.pdf"
}
```

Usare solo documenti pubblici privi di dati personali non necessari. I file placeholder `.txt` presenti nella repository possono essere sostituiti con PDF ufficiali pubblici. I documenti riservati devono restare fuori da questa repository e appartengono all'area separata `https://documenti.viacasilina9.it`.

## Link e dominio custom

Il dominio pubblico ufficiale e' `https://www.viacasilina9.it`.

Il dominio senza www, `https://viacasilina9.it`, e' configurato separatamente e deve reindirizzare o comunque portare al sito pubblico.

Non usare `/sito-condominio/` nei link interni o negli asset del sito pubblico. I link interni devono essere compatibili con il dominio root `https://www.viacasilina9.it`. Il vecchio URL tecnico GitHub Pages resta solo un riferimento tecnico e non deve essere usato come base dei link pubblici.

## Deploy su GitHub Pages

Il workflow `.github/workflows/deploy.yml` pubblica il sito su GitHub Pages a ogni push su `main`.

Il workflow:

1. installa le dipendenze con `npm ci`;
2. esegue `npm run build`;
3. pubblica la cartella `dist`.

Il file `public/CNAME` viene copiato in `dist/CNAME` e contiene il dominio custom ufficiale `www.viacasilina9.it`.

Flusso Git abituale:

```bash
git status
git add .
git commit -m "Descrivi la modifica"
git push origin main
```

## Privacy

Il sito e' statico, non usa analytics, non usa cookie di profilazione, non contiene moduli di contatto e non gestisce autenticazione.

Non aggiungere analytics, cookie banner, backend, database, CMS o strumenti di tracciamento senza una richiesta esplicita e una valutazione preventiva.
