import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      
      <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="burger-icon" />
        ) : (
          <FaBars className="burger-icon" />
        )}
      </div>

      {/* Navigation */}
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>
              <FaHome className="icon" /> Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <FaUser className="icon" /> À propos
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              <FaLaptopCode className="icon" /> Compétences
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              <FaProjectDiagram className="icon" /> Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <FaEnvelope className="icon" /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;