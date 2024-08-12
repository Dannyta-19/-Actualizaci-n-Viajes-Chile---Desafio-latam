import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

  // Alerta

  let alertContainer = document.getElementById("alertenviado");
  
  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
  
    alertContainer.append(wrapper);
  }; 
  const alertTrigger = document.getElementById("alertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      alert("Mensaje enviado con éxito !!!", "success");
    });
  }
  
  // Tooltip

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


 // carrusel
 
const carousel = document.getElementById('carouselExampleCaptions');
carousel.setAttribute('data-bs-interval', '1000'); 
carousel.addEventListener('mouseenter', () => {
  bootstrap.Carousel.getInstance(carousel).pause(); 
});
carousel.addEventListener('mouseleave', () => {
  bootstrap.Carousel.getInstance(carousel).cycle(); 
});