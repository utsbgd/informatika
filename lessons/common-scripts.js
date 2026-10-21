async function htmlLekcija(putanja) {
    try {
        const response = await fetch(putanja);
        if (!response.ok) {
            console.error("Грешка:", putanja);
            return "<p>Грешка при учитавању лекције.</p>";
        }
        return await response.text();
    } catch (err) {
        console.error(err);
        return "<p>Грешка при учитавању лекције.</p>";
    }
}

function slikaLekcija(naslov, imgPath, altText = "") {
  return `
    <section>
      <h2>${naslov}</h2>
      <!-- Слика – приказ на рачунару -->
      <img src="${imgPath}" alt="${altText}" class="lessonImage">
      <!-- Линк за телефоне и преглед у новом прозору -->
      <div class="contentMobileLink">
          <a href="${imgPath}" target="_blank" class="image-link">${naslov}</a>
      </div>
    </section>
  `;
}

function slikaIlustracija(naslov, imgPath, altText = "", velicina = 100) {
  const sirina = 80 * (velicina / 100);
  return `
    <section>
      <h3 class="illustrationTitle">${naslov}</h3>
      <img src="${imgPath}" alt="${altText}" class="illustrationImage" style="max-width:${sirina}%">
      <p class="illustrationCaption"> Илустрација уз лекцију </p>
    </section>
  `;
}

function pdfLekcija(naslov, pdfPath) {
  return `
    <section>
      <h2>${naslov}</h2>
      <iframe class="pdfFrame" src="${pdfPath}" width="90%" height="700px"></iframe>
      <div class="contentMobileLink">
        <a href="${pdfPath}" target="_blank" class="pdf-link">Отвори PDF документ</a>
      </div>
    </section>
  `;
}

function videoLekcija(naslov, videoUrl) {
  return `
    <hr>
    <section>
      <h2>${naslov}</h2>
      <!-- Video – prikaz na računaru -->
      <iframe class="videoFrame" src="${videoUrl}" width="90%" height="500px" frameborder="0" allowfullscreen></iframe>
      <!-- Link za telefone i browsere koji ne prikazuju video u okviru stranice -->
      <div class="contentMobileLink">
        <a href="${videoUrl}" target="_blank" class="video-link">${naslov}</a>
      </div>
    </section>
  `;
}

