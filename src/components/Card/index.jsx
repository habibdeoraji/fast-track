import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { name, fullImage, price } = props.item;
  const display_price = price[0].value;
  const offer_price = price[1].value;
  const discount_price = Math.round((1 - offer_price / display_price) * 100);
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={fullImage} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          &#8377;{offer_price}{" "}
          {discount_price > 0 ? (
            <span>
              <span className={styles.display_price}>
                &#8377; <s> {display_price} </s>
              </span>
              <span className={styles.discount_percentage}>
                ({discount_price}%)
              </span>{" "}
            </span>
          ) : (
            ""
          )}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => props.addProduct(props.item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
