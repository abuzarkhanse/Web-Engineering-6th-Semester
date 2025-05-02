import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <h2 className="logo">Lab12</h2>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
