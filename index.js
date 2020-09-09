const closeBtn = document.querySelector('#closeBtn')
const openBtn = document.querySelector('#openBtn')
const mobileMenu = document.querySelector('#mobileMenu')


closeBtn.addEventListener('click', toggleMenu)
openBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    console.log('Billie')
    mobileMenu.classList.toggle('showHide')
}