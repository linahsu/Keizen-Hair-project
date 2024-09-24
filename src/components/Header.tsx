import { Link, Outlet } from "react-router-dom";
import logo from "../assets/LOGO_Keizen_Whatsapp.jpg";

function Header() {
  return (
    <>
        <Link to="/home">
          <img src={logo} alt="logo" width='100px'/>
        </Link>

      <div>
        <Link to="/about">Quem somos</Link>
        <Link to="/staff">Nossa Equipe</Link>
        <Link to="/services">Nossos Serviços</Link>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
