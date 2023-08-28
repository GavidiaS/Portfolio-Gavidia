type ImgSkillProps = {
  url: string,
  name: string
}

export default function ImgSkill({ name, url }: ImgSkillProps) {
  return (
    <figure className="imgSkill_contain">
      <img src={url} alt={name} />
      <div>
        <p>{name}</p>
      </div>
    </figure>
  );
}