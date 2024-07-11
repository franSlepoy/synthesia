import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Projectos from "./components/pages/projectos/Projectos";
import Honda from "./components/pages/projectos/Honda";
import Honda1 from "./components/pages/projectos/Honda1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projectos />} />
          <Route path="/honda" element={<Honda />} />
          <Route path="/honda1" element={<Honda1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
