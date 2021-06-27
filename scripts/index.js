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
const formCardSubmit = document.querySelector('.popup__form_type_add-card');
const placesContainer = document.querySelector('.places');
const placeTemplateContent = document.querySelector('#place-template').content;
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_url');
const submitBtn = document.querySelector('.popup__button_type-add-card');

// функция добавляет addEventListener на кнопку удаления
function setEventListener(placeElement) {
  placeElement.querySelector('.place__trash-btn').addEventListener('click', handleDel);
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

formCardSubmit.addEventListener('submit', evt => {
  evt.preventDefault();
  handleSubmit();

  console.log('submit');
});

// функция toggler открытия popup
function popupToggle(selectedPopup) {
  selectedPopup.classList.toggle('popup_opened');
}

// функция закрытия editPopup
function closeEditPopup() {
  popup.classList.remove('popup_opened');
}

//  функция закрытия editPopup
function closeNewItemPopup() {
  popupAddCard.classList.remove('popup_opened');
}

// функция удаления карточки place
function handleDel(evt) {
  const itemElement = evt.target.closest('.place');
  itemElement.remove();
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

editBtn.addEventListener('click', () => (popupToggle(popup)));
closeBtnEditPopup.addEventListener('click', closeEditPopup);
formElement.addEventListener('submit', formSubmitHandler);
newItemBtn.addEventListener('click', () => (popupToggle(popupAddCard)));
closeBtnNewItemPopup.addEventListener('click', closeNewItemPopup);

// функция отображения карточек из массива
// function renderCards(arr) {
//   arr.forEach(element => {
//     const placeTemplate = document.querySelector('#place-template').content; // выбираем шаблон и записываем содержимое в переменную placeTemplate
//     const placeElement = placeTemplate.querySelector('.place').cloneNode(true); // клонируем содержимое шаблона в переменную placeElement, чтобы создать новую карточку

//     // наполняем содержимым
//     placeElement.querySelector('.place__title').textContent = element.name;
//     placeElement.querySelector('.place__image').src = element.link;

//     // placeElement.querySelector('.place__like').addEventListener('click', function(evt) {
//     //   evt.target.classList.toggle('place__like_type_active');
//     // })

//     placesContainer.append(placeElement); // добавляем в placesContainer элемент placeElement
//   });
// }

// renderCards(initialCards);

// function like(arr) {
//   arr.addEventListener('click', function(evt) {
//     evt.target.classList.toggle('place__like_type_active');
//   })
// }

// like(initialCards);

// функция добавления новой карточки
// function addPlace(titleValue, imgValue) {
//   const placeTemplate = document.querySelector('#place-template').content;
//   const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

//   placeElement.querySelector('.place__title').textContent = titleValue;
//   placeElement.querySelector('.place__image').src = imgValue;

//   placesContainer.prepend(placeElement);
// }

// исправить на событие submit
// addBtn.addEventListener('click', function(evt) {
//   evt.preventDefault();

//   const title = document.querySelector('.popup__input_type_title');
//   const img = document.querySelector('.popup__input_type_url');

//   addPlace(title.value, img.value);
//   closeNewItemPopup();

//   title.value = '';
//   img.value = '';
// });
