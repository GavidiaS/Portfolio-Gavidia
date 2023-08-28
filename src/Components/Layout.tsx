import { ReactNode } from "react";
import Language from "./Language";
import logo from '../Resources/SG.svg';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="layout_contain">
      <div className="layout_language">
        <img className="layout_img" src={logo} alt="Logo" />
        <Language />
      </div>
      {children}
    </main>
  );
}