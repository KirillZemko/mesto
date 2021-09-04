export class Card {
  constructor(data, cardSelector, { handelCardClick, deleteCard, likeCard }, userId, cardId) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handelCardClick = handelCardClick;
    this._userId = userId;
    this._cardId = cardId;
    this._likeCard = likeCard;
    this._deleteCard = deleteCard;
    this._counterLikes = data.likes;
  }

  // получаем макет из DOM дерева
  _getPlaceTemplate() {
    const placeElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return placeElement;
  }

  _togglerLikeBtn() {
    this._element.querySelector('.place__like').classList.toggle('place__like_type_active');
  }

  _handelDel() {
    this._element.remove();
  }

  // обработчик событий
  _setEventListener() {
    this._element.querySelector('.place__like').addEventListener('click', () => {
      // this._togglerLikeBtn();
      this._likeCard();
    });

    // this.placesLikeButton.addEventListener('click', () => {
    //   // const evtTarget = evt.target
    //   // evtTarget.classList.toggle('places__like-button_active')
    //   this._likeCard();
    // })

    // this.placesDeleteButton.addEventListener('click', () => {
    //   this._deleteCard();
    // });


    this._element.querySelector('.place__trash-btn').addEventListener('click', () => {
      this._handelDel();
    });
    this._element.querySelector('.place__image').addEventListener('click', (evt) => {
      evt.preventDefault();

      this._handelCardClick(this._name, this._link);
    });
  }

  // подготовка карточки к публикации
  generatePlaceCard() {
    // записываем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
    this._element = this._getPlaceTemplate();
    this._setEventListener();

    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__image').alt = this._name;
    this._element.querySelector('.place__title').textContent = this._name;
    this.placesLikeButton = this._element.querySelector('.place__like');
    this._likes = this._element.querySelector('.place__like-counter');

    this.renderLikes();

    return this._element;
  }

  getItemId(){
    return this._cardId;
  }

  renderLikes(){
    this._likes.textContent = this._counterLikes.length;
    this.showLikes(this._ownerId);
  }

  likedCard() {
    return this._counterLikes.some(like => {
      return like._id === this._userId;
    })
  }

  showLikes() {
    if (this.likedCard(this._userId)) {
      this.placesLikeButton.classList.add('place__like-type_active');
    } else {
      this.placesLikeButton.classList.remove('place__like-type_active');
    }
  }

  setLikes(list) {
    this._counterLikes = list;
  }
}
