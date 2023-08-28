import { FaHouse, FaUser, FaPhoneVolume, FaGears } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import { usePortfolioContext } from "../Context";

export default function NavMobile() {
  const { data } = usePortfolioContext();
  const location = useLocation();
  return (
    <nav className="navmobile_contain">
      <ul>
        <li>
          <NavLink to='/' id={location.pathname === '/' ? 'navmobile_link-active' : ''}>
            <FaHouse />
            <span>{data.home}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' id={location.pathname === '/about' ? 'navmobile_link-active' : ''}>
            <FaUser />
            <span>{data.about}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/skills' id={location.pathname === '/skills' ? 'navmobile_link-active' : ''}>
            <GiSkills />
            <span>{data.skills}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' id={location.pathname === '/projects' ? 'navmobile_link-active' : ''}>
            <FaGears />
            <span>{data.projects}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' id={location.pathname === '/contact' ? 'navmobile_link-active' : ''}>
            <FaPhoneVolume />
            <span>{data.contact}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}