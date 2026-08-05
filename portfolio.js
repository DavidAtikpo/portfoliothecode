const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');


menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
});

// Fermer le menu quand on clique sur le lien 
menuLinks.forEach(function (link){
    link.addEventListener("click", function (){
        menu.classList.remove("open");
        document.body.classList.remove("menu-open");
    });
});

// hero carousel
const hero = document.getElementById("hero");
if (hero) {
  const slides = hero.querySelectorAll(".hero__slide");
  const dots = hero.querySelectorAll(".hero__dot");
  let index = 0;
  let timer = null;
  const delay = 6000;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (slide, n) {
      slide.classList.toggle("is-active", n === index);
    });

    dots.forEach(function (dot, n) {
      const active = n === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    timer = window.setInterval(nextSlide, delay);
  }

  function stopAutoPlay() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showSlide(i);
      startAutoPlay();
    });
  });

  hero.addEventListener("mouseenter", stopAutoPlay);
  hero.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
}
