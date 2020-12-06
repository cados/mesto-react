import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpenClose] = React.useState(
    false
  );
  const [isAddCardPopupOpen, setAddCardPopupOpenClose] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpenClose] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditProfileClick() {
    setEditProfilePopupOpenClose(true);
  }
  function handleAddPlaceClick() {
    setAddCardPopupOpenClose(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpenClose(true);
  }

  function handleImagePopupOpen(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpenClose(false);
    setAddCardPopupOpenClose(false);
    setEditAvatarPopupOpenClose(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <>
      <Header />
      <Main
        onCardClick={handleImagePopupOpen}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="form"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name"
            id="profile-name"
            type="text"
            name="name"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error" id="profile-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_prof"
            id="profile-prof"
            type="text"
            name="about"
            placeholder="Ваша профессия"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error" id="profile-prof-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="image_add"
        title="Новое место"
        submitText="Создать"
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name-image"
            id="image-name-input"
            type="text"
            name="name"
            placeholder="Название"
            minLength="1"
            maxLength="30"
            required
          />
          <span
            className="popup__input-error"
            id="image-name-input-error"
          ></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_prof-link"
            id="image-source-input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__input-error"
            id="image-source-input-error"
          ></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="avatar_add"
        title="Обновить аватар"
        submitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar-link"
            id="avatar-source-input"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__input-error"
            id="avatar-source-input-error"
          ></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        submitText="Да"
        //isOpen={isСonfirmPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
    </>
  );
}

export default App;
