import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logos/LOGO_Keizen_Whatsapp.jpg";
// import './Header.css';

function Header() {
  const [isOPen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOPen);
  };

  return (
    <>
      <div className="flex mb-6 justify-between">
        <Link to="/home" className="flex">
          <img className="w-32 rounded-full hover:drop-shadow-[0_0px_15px_whitesmoke]" src={logo} alt="logo" width='100px' />
        </Link>

        <div className="hidden md:flex w-full h-auto justify-around items-center">
          <Link className="hover:text-aquamarine hover:text-lg" to="/about">Quem somos</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/staff">Nossa Equipe</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/services">Nossos Serviços</Link>
        </div>

        <div className="md:hidden justify-items-end flex items-center">
          <button onClick={toggleMenu} className="pb-1 pt-2 px-3 mx-auto rounded-xl text-black text-3xl bg-whitesmoke hover:bg-aquamarine">
            {isOPen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {isOPen && (
        <div className="md:hidden mx-auto bg-whitesmoke text-black flex flex-col items-start justify-center p-3">
          <Link className="hover:text-aquamarine hover:text-lg" to="/about">Quem somos</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/staff">Nossa Equipe</Link>
          <Link className="hover:text-aquamarine hover:text-lg" to="/services">Nossos Serviços</Link>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default Header;
