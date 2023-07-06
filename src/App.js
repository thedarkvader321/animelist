import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Anime } from "./components/Anime";
import { Inicio } from "./components/Inicio";
import 'bulma/css/bulma.css';
import './index.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/anime/:id" element={<Anime></Anime>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
