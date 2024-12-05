import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0a192f",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "800px", padding: "20px" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
          Bienvenue sur mon Portfolio
        </h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Je suis <span style={{ color: "#64ffda" }}>Fabio</span>, actuellement
          en 2ème année de BUT Informatique.
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          🎯 À la recherche d’un stage de 8 à 12 semaines à partir d’avril 2024.
        </p>
        <a
          href="#about"
          style={{
            padding: "10px 20px",
            fontSize: "1.1rem",
            color: "#64ffda",
            border: "2px solid #64ffda",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a192f",
    color: "#fff",
  },
  content: {
    textAlign: "center",
    maxWidth: "800px",
    padding: "20px",
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  highlight: {
    color: "#64ffda",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.1rem",
    color: "#64ffda",
    border: "2px solid #64ffda",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

export default Hero;