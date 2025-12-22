import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Logbook from "./pages/Logbook";
import DetailedGameDescription from "./pages/DetailedGameDescription";
import Result from "./pages/Result";
import Links from "./pages/Links";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/Tetris">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/logbook" element={<Logbook />} />
        <Route
          path="/detailedgamedescription"
          element={<DetailedGameDescription />}
        />
        <Route path="/result" element={<Result />} />
        <Route path="/links" element={<Links />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
