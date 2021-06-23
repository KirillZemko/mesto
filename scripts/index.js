const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.edit-button');
const closeBtnEditPopup = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const likeButtons = document.querySelectorAll('.place__like');
const popupAddCard = document.querySelector('.popup__add-card');
const closeBtnNewItemPopup = document.querySelector('.popup__close-button_type_add-card');
const newItemBtn = document.querySelector('.add-button');
const cardTitle = document.querySelector('.popup__input_type_title');
const cardUrl = document.querySelector('.popup__input_type_url');

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

const placesContainer = document.querySelector('.places');
const addButton = document.querySelector('.popup__button_type-add-card');

// функция добавления заголовка и изображения новой карточки
function addPlace(titleValue, imgValue) {
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__title').textContent = titleValue;
  placeElement.querySelector('.place__image').src = imgValue;

  placesContainer.append(placeElement);
}

// обработчик события добавления новой карточки
addButton.addEventListener('click', function() {
  const title = document.querySelector('.popup__input_type_title');
  const img = document.querySelector('.popup__input_type_url');

  addPlace(title.value, img.value);
  closeNewItemPopup();

  title.value = '';
  img.value = '';
});

//  функция открытия editPopup
function editPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popup.classList.add('popup_opened');
}

// функция закрытия editPopup
function closeEditPopup() {
  popup.classList.remove('popup_opened');
}

//  функция открытия editPopup
function newItemPopup() {
  popupAddCard.classList.add('popup__add-card_opened');
}

//  функция закрытия editPopup
function closeNewItemPopup(evt) {
  popupAddCard.classList.remove('popup__add-card_opened');
}

// лайк карточки
function likeButtonToggler(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function() {
      arr[i].classList.toggle('place__like_type_active');
    })
  }
}

likeButtonToggler(likeButtons);

// функция изменяет значения введенных пользователем в input-ы и изменяет profileName, profileJob
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closeEditPopup();
}

editBtn.addEventListener('click', editPopup);
closeBtnEditPopup.addEventListener('click', closeEditPopup);
formElement.addEventListener('submit', formSubmitHandler);
newItemBtn.addEventListener('click', newItemPopup);
closeBtnNewItemPopup.addEventListener('click', closeNewItemPopup);
