import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Events, Camps, Tickets, Info, Login } from "./pages/";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
