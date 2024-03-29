import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./cart-item";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Item </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
