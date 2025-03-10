import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="links">
        <Link to="/">Sobre</Link>
        <Link to="/">Contato</Link>
      </div>

      <div>Padilha Perfumes - {new Date().getFullYear()}</div>
    </nav>
  );
}

export default Footer;