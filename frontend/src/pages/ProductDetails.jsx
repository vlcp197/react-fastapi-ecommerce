import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../components/useFetch";
import { useState } from "react";


const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch('http://localhost:3000/products/' + id);

  const [quantity, setQuantity] = useState(0); 

  const navigate = useNavigate();

  return (
    <div className="product-details">
      {isPending && <div>Carregando...</div>}
      {error && <div>{error}</div>}
      {product && (
        <article>
          <img className="img-detail" src={`../${product.img}`} alt="img" />
          <br />
          <div style={{display: "flex", gap: "200px", alignItems: "baseline"}}>
              <div style={{display: "flex", gap: "20px", alignItems: "baseline"}}>
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
              </div>
              <button>Adicionar ao carrinho</button>
          </div>
          <br />
          <h2>{product.title}</h2>
          <p>R$ {product.price}</p>
          <div>{product.body}</div>
        </article>
      )}

    </div>
  );
}

export default ProductDetails;