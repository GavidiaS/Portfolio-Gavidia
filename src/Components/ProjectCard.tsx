import { FaGithub, FaGlobe } from "react-icons/fa";
import { usePortfolioContext } from "../Context";
import { ProjectType } from "../Context/template";

type ProjectCardType = {
  data: ProjectType
}

export default function ProjectCard({ data }: ProjectCardType) {
  const { language } = usePortfolioContext();
  return (
    <article className="project-card">
      <figure className="project-card_figure">
        <img src={data.image} alt={data.title} />
        <div>
          <a href={data.github} target="_blank"><FaGithub /></a>
          {data.deploy ? <a href={data.deploy} target="_blank"><FaGlobe /></a> : null}
        </div>
      </figure>
      <section className="project-card_section">
        <h2>{data.title}</h2>
        <p>{language ? data.descriptionEn : data.descriptionEs}</p>
        <p>
          {
            data.tech.map((tec, index) => (
              <span key={tec} className={`span-color-${(index % 4) + 1}`}>{tec}</span>
            ))
          }
        </p>
      </section>
    </article>
  );
}