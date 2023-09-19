

const Navbar = () => {
  
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="burguer-div">
        {/* Icono en el lado izquierdo */}
        <a href="#" >
          <i className="material-icons burguer">menu</i>
        </a>
        </div>
        {/* Logo a la izquierda */}
        <a href="#" className="brand-logo">
          <img className="img" src="src/assets/logo.svg" alt="Logo" />
        </a>
            {/* Campo de búsqueda en el centro */}
            <div className="search-container hide-on-med-and-down">
          <i className="material-icons search">search</i>
          <input id="search" type="text" placeholder="Buscar" />
          <i className="material-icons voice-icon">mic</i>
        </div>
        {/* Iconos en el lado derecho */}
        <ul className="right hide-on-med-and-down">
          <li><a href="mobile.html"><i className="material-icons">home</i></a></li>
          <li><a href="badges.html"><i className="material-icons">person</i></a></li>
          <li><a href="collapsible.html"><i className="material-icons">shopping_cart</i></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
