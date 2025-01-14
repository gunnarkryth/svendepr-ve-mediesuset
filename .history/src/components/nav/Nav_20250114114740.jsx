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
          <NavLink to="/">Camps</NavLink>
        </li>
        <li>
          <NavLink to="/">Billetter</NavLink>
        </li>
        <li>
          <NavLink to="/">Praktisk info</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
