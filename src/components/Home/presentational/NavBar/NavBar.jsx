import React from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="">
          {/* <img src="/images/404.png" alt="" /> */}
        </div>
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Actividades</li>
          <li>Novedades</li>
          <li>Testimonios</li>
          <li>Contacto</li>
          <li>Contribuye</li>
        </ul>
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
