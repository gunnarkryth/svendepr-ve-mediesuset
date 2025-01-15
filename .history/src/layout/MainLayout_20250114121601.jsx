import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { DataProvider } from "../context/DataContext";

export const MainLayout = () => {
  return (
    <div>
      <Nav />
      <DataProvider
      <Outlet />
    </div>
  );
};
