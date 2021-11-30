import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import {Routes} from 'react-router';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
