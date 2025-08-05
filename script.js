const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const text = "COMING SOON";
const el = document.getElementById("type-target");

let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting) {
    el.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(type, 1500); // Wait before deleting
      return;
    }
  } else {
    el.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

type();


 const aiCards = document.querySelectorAll('.ai-roadmap-card');

  function handleScrollReveal() {
    aiCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight * 0.8 && cardBottom > 100) {
        card.classList.add('ai-visible');
      } else {
        card.classList.remove('ai-visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollReveal);
  window.addEventListener('load', handleScrollReveal);
