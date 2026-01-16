const row = document.getElementById("adventureRow");
const cardWidth = 342;
let autoSlide;

function startAutoSlide(){
  autoSlide = setInterval(() => {
    if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 5) {
      row.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      row.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, 5000);
}

function stopAutoSlide(){
  clearInterval(autoSlide);
}

function scrollAdventure(direction){
  row.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}

row.addEventListener("mouseenter", stopAutoSlide);
row.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been send");
  form.reset();
});
