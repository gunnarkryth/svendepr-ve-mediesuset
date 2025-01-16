import s from "./Nav.module.scss";

import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <header>
      <>
        <img src="public/assets/images/Logo.png" alt="MedieSuset" />
        <p>4 - 7. juli 2022</p>
      </>
      <Nav />
    </header>
  );
};
