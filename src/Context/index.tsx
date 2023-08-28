import React, { createContext, useState, useContext  } from 'react';
import { dataEn, dataEs, projects, softSkills, techSkills } from './data';
import { DataType, PortfolioContextType, PortfolioProviderProps, SkillsType } from './template';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioContext debe usarse dentro de un proveedor PortfolioContext');
  }
  return context;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(true);
  const myProjects = projects;
  const skills: SkillsType = {
    tech: techSkills,
    soft: softSkills
  }
  let data: DataType;
  if (language) {
    data = dataEn;
  } else {
    data = dataEs;
  }
  const contextValue = {
    data,
    language,
    setLanguage,
    skills,
    projects: myProjects
  }
  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}