let slideIndex = 0;
let slides = document.getElementsByClassName('mySlides');
let dots = document.getElementsByClassName('dot');

activateSlide(0);

// Next/previous controls
function nextSlide() {
  slideIndex +=1;
  showSlides();
}

function prevSlide() {
  slideIndex -=1;
  showSlides();
}

function goToCertainSlide(n) {
  slideIndex = n;
  showSlides();
}

function activateSlide(n) {
  slides[n].style.display = 'block';
  dots[n].className += ' active';
}

function showSlides() {

  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  activateSlide(slideIndex);
  scrollToJobSection();
}

function scrollToJobSection() {
  document.querySelector('.job-info-container').scrollIntoView({
    behavior: 'smooth',
  });
}
