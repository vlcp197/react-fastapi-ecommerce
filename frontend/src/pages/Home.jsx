import ProductList from "../pages/ProductList";
import useFetch from "../components/useFetch";

const Home = () => {
  const { error, isPending, data: products } = useFetch('http://localhost:3000/products')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Carregando...</div> }
      { products && <ProductList products={products} /> }
    </div>
  );
}
 
export default Home;
