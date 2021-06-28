// переменные popupEdit
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.edit-button');
const closeBtnEditPopup = document.querySelector('.popup__close-button');
const formPopupEdit = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// переменные профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// переменные popupAddCard
const popupAddCard = document.querySelector('.popup__add-card');
const closeBtnNewItemPopup = document.querySelector('.popup__close-button_type_add-card');
const formPopupAddCard = document.querySelector('.popup__form_type_add-card');
const newItemBtn = document.querySelector('.add-button');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_url');
const submitBtn = document.querySelector('.popup__button_type-add-card');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// переменные place-template
const placesContainer = document.querySelector('.places');
const placeTemplateContent = document.querySelector('.place-template').content;

// переменные viewPopup
const viewPopup = document.querySelector('.popup_type_view');
const viewImage = document.querySelector('.popup__image');
const viewAlt = document.querySelector('.popup__description');
const closeBtnViewPopup = document.querySelector('.popup__close-button_type_view');
closeBtnViewPopup.addEventListener('click', () => (popupToggle(viewPopup)));

// функция добавляет addEventListener на кнопку удаления
function setEventListener(placeElement) {
  placeElement.querySelector('.place__trash-btn').addEventListener('click', handleDel);
  placeElement.querySelector('.place__like').addEventListener('click', likeToggle);
  placeElement.querySelector('.place__image').addEventListener('click', showImagePopup);
}

function showImagePopup(evt) {
  evt.preventDefault();

  const image = evt.target.closest('.place__image');
  viewImage.src = image.src;

  popupToggle(viewPopup);
}

// функция добавления данных из массива в template карточки
function renderItem(initialCards) {
  const placeElement = placeTemplateContent.cloneNode(true);
  const placeTitleElement = placeElement.querySelector('.place__title');
  const placeImgElement = placeElement.querySelector('.place__image');

  placeTitleElement.textContent = initialCards.name;
  placeImgElement.src = initialCards.link;

  setEventListener(placeElement);

  placesContainer.append(placeElement);
}

// функция отображения всех карточек из массива
function renderItems(items) {
  items.forEach(renderItem);
}

renderItems(initialCards);

// функция toggler открытия popup
function popupToggle(selectedPopup) {
  selectedPopup.classList.toggle('popup_opened');
}

// функция удаления карточки place
function handleDel(evt) {
  const itemElement = evt.target.closest('.place');
  itemElement.remove();
}

// функция нажатия на кнопку likeBtn
function likeToggle(evt) {
  const likeBtn = evt.target.closest('.place__like');
  likeBtn.classList.toggle('place__like_type_active');
}

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupToggle(popup);
}

editBtn.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popupToggle(popup);
})

closeBtnEditPopup.addEventListener('click', () => (popupToggle(popup)));
formPopupEdit.addEventListener('submit', formSubmitHandler);
newItemBtn.addEventListener('click', () => (popupToggle(popupAddCard)));
closeBtnNewItemPopup.addEventListener('click', () => (popupToggle(popupAddCard)));

// функция добавления новой карточки
function handleCardSubmit(titleValue, imgValue) {
  const placeTemplate = document.querySelector('.place-template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__title').textContent = titleValue;
  placeElement.querySelector('.place__image').src = imgValue;

  setEventListener(placeElement);

  placesContainer.prepend(placeElement);
}

// добавление новой карточки по клику на кнопку создать
formPopupAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const title = document.querySelector('.popup__input_type_title');
  const img = document.querySelector('.popup__input_type_url');

  handleCardSubmit(title.value, img.value);

  title.value = '';
  img.value = '';

  popupToggle(popupAddCard);
});
