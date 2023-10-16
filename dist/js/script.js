// start: Navbar
document.querySelector('.navbar-show').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar').classList.add('show-menu')
})
document.querySelectorAll('.navbar-hide, .navbar-overlay').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('.navbar').classList.remove('show-menu')
    })
})
document.querySelector('.search-show').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.search-modal').classList.remove('hidden')
    document.getElementById('search').focus()
})
document.querySelector('.search-hide').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.search-modal').classList.add('hidden')
})
// end: Navbar

// start: Categories
new Swiper('.swiper-category', {
    slidesPerView: 'auto',
    spaceBetween: 24,
});
// end: Categories

// start: Popular
new Swiper('.swiper-popular', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    }
});
// end: Popular

// start: Trending
new Swiper('.swiper-trending', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        1024: {
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// end: Trending