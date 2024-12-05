import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.title}>À propos de moi</h2>
      <p style={styles.text}>
        Je suis Fabio, passionné d'informatique depuis mon jeune âge. Mon objectif est de me spécialiser dans le développement web Fullstack. J'ai obtenu mon baccalauréat général avec les options Sciences Économiques et Sociales ainsi que Numérique et Sciences Informatiques. Après le bac, j'ai choisi de poursuivre en BUT Informatique, où je suis actuellement en deuxième année.
      </p>
      <p style={styles.text}>
        En dehors du développement, j'aime explorer de nouvelles technologies, travailler sur des projets personnels, ou encore aider mes proches avec tout ce qui concerne le hardware et l'installation de postes informatiques.
      </p>
    </section>
  );
};

const styles = {
  about: {
    padding: "100px 20px",
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
};

export default About;