import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

// const Home = lazy(() => import('./pages/Home'));
// const Store = lazy(() => import('./pages/Store'));
// const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <ShoppingCartProvider>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
