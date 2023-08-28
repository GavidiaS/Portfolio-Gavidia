import { ReactNode } from 'react';

export type DataType = {
  home: string,
  about: string,
  skills: string,
  projects: string,
  contact: string,
  profession: string,
  description: string,
  history1: string,
  history2: string,
  history3: string,
  tech: string,
  soft: string,
  invite: string,
  iName: string,
  iEmail: string,
  iMessage: string,
  iSend: string
}

export type PortfolioContextType = {
  data: DataType,
  language: boolean,
  setLanguage: (language: boolean) => void,
  skills: SkillsType,
  projects: ProjectType[]
}

export type PortfolioProviderProps = {
  children: ReactNode
}

export type AbilityType = {
  name: string,
  image: string,
}

export type SkillsType = {
  tech: AbilityType[],
  soft: AbilityType[]
}

export type ProjectType = {
  title: string,
  deploy?: string,
  github: string,
  descriptionEn: string,
  descriptionEs: string,
  image: string,
  tech: string[]
}