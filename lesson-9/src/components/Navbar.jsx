import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { totalAmount, cart, dispatch } = useGlobalContext();
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
                    <div key={id} className="hidden-card__item">
                      <img
                        src={image}
                        alt={title}
                        width={30}
                        className="hidden-card__item-img"
                      />
                      <div className="hidden-card__item-info">
                        <h4 className="hidden-card__title">{title}</h4>
                        <h3 className="hidden-card__price">Price: ${price}</h3>
                        <p className="hidden-card__price ">
                          {amount}x ${price * amount}
                        </p>
                      </div>
                      <button
                        className="btn hidden-card__remove-btn"
                        onClick={() =>
                          dispatch({ type: "DELETE", payload: id })
                        }
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
                    onClick={() => dispatch({ type: "CLEAR" })}
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
