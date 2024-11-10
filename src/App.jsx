// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto"; // Importa el componente Contacto

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Ruta general que usa el Layout (Header y Footer) */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Productos />} />
            {/* Aquí agregarás otras rutas que necesiten Header y Footer */}
          </Route>

          {/* Ruta de contacto sin Header y Footer */}
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
