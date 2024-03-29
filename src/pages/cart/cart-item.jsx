import React from "react";

const CartItem = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p> ${price} </p>
      </div>
    </div>
  );
};

export default CartItem;
