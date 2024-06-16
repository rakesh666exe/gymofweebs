document.addEventListener('DOMContentLoaded', function() {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    let currentSlideIndex = 0;

    hideAllSlides();
    showSlide(currentSlideIndex);

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }

    function showSlide(index) {
        hideAllSlides();
        slides[index].style.display = 'block';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function handleDotClick(index) {
        showSlide(index);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => handleDotClick(index));
    });
});