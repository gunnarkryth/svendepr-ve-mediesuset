import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Forside</NavLink>
        </li>
        <li>
          <NavLink>Events</NavLink>
        </li>
        <li>
          <NavLink>Camps</NavLink>
        </li>
        <li>
          <NavLink>Billetter</NavLink>
        </li>
        <li>
          <NavLink>Praktik</NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </nav>
  );
};
