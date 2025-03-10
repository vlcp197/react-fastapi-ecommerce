import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <Link to="/" ><h1>Padilha Perfumes</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/carrinho" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Carrinho</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;