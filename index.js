let slideIndex = 1;
let slides = document.getElementsByClassName('mySlides');
let dots = document.getElementsByClassName('dot');

activateSlide(0)

// Next/previous controls
function changeSlide(n) {
  showSlides((slideIndex += n));
}

function goToCertainSlide(n) {
  showSlides((slideIndex = n));
}

function activateSlide(n) {
  slides[n].style.display = 'block';
  dots[n].className += ' active';
}

function showSlides(n) {
  if (n >= slides.length || n <= 0) {
    slideIndex = 0;
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
