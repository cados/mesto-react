import React from "react";

function Card(props) {
  const [liked, setLiked] = React.useState(false);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function likeClick() {
    setLiked(!liked);
  }
  return (
    <>
      <li className="card">
        <button className="card__trash" type="button"></button>
        <img
          className="card__images"
          onClick={handleClick}
          src={props.card.link}
          alt={props.card.name}
        />
        <div className="card__item">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__wrap">
            <button
              className={`card__like ${liked && "card__like_active"}`}
              onClick={likeClick}
              type="button"
            ></button>
            <div className="card__count">{props.likeCounter}</div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
