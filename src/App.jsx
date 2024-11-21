// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto"; // Importa el componente Contacto

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* Ruta general que usa el Layout (Header y Footer) */}
          <Route>
            <Route path="/nuprofer" element={<Productos />} />
            <Route path="/" element={<Productos />} />
            {/* Aquí agregarás otras rutas que necesiten Header y Footer */}
            <Route path="/contacto" element={<Contacto />} />
          </Route>
          {/* Ruta de contacto sin Header y Footer */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
