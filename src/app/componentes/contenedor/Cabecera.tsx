import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/Logo.png";

export const Cabecera = () => {
  return (
    <>
      <header className="d-flex justify-content py-3">
        <NavLink className="navbar-brand" to="/">
          <img src={miLogo} alt="El Logo" />
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Franquicias">
              Franquicias
            </NavLink>
          </li>
          <li className="nav-item">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menus
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/mencre">
                    Registrar Menus
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/menlis">
                    Listar Menus
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/menadmin">
                    Administrar Menus
                  </NavLink>
                </li>
              </ul>
            </li>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/menuacer">
              Acerca de
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
