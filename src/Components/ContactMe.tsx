import { usePortfolioContext } from "../Context";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import FormContact from "./FormContact";
import cv from "../Resources/CV_GAVIDIA.pdf";

export default function ContactMe() {
  const { data } = usePortfolioContext();
  return (
    <section className="contact-me">
      <h1>{data.invite}</h1>
      <FormContact />
      <div className="contact-me_links">
        <a href={cv} download={true}>CV <FaDownload /></a>
        <a href="https://www.linkedin.com/in/santiago-gavidia/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/GavidiaS" target="_blank"><FaGithub /></a>
        <a href="https://wa.me/+51958251204" target="_blank"><FaWhatsapp /></a>
      </div>
    </section>
  );
}