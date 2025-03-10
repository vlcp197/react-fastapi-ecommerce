import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  
  return (
    <div className="card">
      <Link to={`/produtos/${props.id}`}> 
      <img  src={props.img ? props.img : "404" } alt="" />
        <h2>{props.title}</h2>
        <h2>R$ {props.price}</h2>
        <p>{props.desc}</p>
        <button>Ver Produto</button>
      </Link>
    </div>
  );
};

export default Card


 