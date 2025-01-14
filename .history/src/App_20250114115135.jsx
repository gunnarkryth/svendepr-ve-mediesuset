import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Camps } from "./pages/Camps";
import { Tickets } from "./pages/Tickets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/" element={ <Events/> }/>
          <Route path="/" element={ <Camps/> }/>
          <Route path="/" element={ <Tickets/> }/>
          <Route path="/" element={ < }/>
          <Route path="/" element={  }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
