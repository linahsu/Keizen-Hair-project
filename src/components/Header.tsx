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
          m-6 md:m-0
          w-[90%] md:w-full
          flex justify-between
          mb-6 
          "
        >
          <Link to="/home" className="flex">
            <img className=" w-20 md:w-32 rounded-full hover:drop-shadow-[0_0px_15px_whitesmoke]" src={logo} alt="logo" width='100px' />
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
            <button onClick={toggleMenu} className="pb-1 pt-2 px-3 mx-auto rounded-xl text-black text-4xl bg-whitesmoke hover:bg-aquamarine">
              {isOPen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {isOPen && (
          <div className="
            md:hidden
            absolute md:relative z-30 
            m-6 mt-[120px]
            p-3
            rounded-xl
            bg-whitesmoke 
            text-black 
            text-4xl
            flex flex-col items-start justify-center 
            "
          >
            <Link onClick={toggleMenu} className="hover:font-bold m-5" to="/">Home</Link>
            <Link onClick={toggleMenu} className="hover:font-bold m-5" to="/about">Quem somos</Link>
            <Link onClick={toggleMenu} className="hover:font-bold m-5" to="/staff">Nossa Equipe</Link>
            <Link onClick={toggleMenu} className="hover:font-bold m-5" to="/services">Nossos Serviços</Link>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default Header;
