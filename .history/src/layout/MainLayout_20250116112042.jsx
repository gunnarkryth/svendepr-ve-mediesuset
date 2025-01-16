import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { Header } from "../components/header/Header";

export const MainLayout = () => {
  return (
    <div>
      <Header
      <Outlet />
    </div>
  );
};
