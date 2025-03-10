import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


export default function Update(){
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
      axios.get('http://localhost:3000/products/'+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])


    function handleSubmit(event){
      event.preventDefault()
      axios.put('http://localhost:3000/products/'+id, data)
      .then(res =>{
        alert("Produto atualizado com sucesso!");
        navigate("/")
      })
    }

    function handleFileChange(e){

    }

    return (
        <div className="create">
          <h2>Atualizar Produto </h2>
          <form onSubmit={handleSubmit} >
            <label htmlFor="name">Nome do perfume:</label>
            <input 
              type="text"
              name="name" 
              defaultValue={data.title}
              onChange={e=>setData({...data, title: e.target.value})}        
              />
            <label htmlFor="body">Texto do perfume:</label>
            <textarea
              name="body"
              required
              value={data.body}
              onChange={e=>setData({...data, body: e.target.value})}        
              ></textarea>
            <label htmlFor="price">Preço:</label>
            <input 
              type="text"
              name="price" 
              required 
              value={data.price}
              onChange={e=>setData({...data, price: e.target.value})}        
              />
            <label htmlFor="image">Imagem do produto:</label>
            <input 
              name="image"
              type="file" 
              onChange={e=>setData({...data, img: e.target.files[0].name})}        
            />
            
            <button className="btn btn-info">Atualizar</button>
          </form>
        </div>
      );
    }