function slikaLekcija(naslov, imgPath, altText = "") {
  return `
    <section>
      <h2>${naslov}</h2>
      <!-- Слика – приказ на рачунару -->
      <img src="${imgPath}" alt="${altText}" style="max-width:90%; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2); display:block; margin:0 auto;">
      <!-- Линк за телефоне и преглед у новом прозору -->
      <div id="pdfMobileLink">
        <a href="${imgPath}" target="_blank" class="pdf-link">${naslov}</a>
      </div>
    </section>
  `;
}

function pdfLekcija(naslov, pdfPath) {
  return `
    <section>
      <h2>${naslov}</h2>
      <!-- PDF – prikaz na računaru -->
      <iframe src="${pdfPath}" width="90%" height="500px"></iframe>
      <!-- Link za telefone i browsere koji ne prikazuju PDF -->
      <div id="pdfMobileLink">
        <a href="${pdfPath}" target="_blank" class="pdf-link">${naslov}</a>
      </div>
    </section>
  `;
}
