import { useState } from "react";

const Cart = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="create">
      <form>
      <label for="cars">Forma de pagamento:</label>

        <select name="cars" id="cars">
            <option value="volvo">Crédito</option>
            <option value="saab">Débito</option>
            <option value="mercedes">Pix</option>
        </select>
        <label>Frete:</label>
        <input 
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <button>Comprar</button>
      </form>
    </div>
  );
}
 
export default Cart;