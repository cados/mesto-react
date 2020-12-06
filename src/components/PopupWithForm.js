import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup__container ${props.isOpen && "popup_opened"}`}>
      <form className="popup__form" name={props.name} noValidate>
        <button
          className="popup__close-button"
          onClick={props.onClose}
          type="button"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__button" type="submit" disabled>
          {props.submitText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
