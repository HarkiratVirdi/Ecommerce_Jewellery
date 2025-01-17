import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../actions/cartActions";

const Cart = ({ CartDisplay, setCartDisplay }) => {
  let cart = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const userLogin = useSelector((state) => state.userLogin);
  const { cartItems } = cartState;

  const { userInfo } = userLogin;

  useEffect(() => {
    const runAnimation = () => {
      if (CartDisplay) {
        gsap.to(cart.current, {
          duration: 0.7,
          ease: "power2.inOut",
          clipPath: "inset(0 0 0% 0)",
        });
      } else {
        gsap.to(cart.current, {
          duration: 0.7,
          ease: "power3.inOut",
          clipPath: "inset(0 0 100% 0)",
        });
      }
    };
    runAnimation();
  }, [CartDisplay]);

  useEffect(() => {}, [quantity, dispatch]);

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div ref={cart} className="cart">
      <div className="cart_container_80 container-80">
        <h1 className="cart__heading heading-3--black heading-3">Cart</h1>
        <div
          onClick={() => setCartDisplay((prev) => !prev)}
          className={`cart__cross ${CartDisplay ? "cross__display" : ""}`}
        >
          x
        </div>

        <div className="cart__container">
          <div className="cart__items">
            {cartItems.length > 0 ? (
              cartItems.map((cartitem, index) => {
                return (
                  <div className="cartitems" key={index}>
                    <div className="cartitems__image">
                      <img src={cartitem.image} alt={cartitem.name} />
                    </div>
                    <div className="cartitems__content">
                      <div className="cartitems__name heading-5 ">
                        {cartitem.name} / ${cartitem.price}
                      </div>
                      <div className="cartitems__qty">
                        <select
                          className="cartitems_drawer"
                          onChange={(e) =>
                            dispatch(
                              addToCart(
                                cartitem.product,
                                Number(e.target.value)
                              )
                            )
                          }
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                      <div
                        className="heading-5 underline pointer"
                        onClick={() => removeItem(cartitem.product)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="heading-3 heading-3--black">Cart is Empty</div>
            )}
          </div>
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <h3 className="heading-4 heading-4--white">
            Total/$
            {cartItems.length
              ? cartItems
                  .reduce((acc, item) => {
                    return acc + item.qty * item.price;
                  }, 0)
                  .toFixed(2)
              : "0"}
          </h3>
        </div>
        <div className="cart__options">
          <Button
            linkTo={userInfo ? "/shipping" : "/login"}
            disable={cartItems.length === 0}
            styling="btn--white"
            onClick={() => setCartDisplay((prev) => !prev)}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
