// App.js
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Productos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
