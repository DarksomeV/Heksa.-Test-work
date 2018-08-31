;(function gallery() {
    const arrows = document.querySelectorAll('.arrow');
    const roomName = document.querySelector('.room-name span');
    const roomPrice = document.querySelector('.room-price .price');
    const slides = document.querySelectorAll(".main-images");
    const dots = document.querySelectorAll(".dot");
    let slideIndex = 1;

    showSlides(slideIndex);

//Main function
    function showSlides(n) {

        //For looping
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        slides.forEach(slide => {
            slide.classList.remove('fadein');
            slide.style.display = "none";
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        if (slides[slideIndex - 1].classList.contains("bedroom")) {
            roomName.innerHTML = 'Для спальни';
            roomPrice.innerHTML = '75';
        } else if (slides[slideIndex - 1].classList.contains("kitchen")) {
            roomName.innerHTML = 'Для кухни';
            roomPrice.innerHTML = '50';
        } else if (slides[slideIndex - 1].classList.contains("livingroom")) {
            roomName.innerHTML = 'Для гостинной';
            roomPrice.innerHTML = '45';
        }
        slides[slideIndex - 1].classList.add('fadein');
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

//Event Function for Arrows
    function clickingArrow(e) {
        if (e.target.closest('.next-arrow')) {
            showSlides(slideIndex += 1);
        } else if (e.target.closest('.prev-arrow')) {
            showSlides(slideIndex -= 1);
        }
    }

//Event Function for Dots
    function clickingDots(e) {
        if (e.target.closest('.dot')) {
            const slide = Number(this.dataset.number);
            showSlides(slideIndex = slide)
        } else if (e.target.closest('.prev-arrow')) {
            showSlides(slideIndex -= 1);
        }
    }

//Setting Events
    arrows.forEach(arrow => arrow.addEventListener('click', clickingArrow));
    dots.forEach(dot => dot.addEventListener('click', clickingDots));
})();



