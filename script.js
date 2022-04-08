const hamburgerBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('navbar-links')[0];
const logo = document.getElementsByClassName('logo')[0];
const mailIicon = document.getElementsByClassName('mail-icon')[0];
const header = document.getElementById('header');
const cardContainer = document.getElementById('portfolio');
const form = document.querySelector('.form');
const emailInput = document.querySelector('.email-input .input');
const nameInput = document.getElementById('person-name');
const messageInput = document.getElementById('message');
const formData = {};

const menuToggle = () => {
  header.classList.toggle('header-mobile-menu-opened');
  navLinks.classList.toggle('active-navbar');
  logo.classList.toggle('inactive');
  hamburgerBtn.classList.toggle('toggle-button-opened');
  mailIicon.classList.toggle('inactive');
};

hamburgerBtn.addEventListener('click', menuToggle);

navLinks.addEventListener('click', menuToggle);

const createCard = (name, desc, techs, img) => {
  const card = document.createElement('div');
  card.className = 'card';
  const projectName = name;
  const description = desc;
  const featuredImage = img;
  let techList = '';
  for (let i = 0; i < techs.length; i += 1) {
    techList += `<li class='card-btn card-btn-html'><button>${techs[i]}</button></li>`;
  }

  card.innerHTML = `<div class='card-block'>
  <h2 class='card-title'>${projectName}</h2>
  <p class='card-desc'>
      ${description}
  </p>
  <ul class='card-tech-btns'>
      ${techList}
  </ul>
  </div>
  <div class='proj-view'>
  <button>See Project</button>
  </div>`;

  card.style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${featuredImage})`;

  cardContainer.appendChild(card);
};

const data = [
  {
    name: 'Nerd Game',
    description: 'A multiplayer nerd game. It is a fun easy game you can play with your friend',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
  },
  {
    name: 'Nerd Game',
    description: 'A multiplayer nerd game. It is a fun easy game you can play with your friend',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
  },
];

for (let i = 0; i < data.length; i += 1) {
  createCard(data[i].name, data[i].description, data[i].technologies, data[i].featuredImage);
}

form.addEventListener('submit', (e) => {
  let errorMessage = '';
  for (let i = 0; i < emailInput.value.length; i += 1) {
    if (emailInput.value.charCodeAt(i) > 64 && emailInput.value.charCodeAt(i) < 91) {
      errorMessage = '* Email Should be in lowercase';
      break;
    }
  }
  if (errorMessage.length > 0) {
    e.preventDefault();
    const message = document.createElement('h5');
    message.textContent = errorMessage;
    message.style.color = 'red';
    message.style.order = '4';
    message.style.marginTop = '1rem';
    form.appendChild(message);
  }
});

if (localStorage.getItem('contact-form')) {
  const contactInputs = JSON.parse(localStorage.getItem('contact-form'));
  if (contactInputs.name) {
    nameInput.value = contactInputs.name;
    formData.name = contactInputs.name;
  }
  if (contactInputs.email) {
    emailInput.value = contactInputs.email;
    formData.email = contactInputs.email;
  }
  if (contactInputs.message) {
    messageInput.value = contactInputs.message;
    formData.message = contactInputs.message;
  }
}

nameInput.addEventListener('change', () => {
  formData.name = nameInput.value;
  localStorage.setItem('contact-form', JSON.stringify(formData));
});

emailInput.addEventListener('change', () => {
  formData.email = emailInput.value;
  localStorage.setItem('contact-form', JSON.stringify(formData));
});

messageInput.addEventListener('change', () => {
  formData.message = messageInput.value;
  localStorage.setItem('contact-form', JSON.stringify(formData));
});
