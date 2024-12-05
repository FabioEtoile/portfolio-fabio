import React from "react";
import { FaGithub, FaReact} from "react-icons/fa"; 
import { SiVite } from "react-icons/si";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import SlideInSection from "./components/SlideInSection";
import Skills from "./components/Skills";
import About from "./components/About";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      {/* Section Accueil */}
      <Hero />
      {/* Section À propos */}
      <SlideInSection id="about">
        <h2 style={styles.title}>À propos de moi</h2>
        <div style={styles.content}>
          <p style={styles.text}>
            Je suis Fabio, passionné d'informatique depuis mon jeune âge. J'ai
            pour objectif de me spécialiser dans le développement web fullstack.
            J'ai obtenu mon baccalauréat général avec les options sciences
            économiques et sociales, ainsi que numériques et sciences
            informatiques. Après le bac, j'ai choisi de poursuivre mes études
            en BUT Informatique, où je suis actuellement en 2ème année.
          </p>
          <p style={styles.text}>
            En dehors du développement, j’aime explorer de nouvelles
            technologies, travailler sur des projets personnels, et aider mes
            proches sur tout ce qui touche au hardware ou à l’installation de
            postes.
          </p>
        </div>
      </SlideInSection>
      {/* Section Compétences */}
      <SlideInSection id="skills">
        <Skills />
      </SlideInSection>
      {/* Section Projets */}
      <SlideInSection id="projects">
        <Projets />
      </SlideInSection>
      {/* Section Contact */}
      <SlideInSection id="contact">
        <Contact />
      </SlideInSection>
      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Fabio Etoile | Tous droits réservés</p>
        <div style={styles.techStack}>
          <p style={styles.techText}>Réalisé avec ReactJS et ViteJS</p>
          <FaReact style={styles.techIcon} />
          <SiVite style={styles.techIcon} />
        </div>
        <a
          href="https://github.com/FabioEtoile"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          <FaGithub /> Mon GitHub
        </a>
      </footer>
    </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "2.8rem",
    marginBottom: "30px",
    color: "#64ffda",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "justify",
    lineHeight: "1.8",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#ccd6f6",
  },
  footer: {
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "relative", // Rend le footer non fixe
    bottom: 0,
    width: "100%",
  },
  footerText: {
    marginBottom: "10px",
  },
  techStack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    gap: "10px", // Espace entre les éléments
  },
  techText: {
    fontSize: "1rem",
    color: "#ccd6f6",
  },
  techIcon: {
    fontSize: "1.5rem",
    color: "#64ffda",
  },
  githubLink: {
    color: "#64ffda",
    textDecoration: "none",
    fontSize: "1.2rem",
    marginTop: "10px",
    display: "inline-block",
  },
};

export default App;