import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Projectos from "./components/pages/projectos/Projectos";
import Honda from "./components/pages/projectos/Honda";
import Honda1 from "./components/pages/projectos/Honda1";
import Imb from "./components/pages/projectos/Imb";
import Tn from "./components/pages/projectos/Tn";
import ObrasPublicas from "./components/pages/projectos/ObrasPublicas";
import PSA from "./components/pages/projectos/PSA";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projectos />} />
          <Route path="/honda" element={<Honda />} />
          <Route path="/honda1" element={<Honda1 />} />
          <Route path="/IMB" element={<Imb />} />
          <Route path="/TNyPlatex" element={<Tn />} />
          <Route path="/MinisterioDeObrasPublicas" element={<ObrasPublicas />} />
          <Route path="/PSA" element={<PSA/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
