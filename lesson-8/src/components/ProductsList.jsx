import Product from "./Product";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ProductsList({ products }) {
  const { totalPrice, dispatch } = useContext(GlobalContext);
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product List: </p>
        <div>
          <span className="card-container__price">
            Total Price: ${totalPrice}
          </span>
          <button
            onClick={() =>
              dispatch({
                type: "CLEAR",
              })
            }
            className="btn card-container__btn"
          >
            Clear
          </button>
        </div>
      </div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
