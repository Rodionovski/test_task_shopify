document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        let scrollAmount = 0;

        // додаємо базові кнопки навігації
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '<';
        prevBtn.classList.add('carousel-prev');
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '>';
        nextBtn.classList.add('carousel-next');

        carousel.prepend(prevBtn);
        carousel.append(nextBtn);

        const scrollStep = items[0].offsetWidth + 16; // ширина слайда + відступ

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        // свайп для мобільних
        let startX;
        carousel.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchmove', e => {
            if (!startX) return;
            let diffX = startX - e.touches[0].clientX;
            carousel.scrollBy({ left: diffX, behavior: 'auto' });
            startX = e.touches[0].clientX;
        });
    });
});
