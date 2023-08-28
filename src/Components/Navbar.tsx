import { NavLink, useLocation } from "react-router-dom";
import { usePortfolioContext } from "../Context";
import logo from '../Resources/SG.svg';
import Language from "./Language";

export default function Navbar() {
  const { data } = usePortfolioContext();
  const location = useLocation();
  return (
    <nav className="navbar_contain">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to='/' id={location.pathname === '/' ? 'navbar_link-active' : ''}>{data.home}</NavLink>
        </li>
        <li>
          <NavLink to='/about' id={location.pathname === '/about' ? 'navbar_link-active' : ''}>{data.about}</NavLink>
        </li>
        <li>
          <NavLink to='/skills' id={location.pathname === '/skills' ? 'navbar_link-active' : ''}>{data.skills}</NavLink>
        </li>
        <li>
          <NavLink to='/projects' id={location.pathname === '/projects' ? 'navbar_link-active' : ''}>{data.projects}</NavLink>
        </li>
        <li>
          <NavLink to='/contact' id={location.pathname === '/contact' ? 'navbar_link-active' : ''}>{data.contact}</NavLink>
        </li>
        <li>
          <Language />
        </li>
      </ul>
    </nav>
  );
}