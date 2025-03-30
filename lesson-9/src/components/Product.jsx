import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ product }) {
  const { dispatch, cart } = useGlobalContext();
  const itemInCart = cart.find((item) => item.id == product.id);
  return (
    <div className="card">
      <img className="card__image" src={product.image} alt="" width={50} />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">Price: ${product.price}</small>
      </div>
      {!itemInCart && (
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, amount: 1 },
            })
          }
          className="btn card__btn"
        >
          <FaShoppingCart className="icon" /> Add
        </button>
      )}
      {itemInCart && (
        <div className="card-action-btns">
          <button
            onClick={() => {
              if (itemInCart.amount == 1) {
                dispatch({ type: "DELETE", payload: product.id });
              } else {
                dispatch({ type: "DECREASE", payload: product.id });
              }
            }}
            className="btn card__btn__amount"
          >
            &#8722;
          </button>
          <span className="amount">{itemInCart.amount}</span>
          <button
            onClick={() =>
              dispatch({
                type: "INCREASE",
                payload: product.id,
              })
            }
            className="btn card__btn__amount"
          >
            &#43;
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
