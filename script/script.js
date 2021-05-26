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
const cardTemplate = document.querySelector('#card-template').content;
// console.log(cardTemplate);
//Секция элементс для вставки карточек
const cardsContainer = document.querySelector('.elements');
//Создание разметки для карточки//////////////////////////////////////
// Создание разметки
function createCardDOM(cardTitle, cardLink) {
  console.log('Создаем разметку')
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const newCardImg = cardElement.querySelector('.element__image');
  newCardImg.src = cardLink;
  newCardImg.alt = cardTitle;
  cardElement.querySelector('.element__title').textContent = cardTitle;
  newCardImg.addEventListener('click', () => {
    openModal(modalImage);
  })
  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    evt.target.closest(".element").remove();
  })
  const cardElementLike = cardElement.querySelector('.element__like');
  cardElementLike.addEventListener('click', function () {
    cardElementLike.classList.toggle('element__like_active')
  })
  console.log('Возвращаем разметку')
  return renderCard(cardElement)
}
function renderCard(itemCard) {
  cardsContainer.prepend(itemCard);
}

initialCards.forEach(function (array) {
  let arrayName = array.name;
  let arrayLink = array.link;
  createCardDOM(arrayName, arrayLink);
})


