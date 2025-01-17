import s from "./Nav.module.scss";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { TokenContext } from "../../context/tokenContext";

export const Nav = () => {
  const { token, setToken } = useContext(TokenContext);

  console.log("Nav token: ", token);

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
          <NavLink to="/login" onClick={token ? () => setToken(null) : null}>
            {token ? "Log out" : "Login"}
          </NavLink>
        </li>
        <li>
          <img src="public/assets/icons/search_icon.svg" alt="" />
        </li>
      </ul>
    </nav>
  );
};
