import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logos/LOGO_Keizen_Whatsapp.jpg";
// import './Header.css';

function Header() {
  return (
    <>
      <div className="flex mb-6">
        <Link to="/home" className="flex">
          <img className="w-32 rounded-full hover:drop-shadow-[0_0px_15px_whitesmoke]=" src={logo} alt="logo" width='100px' />
        </Link>

        <div className="w-full h-auto flex justify-around items-center">
          <Link className="hover:text-aquamarine hover:text-lg" to="/about">Quem somos</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/staff">Nossa Equipe</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/services">Nossos Serviços</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
