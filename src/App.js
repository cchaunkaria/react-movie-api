import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element ={<Landing />} />
          <Route path="/search" element ={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
