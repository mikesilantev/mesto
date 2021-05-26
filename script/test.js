
const locInput = modalAdd.querySelector('.popup__input_text_loc-name');
const urlInput = modalAdd.querySelector('.popup__input_text_url');

function submitAddform(evt) {
  evt.preventDefault();
  if ((locInput.value === '') || (urlInput.value === '')) {
    closeModal(modalAdd);
    // console.log('Пустое')
  }
  if ((locInput.value != '') || (urlInput.value != '')) {
    createCardDOM()
    // name: locInput.value, link: urlInput.value
    createNewCard(locInput.value, urlInput.value);
    closeModal(modalAdd);
    // console.log('Что то ввели')
  }