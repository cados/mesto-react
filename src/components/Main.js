import React from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((result) => {
        const [userData, cardList] = result;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardList);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="profile">
        <div className="profile__item">
          <div className="profile__item-container">
            <img
              onClick={props.onEditAvatar}
              src={userAvatar}
              alt="Фото профиля"
              className="profile__avatar"
            />
          </div>
          <div className="profile_text">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfile}
                type="button"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddCard}
          type="button"
        ></button>
      </section>
      <section className="elements">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              likeCounter={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
