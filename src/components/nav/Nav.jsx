import React, { useState } from "react";
import { MdHomeMax } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import { RiServiceLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <MdHomeMax />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <TiUserOutline />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <FaHandsHelping />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <RiContactsLine />
      </a>
    </nav>
  );
};

export default Nav;
