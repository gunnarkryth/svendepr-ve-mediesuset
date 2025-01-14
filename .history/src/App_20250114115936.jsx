import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Camps } from "./pages/Camps";
import { Tickets } from "./pages/Tickets";
import { Info } from "./pages/Info";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="camps" element={<Camps />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="info" element={<Info />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
