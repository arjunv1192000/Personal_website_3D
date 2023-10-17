// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { arjun, menu, close } from "../assets/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle,setToggle]=useState()
  return (
    <nav
      className={`${styles.paddingX} w-full h-[100px] flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className=" w-full flex  justify-between  items-center max-w-7xl   mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={arjun} alt="logo" className="w-20 h-20 object-contain " />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            ARJUN V 
            <span className="sm:block hidden">| MERN STACK DEVELOPER</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} 
            className={`${
              active === link.title
              ? "text-white"
              :"text-secondary"

            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"   
          onClick={()=>setToggle(!toggle)}  
          />
          <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col">
          {navLinks.map((link) => (
            <li key={link.id} 
            className={`${
              active === link.title
              ? "text-white"
              :"text-secondary"

            } hover:text-white text-[12px] font-medium cursor-pointer`}
            onClick={()=>{
              setToggle(!toggle)
              setActive(link.title)}}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
