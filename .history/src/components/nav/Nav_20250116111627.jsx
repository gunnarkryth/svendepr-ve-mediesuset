import s from "./Nav.module.scss";

import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/camps">Camps</NavLink>
        </li>
        <li>
          <NavLink to="/tickets">Billetter</NavLink>
        </li>
        <li>
          <NavLink to="/info">Praktisk info</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          
        </li>
      </ul>
    </nav>
  );
};
