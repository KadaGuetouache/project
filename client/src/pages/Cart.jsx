import React from "react";
import Layout from "../components/Layout";
import SingleProduct from "../components/SingleProduct";
import "../styles/cart.scss";

const Cart = () => {
  return (
    <Layout>
      <div className="cart-container">
        <h2>Your Bag</h2>
        <div className="checklist">
          <div className="product-list">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
          <aside>
            <h3>Order Summry</h3>
            <div className="summary-subtotal">
              <p>Subtotal</p>
              <p>$1000</p>
            </div>
            <div className="summary-estimate-shipping">
              <p>Estimate Shipping</p>
              <p>$150</p>
            </div>
            <div className="summary-shipping-discount">
              <p>Shipping Discount</p>
              <p>$50</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>$1250</p>
            </div>
            <button className="checkout">Checkout</button>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
