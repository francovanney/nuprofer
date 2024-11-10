// Layout.js
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />{" "}
      {/* Aquí renderizamos el Header siempre que se esté usando este layout */}
      <Outlet /> {/* Renderiza los componentes de las rutas */}
      <Footer />{" "}
      {/* Renderizamos el Footer siempre que se esté usando este layout */}
    </div>
  );
};

export default Layout;
