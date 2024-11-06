import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Platform } from "./pages";
import Contact from "./pages/Contact";
import Acquisition from "./pages/Acquisition";


function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-custom-left to-custom-right min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/platform" element={<Platform/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/acquisition" element={<Acquisition/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
