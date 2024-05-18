import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
