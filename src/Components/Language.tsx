import { FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import { usePortfolioContext } from "../Context";
import usa from "../Resources/usa.png";
import spain from "../Resources/spain.png";

type DeployBarProps = {
  onDeploy: (active: boolean) => void
}

function DeployBar({ onDeploy }: DeployBarProps) {
  const { setLanguage } = usePortfolioContext();
  return (
    <aside className="language_aside">
      <button onClick={() => {setLanguage(true); onDeploy(false)}}>
        <img src={usa} alt="FlagUSA" />
        en
      </button>
      <button onClick={() => {setLanguage(false); onDeploy(false)}}>
        <img src={spain} alt="FlagSpain" />
        es
      </button>
    </aside>
  );
}

export default function Language() {
  const { language } = usePortfolioContext();
  const [deploy, setDeploy] = useState(false);
  return (
    <figure className="language_figure" onClick={() => setDeploy(!deploy)}>
      <img src={language ? usa : spain} alt="Flag" />
      <FaCaretDown />
      {deploy ? <DeployBar onDeploy={setDeploy} /> : null}
    </figure>
  );
}