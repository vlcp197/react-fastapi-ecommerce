import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    


    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin"){
            localStorage.setItem("user", JSON.stringify({ username }));
            navigate("/admin");
        } else {
            setError("Usuário ou senha inválidos")
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                <label htmlFor="login">Usuário:</label>
                <br />
                <input
                    name="login"
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                </div>
                <div>
                <label htmlFor="password">Senha:</label>
                <br />
                <input 
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}    
                />
                <br />
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;