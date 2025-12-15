const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");

//Setting Current Year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Mobile Navigation
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//Sticky Navigation
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
