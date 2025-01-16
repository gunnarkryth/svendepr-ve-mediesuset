import s from "./Header.module.scss";

import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src="public/assets/images/Logo.png" alt="MedieSuset" />
        <p>4 - 7. juli 2022</p>
      </div>
      <Nav />
    </header>
  );
};
