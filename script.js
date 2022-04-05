const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navbar-links")[0];
const logo = document.getElementsByClassName("logo")[0];
const mailIicon = document.getElementsByClassName("mail-icon")[0];
const closeIcon = document.getElementsByClassName("closeicon")[0];


hamburgerBtn.addEventListener("click", () => {
    console.log(hamburgerBtn);
    navLinks.classList.toggle("active-navbar");
    logo.classList.toggle("inactive");
    hamburgerBtn.classList.toggle("inactive");
    mailIicon.classList.toggle("inactive");
    closeIcon.classList.toggle("active");
});
