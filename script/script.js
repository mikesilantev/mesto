const initialCards = [
  {
    name: 'Marrakesh, Morocco',
    link: 'https://images.unsplash.com/photo-1528499640293-fe8fba1f28c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'República, Brazil',
    link: 'https://images.unsplash.com/photo-1522036440821-525d53504f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80'
  },
  {
    name: 'Vienna, Austria',
    link: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'
  },
  {
    name: 'Blue Mountains, Australia',
    link: 'https://images.unsplash.com/photo-1542605731-cf0169ad50e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80'
  },
  {
    name: 'Havana is well know for its classic old American cars.',
    link: 'https://images.unsplash.com/photo-1530568595540-2b7554622f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'
  },
  {
    name: 'Demons Dance, Barcelona',
    link: 'https://images.unsplash.com/photo-1563271834-46ce38124976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80'
  },
];
const modalEdit = document.querySelector('.popup_type_edit');
const modalAdd = document.querySelector('.popup_type_add');
const modalImage = document.querySelector('.popup_type_image');
const cardTemplate = document.querySelector('#card-template').content;
// console.log(cardTemplate);
//Секция элементс для вставки карточек
const cardsContainer = document.querySelector('.elements');
//Создание разметки для карточки//////////////////////////////////////
function createCardDOM() {
  // console.log('Создаем разметку')
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').addEventListener('click', () => {
    console.log(cardElement.parentNode);
    openModal(modalImage);
  })

  cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
    evt.target.closest(".element").remove();
  })
  const cardElementLike = cardElement.querySelector('.element__like');
  cardElementLike.addEventListener('click', () => {
    cardElementLike.classList.toggle('element__like_active')
  })
  return cardElement;
}
//Добавляем карточку к контейнер
function renderCard(name, url) {
  let newCard = createCardDOM();
  let cardImageRender = newCard.querySelector('.element__image');
  let cardSubtitleElement = newCard.querySelector('.element__title');
  cardImageRender.src = url;
  cardSubtitleElement.textContent = name;
  modalImage.querySelector('.popup__image').src = url;
  modalImage.querySelector('.popup__image').alt = name;
  modalImage.querySelector('.popup__subtitle').textContent = name;
  cardsContainer.prepend(newCard);
}
//Перебираем массив и создаем DOM для карточек
initialCards.forEach((array) => {
  let arrayName = array.name;
  let arrayLink = array.link;
  renderCard(arrayName, arrayLink);
})
//Добавление новой карточки
function addCard(evt) {
  evt.preventDefault();
  const locInput = modalAdd.querySelector('.popup__input_text_loc-name');
  const urlInput = modalAdd.querySelector('.popup__input_text_url');
  if ((locInput.value === '') || (urlInput.value === '')) {
    closeModal(modalAdd);
  }
  if ((locInput.value != '') || (urlInput.value != '')) {
    createCardDOM();
    renderCard(locInput.value, urlInput.value);
    closeModal(modalAdd);
  }
}
const buttonEdit = document.querySelector('.profile__edit-button');
buttonEdit.addEventListener('click', () => {
  // console.log('Кликнули по кнопке редактирования')
  openModal(modalEdit);
  pickProfileInfo();
})
//Кнопка добавления новых карточек
const buttonAdd = document.querySelector('.profile__add-button');
buttonAdd.addEventListener('click', () => {
  // console.log('Кликнули по кнопке добавления картинок')
  openModal(modalAdd);
})
function openModal(modal) {
  modal.classList.toggle('popup_open');
}
//Листенер на закрытие окна редактирования
modalEdit.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalEdit);
})
//Листенер на закрытие окна добавления
modalAdd.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalAdd);
})
//Листенер на закрытие модалки с картинкой
modalImage.querySelector('.popup__exit-button').addEventListener('click', () => {
  closeModal(modalImage);
})
function closeModal(modal) {
  modal.classList.remove('popup_open')
}
//Забираем данные из профиля
// Переменные
const profileElement = document.querySelector('.profile');
const nameInput = document.querySelector('.popup__input_text_name');
const jobInput = document.querySelector('.popup__input_text_job');
const profileTitle = profileElement.querySelector('.profile__title');
const profileJob = profileElement.querySelector('.profile__subtitle');
// Вставка инфы из профиля в попап
function pickProfileInfo() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
modalEdit.addEventListener('submit', edirProfile);
modalAdd.addEventListener('submit', addCard);

function edirProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(modalEdit);
}