//Mesto 1.0.3 
//28.05.2021
//Modal
const initialCards = [
  {
    name: 'GAME OVER',
    link: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
  },
  {
    name: '30 years of the Nintendo Game Boy.',
    link: 'https://images.unsplash.com/photo-1555864326-5cf22ef123cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80'
  },
  {
    name: 'Super Nintendo Entertainment System - controller',
    link: 'https://images.unsplash.com/photo-1531594896955-305cf81269f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'NES - Mini with Mario Kart (FrontView)',
    link: 'https://images.unsplash.com/photo-1591462391994-cb7614f54aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Arcade',
    link: 'https://images.unsplash.com/photo-1583634852966-130c15654305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80'
  },
  {
    name: 'Nintendo 2ds',
    link: 'https://images.unsplash.com/photo-1593693846852-afc7461355ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxuaW50ZW5kbyUyMGdhbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
];
const modalEdit = document.querySelector('.popup_type_edit');
//Modal Add Card
const modalAdd = document.querySelector('.popup_type_add');
const locInput = modalAdd.querySelector('.popup__input_text_loc-name');
const urlInput = modalAdd.querySelector('.popup__input_text_url');
// Modal Image
const modalImage = document.querySelector('.popup_type_image');
const modalImageFull = modalImage.querySelector('.popup__image');
const modalImageSubtitle = modalImage.querySelector('.popup__subtitle');
//Card <template> Element
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.elements');
//Create card DOM
function createCardDOM(name, url) {
  console.log('Создаем разметку');
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImageRender = cardElement.querySelector('.element__image');
  const cardSubtitileElement = cardElement.querySelector('.element__title');
  //like
  const cardElementLike = cardElement.querySelector('.element__like');

  //Set attribute element
  cardImageRender.src = url;
  cardImageRender.alt = name;
  cardSubtitileElement.textContent = name;

  // listener and attribute for the modal image from the function values (name & url)
  cardElement.querySelector('.element__image').addEventListener('click', () => {
    modalImageFull.src = url;
    modalImageFull.alt = name;
    modalImageSubtitle.textContent = name;
    // console.log(cardElement);
    openModal(modalImage);
  });

  //Trash button - listener & remove card
  cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  //Like button - listener & toggle class
  cardElementLike.addEventListener('click', () => {
    cardElementLike.classList.toggle('element__like_active');
  });
  return cardElement;
}

//Add card to section elements
function renderCard(newCard) {
  cardsContainer.prepend(newCard);
}

//Iterate through the array, create a DOM, and add it to the section
initialCards.forEach((array) => {
  const newCard = createCardDOM(array.name, array.link);
  renderCard(newCard);
});

//Add new card - conditions, create DOM & add it to the section
function addCard() {
    const newCard = createCardDOM(locInput.value, urlInput.value);
    renderCard(newCard);
    closeModal(modalAdd);
    locInput.value = '';
    urlInput.value = '';
    returnDisabledButton();
  }

  const returnDisabledButton = () => {
    const saveButton = modalAdd.querySelector('.popup__save-button');
    saveButton.classList.add('popup__save-button_disabled');
    saveButton.setAttribute('disabled', 'disabled');
    console.log(saveButton);
  } 

//Button - edit profile
const buttonEdit = document.querySelector('.profile__edit-button');
buttonEdit.addEventListener('click', () => {
  openModal(modalEdit);
  pickProfileInfo();
});
//Button - add new card 
const buttonAdd = document.querySelector('.profile__add-button');
buttonAdd.addEventListener('click', () => {
  openModal(modalAdd);
});
//Open all modal =*) (Khaz Modan)

function openModal(modal) {
  modal.classList.toggle('popup_open');
  addListenerForm(modal);
}

const addListenerForm = (modal) => {
  document.addEventListener('keydown', handleEscUp);
  modal.addEventListener('mousedown', closeOverley);
};

const closeOverley = function(evt){
  console.log(evt.target);
  if (evt.target.classList.contains('popup_open')) {
    closeModal(evt.target);
  }
};

// ESC close
const handleEscUp = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_open');
    // console.log('Куку');
    closeModal(activePopup);
  }
  // console.log(evt);
}

//Listener on close button for Modal Edit Profile
modalEdit.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalEdit);
});
//Listener on close button for Modal Add New Card
modalAdd.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalAdd);
});
//Listener on close button for Modal Image
modalImage.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalImage);
});
//Close all modal



function closeModal(modal) {
  modal.classList.remove('popup_open');
  document.removeEventListener('keydown', handleEscUp);
  modal.removeEventListener('mousedown', closeOverley);
}


// Рабочая
// function closeModal(modal) {
//   modal.classList.remove('popup_open');

//   modal.removeEventListener('mousedown', (evt) => {});

//   document.removeEventListener('keydown', handleEscUp);
// }
// get data in profile
const profileElement = document.querySelector('.profile');
const nameInput = document.querySelector('.popup__input_text_name');
const jobInput = document.querySelector('.popup__input_text_job');
const profileTitle = profileElement.querySelector('.profile__title');
const profileJob = profileElement.querySelector('.profile__subtitle');
function pickProfileInfo() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
//listener on submit button
modalEdit.addEventListener('submit', editProfile);
modalAdd.addEventListener('submit', addCard);
//Edit profile
function editProfile() {
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(modalEdit);
}