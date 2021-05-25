const buttonEdit = document.querySelector('.profile__edit-button');

buttonEdit.addEventListener('click', function () {
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
//Открытие попапов
const modalEdit = document.querySelector('.popup_type_edit');
const modalAdd = document.querySelector('.popup_type_add');

function openModal(modal) {
  modal.classList.toggle('popup_open');
  // console.log('Открываем окно ' + modal.classList)
  // console.log(modal)
  if (modal === modalEdit) {
    modal.querySelector('.popup__exit-button').addEventListener('click', function () {
      // console.log('Я кнопка в едиторе')
      closeModal(modalEdit)
    })
  }
  if (modal === modalAdd) {
    modal.querySelector('.popup__exit-button').addEventListener('click', function () {
      // console.log('Я кнопка в добавлении')
      closeModal(modalAdd)
    })
  }
}

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

modalEdit.addEventListener('submit', formSubmitHandler);
modalAdd.addEventListener('submit', addSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(modalEdit);
}
function addSubmitHandler(evt) {
  evt.preventDefault();
  const locInput = modalAdd.querySelector('.popup__input_text_loc-name');
  const urlInput = modalAdd.querySelector('.popup__input_text_url');
  if ((locInput.value === '') || (urlInput.value === '')) {
    closeModal(modalAdd);
    // console.log('Пустое')
  }
  if ((locInput.value != '') || (urlInput.value != '')) {
    initialCards.push({ name: locInput.value, link: urlInput.value });
    createNewCard();
    closeModal(modalAdd);
    // console.log('Что то ввели')
  }
}
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
//////////////////////////////////////////////////////////////////////
//забираем template с html
const cardTemplate = document.querySelector('#card-template').content;
// console.log(cardTemplate);
//Секция элементс для вставки карточек
const card = document.querySelector('.elements');
//Создание разметки для карточки//////////////////////////////////////
// Создание разметки
function createCardDOM(array) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const newCardImg = cardElement.querySelector('.element__image');
  newCardImg.addEventListener('click', function (evt) {
    evt.target.parentNode.children[3].classList.toggle('popup_open');
  })
  const newCardImgZoom = cardElement.querySelector('.popup__image');
  const subtitleImgZoom = cardElement.querySelector('.popup__subtitle');

  cardElement.querySelector('.popup__exit-button').addEventListener('click', function (evt) {
    evt.target.closest('.popup_type_image').classList.toggle('popup_open');
  })

  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    evt.target.closest(".element").remove();
  })

  const cardElementLike = cardElement.querySelector('.element__like');
  cardElementLike.addEventListener('click', function () {
    cardElementLike.classList.toggle('element__like_active')
  })
  newCardImg.src = array.link;
  newCardImgZoom.src = array.link;
  newCardImg.alt = array.name;
  subtitleImgZoom.textContent = array.name;
  cardElement.querySelector('.element__title').textContent = array.name;
  card.prepend(cardElement);
}

// Создание новой карточки
function createNewCard() {
  createCardDOM(initialCards[initialCards.length - 1])
}

//Загрузка стандартных карточек
function loadStartCard(array) {
  array.forEach(item => {
    createCardDOM(item);
  })
  // console.log('Карточки созданы!');
}
loadStartCard(initialCards);