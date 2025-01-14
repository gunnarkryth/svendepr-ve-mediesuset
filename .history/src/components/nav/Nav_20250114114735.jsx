import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/">Events</NavLink>
        </li>
        <li>
          <NavLink> to="/"Camps</NavLink>
        </li>
        <li>
          <NavLink>Billetter</NavLink>
        </li>
        <li>
          <NavLink>Praktisk info</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
