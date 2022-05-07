const hamburgerBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('navbar-links')[0];
const logo = document.getElementsByClassName('logo')[0];
const mailIicon = document.getElementsByClassName('mail-icon')[0];
const header = document.getElementById('header');
const cardContainer = document.getElementById('portfolio');
const form = document.querySelector('.form');
const emailInput = document.querySelector('.email-input .input');
const popTitle = document.querySelector('.pop-title');
const popTechBtns = document.querySelectorAll('.pop-tech-btn');
const popDesc = document.querySelector('.desc');
const popupWindow = document.querySelector('.overlay');
const closePop = document.querySelector('.close-pop');

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
    techList += `<li class="card-btn card-btn-html"><button>${techs[i]}</button></li>`;
  }

  card.innerHTML = `<div class="card-block">
  <h2 class="card-title">${projectName}</h2>
  <p class="card-desc">
      ${description}
  </p>
  <ul class="card-tech-btns">
      ${techList}
  </ul>
  </div>
  <div class="proj-view">
  <button class="see-project">See Project</button>
  </div>`;

  card.style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${featuredImage})`;

  cardContainer.appendChild(card);
};

const data = [
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['html', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'img/desktop/placeholder2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'www.google.com',
    sourceLink: 'www.github.com',
    innerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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

const seeProject = document.querySelectorAll('.see-project');

const fillPopup = (title, techList, description) => {
  popTitle.textContent = title;
  popDesc.textContent = description;
  for (let i = 0; i < popTechBtns.length; i += 1) {
    popTechBtns[i].textContent = techList[i];
  }
};

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    fillPopup(data[i].name, data[i].technologies, data[i].innerDescription);
    popupWindow.style.visibility = 'visible';
  });
}

closePop.addEventListener('click', () => {
  popupWindow.style.visibility = 'hidden';
});