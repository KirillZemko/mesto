let userId;

import '../pages/index.css';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import PopupDelete from '../components/PopupDelete.js';
import {
  mainConfigValidation,
  editBtn,
  formPopupEdit,
  nameInput,
  jobInput,
  formPopupAddCard,
  newItemBtn,
  viewImage,
  viewPopupAlt,
  profileData,
  popupEditAvavat,
  buttonEditAvatar,
  popupConfirm
} from '../utils/constants.js';

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '7a42bcdf-9e77-420b-bf78-ff8f38c4a370',
    'Content-type': 'application/json',
  }
});

const userInfo = new UserInfo(profileData);
const popupDelete = new PopupDelete('.popup_conformation', (evt, card) => {
  deleteConfirm(evt, card);
});

function deleteConfirm(evt, newCard) {
  console.log(newCard.getItemId());
  console.log(evt);

  api.removeCard(newCard.getItemId())
    .then(() => {
      // newCard.removeCard();
      popupDelete.close();
    })
    .catch((err) => {
      console.log(err);
  });
}

Promise.all([api.getOriginsCards(), api.getUserInfo()])
  .then(([data, item]) => {
    console.log(item);
    console.log(data);

    userInfo.setUserInfo(item);
    userId = item._id;

    cardList.renderItems(data);
  })
  .catch((err) => {
    console.log(err)
});

const newAvatar = new PopupWithForm(
  '.popup_edit-avatar',
  (item) => {
    newAvatar.renderLoading(true);
    console.log(item);

    api.editUserAvatar(item.link)
     .then((res)=>{
      console.log(res);

      userInfo.setUserInfo(res);
      newAvatar.close();
    })
     .finally(()=>{
      newAvatar.renderLoading(false);
    })
  }
)

buttonEditAvatar.addEventListener('click', () => {
  newAvatar.open();
});

// создаем экземпляры карточек класса Section
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item, '.place-template');
    const cardElement = card.generatePlaceCard();
    cardList.addItem(cardElement);
    }
  },
  '.places'
);

function createCard(item, template) {
  const card = new Card(item, '.place-template', {
    handelCardClick: (name, link) => {
      popupWithImg.open(name, link);
    },
    deleteCard: () => {
      popupDelete.open(card);
    },
    likeCard: () => {
      const likedCard = card.likedCard();
      console.log(likedCard);

      const result = likedCard ? api.dislikeCard(card.getItemId()) : api.likeCard(card.getItemId());
      result
       .then(data => {
        card.setLikes(data.likes);
        card.renderLikes();

      })
       .catch((err) => {
        console.log(err);
      })
    }
  }, userId, item._id);

  return card;
}

const newCard = new PopupWithForm(
  '.popup_add-card',
  (item) => {
    console.log(item);
    newCard.renderLoading(true);
    api.addNewCard(item)
     .then(item => {
       console.log(item);
       const newCards = createCard(item, '.place-template');
       const newAddedCard = newCards.generatePlaceCard();
       cardList.addItem(newAddedCard);
     })
      .finally(() => {
        newCard.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
});

const popupWithImg = new PopupWithImage('.popup_type_view', viewPopupAlt, viewImage);

const popupProfile = new PopupWithForm(
  '.popup_edit',
  (item) => {
    popupProfile.renderLoading(true);
    api.postUserInfo(item)
     .then(() => {
        console.log(item);

        userInfo.setUserInfo(item);
        popupProfile.close();
      })
      .finally(()=>{
        popupProfile.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }
);

// функция открывает открывает попап редактирования профиля
editBtn.addEventListener('click', () => {
  popupProfile.open();
  formPopupEditValidator.resetValidation();

  const profileInfo = userInfo.getUserInfo();

  nameInput.value = profileInfo.title;
  jobInput.value = profileInfo.subtitle;
});

newItemBtn.addEventListener('click', () => {
  formPopupAddCardValidator.resetValidation();
  newCard.open();
});

// создаем переменные popup-ов при помощи класса FormValidator
const formPopupEditValidator = new FormValidator(mainConfigValidation, formPopupEdit);
const formPopupAddCardValidator = new FormValidator(mainConfigValidation, formPopupAddCard);
const formPopupEditAvatarValidator = new FormValidator(mainConfigValidation, popupEditAvavat);

// включаем валидацию форм попапов при помощи публичного метода enableValidation класса FormValidator
formPopupEditValidator.enableValidation();
formPopupAddCardValidator.enableValidation();
formPopupEditAvatarValidator.enableValidation();

newCard.setEventListeners();
popupWithImg.setEventListeners();
popupProfile.setEventListeners();
newAvatar.setEventListeners();
popupDelete.setEventListeners();
