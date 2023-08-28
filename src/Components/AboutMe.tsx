import { PiHandWavingFill } from "react-icons/pi";
import { usePortfolioContext } from "../Context";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
  const { data } = usePortfolioContext();
  return (
    <section className="about_contain">
      <div className="about_line"></div>
      <article className="about_one">
        <p><PiHandWavingFill /> {data.history1}</p>
      </article>
      <article className="about_two">
        <p>{data.history2}</p>
      </article>
      <article className="about_three">
        <p>{data.history3}</p>
      </article>
      <NavLink className="about_invite" to='/contact'>{data.invite}</NavLink>
    </section>
  );
}