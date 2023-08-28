import { usePortfolioContext } from "../Context";
import ProjectCard from "./ProjectCard";

export default function ListProjects() {
  const { language, projects } = usePortfolioContext();
  return (
    <section className="project-list">
      <h1>{language ? "My Projects" : "Mis Proyectos"}</h1>
      <div className="project-list_cards">
        {
          projects.map(p => (
            <ProjectCard key={p.title} data={p} />
          ))
        }
      </div>
    </section>
  );
}