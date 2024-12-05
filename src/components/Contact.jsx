import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.title}>Contact</h2>
      <p style={styles.text}>
        Vous souhaitez me joindre ? Contactez-moi directement en envoyant un e-mail à :
      </p>
      <a
        href="mailto:contact@fabio-etoile.fr"
        style={styles.emailLink}
      >
        contact@fabio-etoile.fr
      </a>
    </section>
  );
};

const styles = {
  contact: {
    padding: "100px 20px",
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#64ffda",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#ccd6f6",
  },
  emailLink: {
    fontSize: "1.5rem",
    color: "#64ffda",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "10px",
    transition: "color 0.3s ease",
  },
  emailLinkHover: {
    color: "#fff",
  },
};

export default Contact;