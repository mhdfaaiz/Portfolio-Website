import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import About from "./Pages/AboutPage";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
