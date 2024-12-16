let currentIndex = 0;

function updateCarousel() {
    const content = document.querySelector('.carousel-content');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const offset = -currentIndex * 100;
    
    content.style.transform = `translateX(${offset}%)`;
  }

function prevSlide() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
  updateCarousel();
}

function nextSlide() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
  updateCarousel();
}