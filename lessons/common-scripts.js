function pdfLekcija(naslov, pdfPath) {
  return `
    <section>
      <h2>${naslov}</h2>
      <!-- PDF – prikaz na računaru -->
      <iframe src="${pdfPath}" width="90%" height="700px"></iframe>
      <!-- Link za telefone i browsere koji ne prikazuju PDF -->
      <div id="pdfMobileLink">
        <a href="${pdfPath}" target="_blank" class="pdf-link">${naslov}</a>
      </div>
    </section>
  `;
}

