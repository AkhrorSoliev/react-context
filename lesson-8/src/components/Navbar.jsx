import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { totalAmount, cart, dispatch } = useContext(GlobalContext);
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="header__card">
            <span className="header__card__indicator">{totalAmount}</span>
            <FaShoppingCart />
            <div className="hidden-card">
              {cart.length > 0 ? (
                cart.map((item) => {
                  const { id, title, price, amount, image } = item;
                  return (
                    <div className="hidden-card__item">
                      <img
                        src={image}
                        alt="product"
                        width={30}
                        className="hidden-card__item-img"
                      />
                      <div className="hidden-card__item-info">
                        <h4 className="hidden-card__title">{title}</h4>
                        <h4 className="hidden-card__price">Price: ${price}</h4>
                        <p className="hidden-card__amount">
                          {amount}x ${price * amount}
                          <span className="hidden-card__amount-price"></span>
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DELETE",
                            payload: id,
                          })
                        }
                        className="btn hidden-card__remove-btn"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="hidden__card__info">Cart is empty</p>
              )}
              {cart.length > 0 && (
                <div className="hidden-card__card-footer">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "CLEAR_CART",
                      })
                    }
                    className="hidden-card__clear-btn"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
