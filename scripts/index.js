const popups = document.querySelectorAll('.popup');

// переменные профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// переменные popupEdit
const popupEdit = document.querySelector('.popup_edit');
const editBtn = document.querySelector('.edit-button');
const closeBtnEditPopup = popupEdit.querySelector('.popup__close-button');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// переменные popupAddCard
const popupAddCard = document.querySelector('.popup_add-card');
const closeBtnNewItemPopup = document.querySelector('.popup__close-button_type_add-card');
const formPopupAddCard = document.querySelector('.popup__form_type_add-card');
const newItemBtn = document.querySelector('.add-button');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_url');
const createCardBtn = document.querySelector('.popup__button_type-add-card');

// переменные viewPopup
const viewPopup = document.querySelector('.popup_type_view');
const viewPopupContainer = document.querySelector('.popup__container_type_image');
const viewImage = document.querySelector('.popup__image');
const viewPopupAlt = document.querySelector('.popup__description');
const closeBtnViewPopup = document.querySelector('.popup__close-button_type_view');
closeBtnViewPopup.addEventListener('click', () => (togglePopup(viewPopup)));

// переменные place-template
const placesContainer = document.querySelector('.places');
const placeTemplateContent = document.querySelector('.place-template').content;

// функция добавляет слушатель события клика addEventListener на элементы: удалить, like, card-image
function setEventListener(placeElement) {
  placeElement.querySelector('.place__trash-btn').addEventListener('click', handleDel);
  placeElement.querySelector('.place__like').addEventListener('click', togglerLikeBtn);
  placeElement.querySelector('.place__image').addEventListener('click', showImagePopup);
}

// функция toggler открытия popup
function togglePopup(selectedPopup) {
  selectedPopup.classList.toggle('popup_opened');
}

// функция отображения view-popup
function showImagePopup(evt) {
  evt.preventDefault();

  const image = evt.target.closest('.place__image');

  viewImage.src = image.src;
  viewImage.alt = image.alt;

  viewPopupAlt.textContent = image.alt;

  viewPopupContainer.append(viewPopupAlt);

  togglePopup(viewPopup);
}

// функция создания карточки из place-template
function createCard(nameValue, imgValue) {
  const placeElement = placeTemplateContent.cloneNode(true);
  const placeTitleElement = placeElement.querySelector('.place__title');
  const placeImgElement = placeElement.querySelector('.place__image');

  placeTitleElement.textContent = nameValue;
  placeImgElement.src = imgValue;
  placeImgElement.alt = nameValue;

  setEventListener(placeElement);

  return placeElement;
}

// функция добавления данных из массива в template карточки
function renderItem(initialCards) {
  placesContainer.append(createCard(initialCards.name, initialCards.link));
}

// функция отображения всех карточек из массива
function renderItems(items) {
  items.forEach(renderItem);
}

renderItems(initialCards);

// функция удаления карточки place
function handleDel(evt) {
  const itemElement = evt.target.closest('.place');
  itemElement.remove();
}

// функция нажатия на кнопку likeBtn
function togglerLikeBtn(evt) {
  const likeBtn = evt.target.closest('.place__like');
  likeBtn.classList.toggle('place__like_type_active');
}

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    togglePopup(popupEdit);
}

editBtn.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  togglePopup(popupEdit);
})

closeBtnEditPopup.addEventListener('click', () => (togglePopup(popupEdit)));
formPopupEdit.addEventListener('submit', handleProfileFormSubmit);
newItemBtn.addEventListener('click', () => (togglePopup(popupAddCard)));
closeBtnNewItemPopup.addEventListener('click', () => (togglePopup(popupAddCard)));

// добавление новой карточки по клику на кнопку создать
formPopupAddCard.addEventListener('submit', function(evt) {
  evt.preventDefault();

  placesContainer.prepend(createCard(titleInput.value, linkInput.value));

  formPopupAddCard.reset();

  togglePopup(popupAddCard);
});

// слушатель закрытия любого popup по клику на overlay
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      togglePopup(popup);
    }
  })
})
