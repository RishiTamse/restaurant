const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.men_text,.main_image,.main_btn,
            .image,.about_text, .about_btn,
            .menu_card, .menu_image, .menu_info,
            .gallary_image,.gallary,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 100
})

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)