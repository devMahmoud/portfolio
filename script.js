const hamburgerBtn = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('navbar-links')[0]
console.log(hamburgerBtn)
hamburgerBtn.addEventListener('click', () => {
    console.log(hamburgerBtn)
    navLinks.classList.toggle('active')
})