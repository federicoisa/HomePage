import { Routes, Route, Link, Navigate } from 'react-router-dom';

import { HomePage } from '../Pages/HomePage';
import { Projects } from '../Pages/Projects';
import { CV } from '../Pages/CV';
import { Contacto } from '../Pages/Contacto';

export const Portfolio = () => {

  const handleScrollToUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      <header>
        <h1>
          <p>Portfolio</p>
          <p>Federico Isa</p>
        </h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/HomePage">Inicio</Link>
          </li>
          <li>
            <Link to="/Projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/CV">CV</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Projects/*" element={<Projects />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/CV" element={<CV />} />
      </Routes>

      <footer>
        <div className="flex-container">
          <button id="Scroll-Arrow" onClick={handleScrollToUp}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.59L20 12l-8-8-8 8z" />
            </svg>
          </button>
          <p>
            GitHub:{' '}
            <a href="https://github.com/federicoisa" target="_blank">
              github.com/federicoisa
            </a>
          </p>
          <p>Gmail: fedeisa195@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};
