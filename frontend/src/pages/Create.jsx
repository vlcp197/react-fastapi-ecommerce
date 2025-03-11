import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {title, body, price, img};

    setIsPending(true);

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    });
  }


  return (
    <div className="create">
      <h2>Adicionar novo produto </h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do perfume:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Texto do perfume:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Preço:</label>
        <input 
          type="text" 
          required 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          />
        <label>Imagem do produto:</label>
        <input 
          type="file" 
          onChange={(e) => setImg(e.target.files[0].name)}
        />
        { !isPending && <button>Adicionar perfume</button> }
        { isPending && <button disabled >Adicionando produto...</button> }
      </form>
    </div>
  );
}
 
export default Create;