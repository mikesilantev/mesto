//Mesto 1.0.6 upd 20/06/2021
//Mesto 1.0.3 upd 28/05/2021
//Modal
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
  if ((locInput.value === '') || (urlInput.value === '')) {
    closeModal(modalAdd);
  }
  if ((locInput.value != '') || (urlInput.value != '')) {
    const newCard = createCardDOM(locInput.value, urlInput.value);
    renderCard(newCard);
    closeModal(modalAdd);
    //return blank input
    locInput.value = '';
    urlInput.value = '';
  }
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
  document.addEventListener('keydown', handleEscUp);
  closeOverley(modal);
  resetError(modal);
}
//Reset
const resetError = (modal) => {
  if ((modal.classList.contains('popup_type_add')) || (modal.classList.contains('popup_type_edit'))) {
    const popupForm = modal.querySelector('.popup__form');
    popupForm.reset();
    // console.log(popupForm);
    // modal.reset();
  }
};

//Overley click close 
const closeOverley = (modal) => {
  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_open')) {
      closeModal(modal);
      // console.log(modal);
    }
  });
  // console.log(modal);
};
// ESC close
const handleEscUp = (evt) => {
  const activePopup = document.querySelector('.popup_open');
  if (evt.key === 'Escape') {
    // console.log('Куку');
    activePopup.classList.remove('popup_open');
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
  modal.removeEventListener('mousedown', (evt) => {});
}
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
