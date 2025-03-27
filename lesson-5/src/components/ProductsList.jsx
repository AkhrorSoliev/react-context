import Product from "./Product";

function ProductsList({ products }) {
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product List: </p>
        <div>
          <span className="card-container__price">Total Price: $130</span>
          <button className="btn card-container__btn">Clear</button>
        </div>
      </div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
