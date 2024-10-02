import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logos/LOGO_Keizen_Whatsapp.jpg";
import './Header.css';

function Header() {
  return (
    <>
      <div className="header-container">
        <Link to="/home" className="logo">
          <img src={logo} alt="logo" width='100px' />
        </Link>

        <div className="links-container">
          <Link className="link" to="/about">Quem somos</Link>
          <Link className="link" to="/staff">Nossa Equipe</Link>
          <Link className="link" to="/services">Nossos Serviços</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
