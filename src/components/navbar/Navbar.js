import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Catalog Lux</strong> Auto
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-list__link" + (isActive ? " nav-list__link--active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/auto"
                className={({ isActive }) =>
                  "nav-list__link" + (isActive ? " nav-list__link--active" : "")
                }
              >
                Auto
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  "nav-list__link" + (isActive ? " nav-list__link--active" : "")
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;