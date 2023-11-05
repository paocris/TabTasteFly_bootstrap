document.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".animate-fade");
  
    // Función para agregar la clase "active" a las tarjetas
    function addActiveClass() {
      cards.forEach(function (card, index) {
        if (window.scrollY >= card.offsetTop - window.innerHeight) {
          card.style.animationDelay = index * 0.5 + "s";
          card.classList.add("active");
        }
      });
    }
  
    addActiveClass();
  });
