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
      <div className="flex justify-end">
        <div className="
          absolute md:relative z-30 
          w-[90%]
          flex justify-between
          mb-6 
          "
        >
          <Link to="/home" className="flex">
            <img className="w-32 rounded-full hover:drop-shadow-[0_0px_15px_whitesmoke]" src={logo} alt="logo" width='100px' />
          </Link>

          <div className="
            hidden md:flex 
            w-full h-auto 
            justify-around items-center
            "
          >
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
          <div className="
            md:hidden
            absolute md:relative z-30 
            mx-auto mt-[100px]
            p-3
            rounded-xl
            bg-whitesmoke 
            text-black 
            flex flex-col items-start justify-center 
            "
          >
            <Link className="hover:font-bold" to="/about">Quem somos</Link>
            <Link className="hover:font-bold" to="/staff">Nossa Equipe</Link>
            <Link className="hover:font-bold" to="/services">Nossos Serviços</Link>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default Header;
