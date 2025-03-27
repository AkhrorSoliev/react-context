import { useFetch } from "../hooks/useFetch";
import ProductsList from "../components/ProductsList";

function Home() {
  const { data, error, isPending } = useFetch(
    "https://json-api.uz/api/project/products-e/products"
  );
  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h3 className="loader">Loading...</h3>}
        {data && <ProductsList products={data.data} />}
      </div>
    </section>
  );
}

export default Home;
