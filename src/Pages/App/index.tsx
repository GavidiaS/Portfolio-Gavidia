import { BrowserRouter, useRoutes } from "react-router-dom"
import { PortfolioProvider } from "../../Context";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills"
import Projects from "../Projects";
import Contact from "../Contact";
import Navbar from "../../Components/Navbar";
import NavMobile from "../../Components/NavMobile";

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/skills', element: <Skills /> },
    { path: '/projects', element: <Projects /> },
    { path: '/contact', element: <Contact /> },
  ]);
  return routes;
}

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <NavMobile />
      </BrowserRouter>
    </PortfolioProvider>
  )
}

export default App
