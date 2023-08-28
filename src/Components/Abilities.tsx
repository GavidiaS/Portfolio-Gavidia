import { usePortfolioContext } from "../Context";
import ImgSkill from "./ImgSkill";

export default function Abilities() {
  const { data, skills } = usePortfolioContext();
  const { tech, soft } = skills;
  return (
    <section className="abilities_contain">
      <article className="abilities_tech">
        <h2>{data.tech}</h2>
        {
          tech.map(skill => (
            <ImgSkill key={skill.name} url={skill.image} name={skill.name} />
          ))
        }
      </article>
      <article className="abilities_soft">
        <h2>{data.soft}</h2>
        {
          soft.map(skill => (
            <ImgSkill key={skill.name} url={skill.image} name={skill.name} />
          ))
        }
      </article>
    </section>
  );
}