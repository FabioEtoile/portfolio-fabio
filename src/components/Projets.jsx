import React from "react";
import { FaGithub } from "react-icons/fa";

import AppliPHPImage from "../assets/img/AppliPHP.png";
import DorfromantikImage from "../assets/img/Dorfromantik.png";
import MaquetteWebImage from "../assets/img/MaquetteWeb.png";
import ProjetwebImage from "../assets/img/Projetweb.png";
import ScilabImage from "../assets/img/Scilab.png";
import SudokuImage from "../assets/img/Sudoku.png";
import SnakeImage from "../assets/img/snake.png";

const Projets = () => {
  const projects = [
    {
      title: "Snake en C",
      description:
        "Jeu du Snake en C89 avec la bibliothèque graphique de mon Université (bibliothèque basé sur Xlib)",
      githubLink: "https://github.com/FabioEtoile/Snake",
      screenshot: SnakeImage,
    },
    {
      title: "Sudoku en Java",
      description:
        "Une application Java permettant de créer et résoudre des grilles de Sudoku avec une interface graphique.",
      githubLink: "https://github.com/FabioEtoile/Sudoku",
      screenshot: SudokuImage,
    },
    {
      title: "Dorfromantik en Java",
      description:
        "Un jeu inspiré de Dorfromantik réalisé en Java avec des mécaniques de placement de tuiles.",
      githubLink: null, 
      screenshot: DorfromantikImage,
    },
    {
      title: "Maquette Web",
      description:
        "Une maquette web réalisée dans le cadre de mon projet IHM, incluant des wireframes et wireflows.",
      githubLink: "https://github.com/FabioEtoile/Maquette-WEB",
      screenshot: MaquetteWebImage,
    },
    {
      title: "Application de Musique en PHP",
      description:
        "Une application de gestion de musique développée en PHP et à l'aide du framework CodeIgniter",
      githubLink: "https://github.com/FabioEtoile/Application-Musique-PHP",
      screenshot: AppliPHPImage,
    },
    {
      title: "Projet Web",
      description:
        "Un projet web complet réalisé avec HTML, CSS et JavaScript, intégrant des éléments dynamiques.",
      githubLink: "https://github.com/FabioEtoile/ProjetWeb",
      screenshot: ProjetwebImage,
    },
    {
      title: "Scilab",
      description:
        "Un projet réalisé en Scilab pour simuler des calculs et des traitements de données.",
      githubLink: "https://github.com/FabioEtoile/Scilab",
      screenshot: ScilabImage,
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.title}>Mes Projets</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.project}>
            <img
              src={project.screenshot}
              alt={project.title}
              style={styles.screenshot}
            />
            <div style={styles.projectDetails}>
              <div style={styles.projectTitleContainer}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubLink}
                  >
                    <FaGithub /> Voir le code source
                  </a>
                )}
                {!project.githubLink && (
                  <span style={styles.noGitHub}>Pas open-source, pour des raisons de sécurité vis-à-vis de la base de données</span>
                )}
              </div>
              <p style={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: "100px 20px",
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "1200px",
    marginTop: "0",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#64ffda",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#ccd6f6",
  },
  projectsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
    padding: "0 20px",
    marginTop: "20px",
  },
  project: {
    backgroundColor: "#112240",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    position: "relative",
  },
  projectDetails: {
    padding: "20px",
    textAlign: "left",
  },
  screenshot: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderBottom: "2px solid #233554",
  },
  projectTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  projectTitle: {
    fontSize: "1.6rem",
    color: "#64ffda",
    marginBottom: "0",
  },
  projectDescription: {
    fontSize: "1.2rem",
    color: "#ccd6f6",
    marginBottom: "60px",
  },
  githubLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#64ffda",
    textDecoration: "none",
    fontSize: "1.1rem",
    position: "absolute",
    bottom: "10px",
    left: "10px",
  },
  noGitHub: {
    display: "inline-block",
    color: "#ff6347", 
    fontSize: "1.1rem",
    position: "absolute",
    bottom: "10px",
    left: "10px",
  },
};

export default Projets;