import React from "react";
import { useInView } from "react-intersection-observer";
import {FaReact,FaJsSquare,FaHtml5,FaCss3Alt,FaNodeJs,FaPython,FaPhp,FaDatabase,FaJava,FaWindows,FaUbuntu,} from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiUml, SiOracle, SiArchlinux } from "react-icons/si";
import CLogo from "../assets/img/c-logo.svg"; 

const SkillBar = ({ level }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div ref={ref} style={styles.progressBarContainer}>
      <div
        style={{
          ...styles.progressBar,
          width: inView ? `${level}%` : "0%", 
        }}
      ></div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, level: 50, link: "https://reactjs.org/" },
    { name: "JavaScript", icon: <FaJsSquare />, level: 45, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Node.js", icon: <FaNodeJs />, level: 20, link: "https://nodejs.org/" },

    { name: "HTML", icon: <FaHtml5 />, level: 70, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <FaCss3Alt />, level: 65, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "W3CSS", icon: <FaCss3Alt />, level: 45, link: "https://www.w3schools.com/w3css/" },

    { name: "PHP", icon: <FaPhp />, level: 45, link: "https://www.php.net/" },
    { name: "CodeIgniter", icon: <FaPhp />, level: 25, link: "https://codeigniter.com/" },
    { name: "phpMyAdmin", icon: <FaDatabase />, level: 50, link: "https://www.phpmyadmin.net/" },

    { name: "SQL", icon: <FaDatabase />, level: 50, link: "https://sql.sh/"},
    { name: "PL/SQL", icon: <FaDatabase />, level: 25, link :"https://www.oracle.com/database/technologies/appdev/plsql.html"},
    { name: "Oracle", icon: <SiOracle />, level: 50, link :"https://www.oracle.com/" },

    { name: "Python", icon: <FaPython />, level: 55, link: "https://www.python.org/" },
    { name: "C", icon: <img src={CLogo} alt="C Logo" style={styles.customIcon} />, level: 30, link: "https://www.learn-c.org/" },
    { name: "Java", icon: <FaJava />, level: 40, link: "https://www.java.com/fr/" },

    { name: "StarUML", icon: <SiUml />, level: 30, link: "https://staruml.io/" },
    { name: "Git", icon: <FaGit />, level: 40, link: "https://git-scm.com/" },
    { name: "Visual Studio Code", icon: <VscVscode />, level: 85, link: "https://code.visualstudio.com/" },

    { name: "Windows", icon: <FaWindows />, level: 70, link: "https://www.microsoft.com/fr-fr/windows" },
    { name: "ArchLinux", icon: <SiArchlinux />, level: 55, link: "https://archlinux.org/"},
    { name: "Ubuntu", icon: <FaUbuntu />, level: 50, link: "https://www.ubuntu-fr.org/"},
  ];

  return (
    <section id="skills" style={styles.skills}>
      <h2 style={styles.title}>Mes Compétences</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <div style={styles.skill}>
              <div style={styles.iconContainer}>{skill.icon}</div>
              <div style={styles.skillDetails}>
                <span style={styles.skillName}>{skill.name}</span>
                <SkillBar level={skill.level} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const styles = {
  skills: {
    padding: "100px 20px",
    backgroundColor: "#0a192f",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#64ffda",
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    width: "100%",
  },
  skill: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#112240",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
  },
  iconContainer: {
    fontSize: "2rem",
    color: "#64ffda",
  },
  customIcon: {
    width: "40px", 
    height: "40px",
  },
  skillDetails: {
    flexGrow: 1,
  },
  skillName: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    display: "block",
  },
  progressBarContainer: {
    width: "100%",
    backgroundColor: "#233554",
    borderRadius: "5px",
    height: "10px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#64ffda",
    transition: "width 0.5s ease-in-out",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
};

export default Skills;