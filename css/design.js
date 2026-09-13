// podešava da pri menjanju velicine prozore ne ode sadrzaj lekcija ispod menija, sem pri scrool-u korisnika, tada meni ostaje na vrhu
function adjustContentOffset() {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  if (nav && header) {
    const navHeight = nav.offsetHeight;
    header.style.marginTop = navHeight + "px";
  }
}

// иницијално
adjustContentOffset();

// при сваком resize-у
window.addEventListener("resize", adjustContentOffset);

// при скролу – мени се благо смањује
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.padding = "4px 0";
  } else {
    nav.style.padding = "9px 0";
  }
});
