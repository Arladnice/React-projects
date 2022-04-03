import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

function Card({
  addToFavorite,
  addToCart,
  id,
  imageUrl,
  title,
  price,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    addToCart({ id, title, price, imageUrl });
  };

  const onClickFavorite = () => {
    addToFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={170}
          height={260}
          viewBox="0 0 155 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="1" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="108" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="136" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="172" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="166" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              alt="Unliked"
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              onClick={onClickFavorite}
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
