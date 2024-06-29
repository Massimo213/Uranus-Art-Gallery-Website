import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Compoments/NavBar";
import Home from "./Compoments/pages/Home";
import Products from "./Compoments/pages/Products";
import Services from "./Compoments/pages/Services";
import SignUp from "./Compoments/pages/sign-up";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
