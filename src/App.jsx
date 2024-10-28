import "./App.css";
import Header from "./components/Header/header";
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;
