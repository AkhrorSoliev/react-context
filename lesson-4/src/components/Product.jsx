import { FaShoppingCart } from "react-icons/fa";

function Product({ product }) {
  const itemInCart = false;
  return (
    <div className="card">
      <img className="card__image" src={product.image} alt="" width={50} />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">Price: ${product.price}</small>
      </div>
      {!itemInCart && (
        <button className="btn card__btn">
          <FaShoppingCart className="icon" /> Add
        </button>
      )}
      {itemInCart && (
        <div className="card-action-btns">
          <button className="btn card__btn__amount">&#8722;</button>
          <span className="amount">1</span>
          <button className="btn card__btn__amount">&#43;</button>
        </div>
      )}
    </div>
  );
}

export default Product;
