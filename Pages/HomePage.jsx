import React, { useState, useEffect } from "react";

export const HomePage = () => {
  const [language, setLanguage] = useState(null); // Para manejar el idioma seleccionado
  const [text, setText] = useState(""); // Para el texto que se va a mostrar
  const [index, setIndex] = useState(0); // Para el índice de caracteres
  const fullText = "Hola!, elige una opcion para leer sobre mi/Hello! Choose an option to read about me.";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Agrega un solo carácter
        setIndex(index + 1); // Incrementa el índice
      } else {
        clearInterval(interval); // Detiene el intervalo cuando termina el texto
      }
    }, 30); // Velocidad de escritura

    return () => clearInterval(interval); // Limpia el intervalo si el componente se desmonta
  }, [index]); // Ahora el efecto depende del `index` para actualizarse correctamente

  return (
    <>
      <div className="content-wrapper">
        <section className="fade-in">
          {!language ? (
            // Botones para seleccionar idioma
            <div className="language-buttons">
              <p className="typing-effect">{text}</p>
              <br />
              <button onClick={() => setLanguage("español")}>Español</button>
              <button onClick={() => setLanguage("english")}>English</button>
            </div>
          ) : (
            <div className={`About-Me ${language ? "slide-in" : ""}`}>
              {language === "español" && (
                <section>
                  <h1>SOBRE MI:</h1>
                  <p className="Mi-Presentacion">
                  <span>¡Bienvenido!</span> 
                    <br />
                    Hola, soy Federico Isa, estudiante de Ingeniería Informática, actualmente en mi anteúltimo año de carrera. A lo largo de mi formación he desarrollado una sólida comprensión teórica y práctica, mi experiencia incluye proyectos desafiantes, como el trabajo en equipos Scrum y la implementación de metodologías de gestión y optimización de procesos utilizando RUP en la materia Sistemas de la Información II.
                    <br />
                    Mi enfoque es claro: busco sobresalir en el desarrollo web y fullstack, siempre con un compromiso hacia la calidad y la mejora continua. He adquirido habilidades clave en lenguajes como Java, Python, JavaScript, C, C++, así como en React, HTML, CSS y bases de datos. He trabajado de manera colaborativa en entornos ágiles, como QA Manual, lo que me ha permitido desarrollar habilidades en la resolución de problemas, análisis de requerimientos y toma de decisiones estratégicas.
                    <br />
                    Lo que me motiva es unirme a un equipo comprometido en proyectos dinámicos, donde pueda aportar valor inmediato y seguir aprendiendo y creciendo. Busco oportunidades profesionales que me permitan aplicar mis conocimientos, especialmente en frontend y Deep Learning, y contribuir al éxito del equipo. Mi capacidad de adaptación y enfoque orientado al resultado me han permitido entregar proyectos de alta calidad dentro de los plazos establecidos, tanto en mi formación académica como en proyectos externos.
                    <br />
                    Si estás buscando a alguien con sólidas habilidades técnicas, pasión por la innovación y la capacidad de trabajar en equipo, estaré encantado de conversar sobre cómo puedo contribuir a tu equipo. Puedes ver más sobre mi perfil y mis proyectos en mi CV o contactarme a través de mis redes sociales.
                    </p>
                  <br />
                  
                  <p className="mensaje">¡Gracias por visitar mi portfolio!</p>
                </section>
              )}
              {language === "english" && (
                <section>
                  <h1>ABOUT ME:</h1>
                  <p className="Mi-Presentacion">
                  <span>¡WELCOME!</span> 
                    <br />
                    Hello, I’m Federico Isa, a Computer Engineering student currently in the penultimate year of my degree. Throughout my academic journey, I have developed a strong theoretical and practical understanding. My experience includes working on challenging projects, such as collaborating in Scrum teams and implementing management and process optimization methodologies using RUP in the Information Systems II course.
                    <br />
                    My focus is clear: I strive to excel in web and full-stack development, always committed to quality and continuous improvement. I have gained key skills in languages such as Java, Python, JavaScript, C, C++, as well as in React, HTML, CSS, and databases. My collaborative work in agile environments, including as a Manual QA, has helped me develop problem-solving, requirements analysis, and strategic decision-making skills.
                    <br />
                    What drives me is the opportunity to join a dedicated team working on dynamic projects, where I can deliver immediate value while continuing to learn and grow. I’m looking for professional opportunities that allow me to apply my knowledge, especially in frontend and Deep Learning, and contribute to the team’s success. My adaptability and results-oriented approach have enabled me to deliver high-quality projects within deadlines, both in my academic training and external projects.
                    <br />
                    If you’re looking for someone with strong technical skills, a passion for innovation, and the ability to collaborate effectively, I’d be delighted to discuss how I can contribute to your team. You can learn more about my profile and projects in my CV or reach out to me through my social media channels. 
                    </p>
                    <br />
                  <p className="mensaje">Thank you for visiting my portfolio!</p>
                </section>
              )}
            </div>
          )}
        </section>

          <section>
            <div className="image">
             <img src="/Portfolio-FedericoIsa/images/foto-fede.jpg" alt="Foto Fede" />
            </div>
          </section>
        </div>
    </>
  );
};
