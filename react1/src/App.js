import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Composants pour les pages
function Home() {
  return <h2>Accueil</h2>;
}

function Detail() {
  let { id } = useParams();
  return <h2>Page de Détails pour ID: {id}</h2>;
}

function About() {
  return <h2>À Propos</h2>;
}

function Contact() {
  return <h2>Contactez-Nous</h2>;
}

function Services() {
  return <h2>Nos Services</h2>;
}

// Application principale
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/details/1">Détails 1</Link></li>
            <li><Link to="/details/2">Détails 2</Link></li>
            <li><Link to="/details/3">Détails 3</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
