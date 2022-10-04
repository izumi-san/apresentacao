let slideIndex = 1;
let slides = document.getElementsByClassName('mySlides');
let dots = document.getElementsByClassName('dot');

showSlides(0);


// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function activateSlide(n) {
  slides[n].style.display = 'block';
  dots[n].className += ' active';
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  activateSlide(slideIndex - 1);
  scrollToTitle();
}

function scrollToTitle() {
  document.querySelector('.job-info-container').scrollIntoView({
    behavior: 'smooth',
  });
}
