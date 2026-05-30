---
layout: layouts/base.njk
title: Home
description: "Homepage del sito pubblico del condominio Via Casilina 9."
permalink: /
templateEngineOverride: njk,md
---
<div class="home-hero">
  <div class="home-hero__copy">
    <p class="eyebrow">Sito pubblico del condominio</p>
    <h1>Via Casilina 9</h1>
    <p class="lead">Uno spazio ordinato per avvisi, documenti pubblici e informazioni essenziali del condominio e comprensorio.</p>
    <div class="hero-actions" aria-label="Azioni principali">
      <a class="button-link" href="avvisi/">Consulta avvisi</a>
      <a class="text-link" href="documenti/">Documenti pubblici</a>
    </div>
  </div>
  <figure class="home-hero__visual">
    <img src="{{ '/assets/img/ex-pastificio-pantanella.jpg' | relativeUrl(page.url) }}" alt="Vista dell'ex Pastificio Pantanella e degli edifici circostanti">
  </figure>
</div>

<section class="section-links" aria-label="Sezioni principali">
  <a class="section-link" href="storia/">
    <svg class="section-link__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18"></path>
      <path d="M5 21V9l7-4 7 4v12"></path>
      <path d="M9 21v-7h6v7"></path>
      <path d="M10 10h4"></path>
    </svg>
    <span class="section-link__title">Storia</span>
    <small>Una breve pagina dedicata alla memoria del comprensorio.</small>
  </a>
  <a class="section-link" href="avvisi/">
    <svg class="section-link__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11v2a2 2 0 0 0 2 2h3l7 4V5L8 9H5a2 2 0 0 0-2 2Z"></path>
      <path d="M19 9a4 4 0 0 1 0 6"></path>
      <path d="M8 15l1 5"></path>
    </svg>
    <span class="section-link__title">Avvisi</span>
    <small>Comunicazioni pubbliche ordinate dalla pi&ugrave; recente.</small>
  </a>
  <a class="section-link" href="documenti/">
    <svg class="section-link__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"></path>
      <path d="M14 3v5h5"></path>
      <path d="M9 13h6"></path>
      <path d="M9 17h4"></path>
    </svg>
    <span class="section-link__title">Documenti pubblici</span>
    <small>File consultabili senza accessi o registrazioni.</small>
  </a>
</section>

<section class="content-section" aria-labelledby="area-riservata">
<h2 id="area-riservata">Area riservata</h2>

<p>I documenti condominiali riservati sono accessibili solo agli utenti abilitati.</p>

<p><a class="text-link" href="area-riservata/">Accedi o richiedi abilitazione</a></p>
</section>

<section class="content-section latest-notices" aria-labelledby="ultimi-avvisi">
<h2 id="ultimi-avvisi">Ultimi avvisi</h2>

{% if collections.avvisi | length %}
<ol class="notice-list compact-list">
{% for avviso in collections.avvisi %}
{% if loop.index <= 3 %}
  <li>
    <time datetime="{{ avviso.date | htmlDateString }}">{{ avviso.date | dateReadable }}</time>
    <h3><a href="{{ avviso.url | relativeUrl(page.url) }}">{{ avviso.data.title }}</a></h3>
    <p>{{ avviso.data.summary }}</p>
  </li>
{% endif %}
{% endfor %}
</ol>
{% else %}
<p>Non ci sono ancora avvisi pubblicati.</p>
{% endif %}

<p><a class="text-link" href="avvisi/">Vedi tutti gli avvisi</a></p>
</section>
