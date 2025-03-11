import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Crud() {
    const limitWords = (text, maxWords) => {
        const words = text.split(" ");
        const truncatedWords = words.slice(0, maxWords);
        const truncatedText = truncatedWords.join(" ");
        return words.length > maxWords ? `${truncatedText}...` : truncatedText;
    };

    
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user"); 
        navigate("/login"); 
      };

    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
            setColumns(Object.keys(res.data[0]));
            setRecords(res.data)
        })
    }, []);


    const handleDeleteClick = (event) => {
        fetch('http://localhost:3000/products/' + event.target.id, {
          method: 'DELETE'
        }).then(() => {
            setRecords(records.filter(record => record.id !== event.target.id))
        });
      }
    

    return (
        <div className="container mt-5">
            <div style={{display:"flex", gap: "470px"}}>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
                <div className="text-end"><Link to="/create" className="btn btn-primary">Adicionar</Link></div>

            </div>
            <table className="table"> 
                <thead>
                    <tr>
                    {columns.map((c, i) => (
                        <th key={i}>{c}</th>
                    ))}
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{limitWords(d.body,20)}</td>
                            <td><img style={{width:"150px", height:"auto", objectFit:"cover"}} src={d.img}  /></td>
                            <td>R$ {d.price}</td>
                            <td style={{display: "flex"}}>
                                <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Atualizar</Link>
                                <button id={d.id} className="btn btn-sm ms-1 btn-danger" onClick={handleDeleteClick}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
