import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__container--logo">
          <img src="/images/assets/logo.png" alt="" />
        </div>
        <ul className="nav__container--links">
          <li className="nav__container--links--link">Inicio</li>
          <li className="nav__container--links--link">Nosotros</li>
          <li className="nav__container--links--link">Actividades</li>
          <li className="nav__container--links--link">Novedades</li>
          <li className="nav__container--links--link">Testimonios</li>
          <li className="nav__container--links--link">Contacto</li>
          <li className="nav__container--links--link">Contribuye</li>
        </ul>
        <div className="nav__container--btns">
          <button className="nav__container--btns--btn login-btn">Log In</button>
          <button className="nav__container--btns--btn sign-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
