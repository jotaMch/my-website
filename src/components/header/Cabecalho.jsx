import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Cabecalho() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={` flex 
    justify-center items-center w-full h-12 md:h-20 lg:h-30 xl:h-30 ${scrolled ? 'header-top' : ''}
    fixed left-1/2 transform -translate-x-1/2`}>
      <nav className=" md:w-4/6 lg:w-1/5 xl:w-1/5 ">
        <ul className="flex justify-between items-center">
          <Link to="/">
            <li className="text-white flex flex-col items-center justify-center cursor-pointer">
              <FaHome />Início
            </li>
          </Link>
          <Link to="/project">
            <li className="text-white flex flex-col items-center justify-center cursor-pointer">
              <GoProjectSymlink />Projetos
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-white flex flex-col items-center justify-center cursor-pointer">
              <RiContactsFill />Contato
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
