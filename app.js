function renderFigure(side, data) {
  if (data.placeholder) {
    const isAfter = side === "despues";
    const cls = isAfter ? "placeholder-after" : "placeholder-before";
    const label = isAfter ? "Después" : "Antes";
    return `
      <figure>
        <div class="${cls}" role="img" aria-label="${data.texto}">
          <span>${label}</span>
          <p>${data.texto}</p>
        </div>
        <figcaption>${data.pie}</figcaption>
      </figure>`;
  }
  return `
    <figure>
      <img src="${data.src}" alt="${data.alt}" loading="lazy" width="640" height="480" />
      <figcaption>${data.pie}</figcaption>
    </figure>`;
}

function renderWork(obra, index, total) {
  const prev = index > 0 ? OBRAS[index - 1] : null;
  const next = index < total - 1 ? OBRAS[index + 1] : null;
  const tagLabel = MOTIVO_LABEL[obra.motivo] || obra.motivo;

  const quoteBlock = obra.cita
    ? `<blockquote class="quote">${obra.cita}</blockquote>`
    : "";

  const nav = `
    <nav class="nav-adjacent" aria-label="Navegación entre obras">
      ${prev ? `<a href="#${prev.id}">← ${prev.titulo}</a>` : "<span></span>"}
      ${next ? `<a href="#${next.id}">${next.titulo} →</a>` : "<span></span>"}
    </nav>`;

  return `
    <article class="work-card" id="${obra.id}" data-motivo="${obra.motivo}">
      <header>
        <h2>${obra.titulo}</h2>
        <p class="artist">${obra.artista} · ${obra.anoObra}</p>
      </header>
      <dl class="ficha">
        <div><dt>Obra</dt><dd>${obra.titulo}</dd></div>
        <div><dt>Artista</dt><dd>${obra.artista}</dd></div>
        <div><dt>Lugar</dt><dd>${obra.lugarAtaque}</dd></div>
        <div><dt>Fecha ataque</dt><dd>${obra.fechaAtaque}</dd></div>
        <div><dt>Autor</dt><dd>${obra.autorAtaque}</dd></div>
        <div><dt>Motivo</dt><dd>${tagLabel}</dd></div>
      </dl>
      <div class="compare">
        ${renderFigure("antes", obra.antes)}
        ${renderFigure("despues", obra.despues)}
      </div>
      ${quoteBlock}
      <div class="blocks">
        <div class="block">
          <h3>Qué pasó</h3>
          <p>${obra.quePasó}</p>
        </div>
        <div class="block">
          <h3>Por qué</h3>
          <p>${obra.porQue}</p>
        </div>
        <div class="block que-cambio">
          <h3>Qué cambió</h3>
          <p>${obra.queCambio}</p>
        </div>
      </div>
      <footer class="work-footer">
        <p><strong>Estado actual:</strong> ${obra.estado}</p>
        <p><strong>Fuentes:</strong> ${obra.fuentes}</p>
        ${nav}
      </footer>
    </article>`;
}

function renderIndex() {
  const list = document.getElementById("work-index");
  if (!list) return;
  list.innerHTML = OBRAS.map((obra) => {
    const yearMatch = obra.fechaAtaque.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : "—";
    return `
      <li>
        <a href="#${obra.id}">
          <span class="year">${year}</span>
          <span>${obra.titulo} · ${obra.artista}</span>
          <span class="tag ${obra.motivo}">${MOTIVO_LABEL[obra.motivo]}</span>
        </a>
      </li>`;
  }).join("");
}

function renderWorks() {
  const main = document.getElementById("obras");
  if (!main) return;
  main.innerHTML = OBRAS.map((obra, i) => renderWork(obra, i, OBRAS.length)).join("");
}

renderIndex();
renderWorks();
