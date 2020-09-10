const closeBtn = document.querySelector('#closeBtn')
const openBtn = document.querySelector('#openBtn')
const mobileMenu = document.querySelector('#mobileMenu')

const bannerTl = gsap.timeline()
const bannerH1 = document.querySelector('.banner__content h1')
const bannerP = document.querySelector('.banner__content p')
const bannerDiv = document.querySelector('.banner__content div')


bannerTl.from('.header__container', {
    duration: 1,
    autoAlpha: 0,
    opacity: 0,
    y: 30,
    ease: 'power3.inOut'
})
.from([bannerH1, bannerP, bannerDiv], {
    delay: -0.4,
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    autoAlpha: 0,
    stagger: 0.2
})
.from(['.banner__image', '.banner__card'], {
    delay: -1,
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    autoAlpha: 0,
    stagger: {
        amount: 0.2
    }

})


closeBtn.addEventListener('click', toggleMenu)
openBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    console.log('Billie')
    mobileMenu.classList.toggle('showHide')
}