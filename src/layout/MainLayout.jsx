import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { Header } from "../components/header/Header";
import { TokenProvider } from "../context/tokenContext";

export const MainLayout = () => {
  return (
    <div>
      <TokenProvider>
        <Header />
        <Outlet />
      </TokenProvider>
    </div>
  );
};
