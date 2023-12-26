const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const playPauseBtn = document.querySelector('.play-pause-btn');

let currentIndex = 0;
let intervalId = null;
let isPlaying = true;

function showSlide(index) {
  const slides = slider.children;
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].style.display = 'none'; // Hide all slides initially
  }
  
  slides[index].classList.add('active');
  slides[index].style.display = 'block'; // Display the active slide
}

function showCaption(index) {
  const captions = document.querySelectorAll('.caption');
  
  captions.forEach(caption => caption.style.opacity = '0');
  
  captions[index].style.opacity = '1';
}

function playSlideShow() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
    showCaption(currentIndex);
  }, 2000);
  
  playPauseBtn.textContent = 'Pause';
}

function pauseSlideShow() {
  clearInterval(intervalId);
  playPauseBtn.textContent = 'Play';
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  showSlide(currentIndex);
  showCaption(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  showSlide(currentIndex);
  showCaption(currentIndex);
});

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSlideShow();
  } else {
    playSlideShow();
  }
  
  isPlaying = !isPlaying;
});

// Initialize the slider
showSlide(currentIndex);
showCaption(currentIndex);
playSlideShow();
