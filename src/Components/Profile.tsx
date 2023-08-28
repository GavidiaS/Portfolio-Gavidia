import { usePortfolioContext } from "../Context";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import foto from '../Resources/Santiago-A.png';
import cv from '../Resources/CV_GAVIDIA.pdf';

const skills: string[] = ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Redux", "Node.JS", "Express", "Sequelize", "PostgreSQL"];

export default function Profile() {
  const { data } = usePortfolioContext();
  return (
    <section className="profile_contain">
      <figure>
        <img src={foto} alt="Foto" />
      </figure>
      <article className="profile_name">
        <h2>
          <span className="name">Santiago Gavidia Castro</span>
          <span className="profession">{data.profession}</span>
        </h2>
        <p>{data.description}</p>
        <div className="profile_contain-links">
          <a href={cv} download={true}>CV <FaDownload /></a>
          <a href="https://www.linkedin.com/in/santiago-gavidia/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/GavidiaS" target="_blank"><FaGithub /></a>
          <a href="https://wa.me/+51958251204" target="_blank"><FaWhatsapp /></a>
        </div>
      </article>
      <article className="profile_skills">
        {
          skills.map(skill => (
            <span className={`${skill.toLowerCase() === "javascript" || skill.toLowerCase() === "redux" || skill.toLowerCase() === "postgresql" ? skill.toLowerCase() : null}`} key={skill}>{skill}</span>
          ))
        }
      </article>
    </section>
  );
}