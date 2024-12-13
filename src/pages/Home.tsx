import ModelViewer from "../components/ModelViewer";
import style from "../styles/Home.module.css";
import Github from "../assets/github-mark.svg";
import GithubBlack from "../assets/github-mark-black.svg";
import Claude from "../assets/ClaudeSpeed.jpg";
import TranslateTyping from "../assets/TranslateTyping.png";
import NotesApp from "../assets/NotesApp.png";
import Folder from "../assets/folder.svg";

import Javascript from "../assets/javascript.svg";
import Css from "../assets/css.svg";
import Html from "../assets/html.svg";
import Typescript from "../assets/typescript.svg";
import Python from "../assets/python.svg";
import Csharp from "../assets/csharp.svg";

import Node from "../assets/nodejs.svg";
import Django from "../assets/django.svg";
import ReactIcon from "../assets/react-2.svg";
import ReactNative from "../assets/react-native-1.svg";

import Git from "../assets/git.svg";
import Terminal from "../assets/terminal-1.svg";
import Postgre from "../assets/postgresql.svg";
import Sqlite from "../assets/sqlite.svg";
import Postman from "../assets/postman.svg";
import Jmeter from "../assets/apachejmeter.svg";
import Vite from "../assets/vitejs.svg";

import Send from "../assets/send.svg";

import React, { MouseEvent } from "react";

const Home: React.FC = () => {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={style["home-nav-bar"]}>
        <ul className={style["home-nav-bar-list"]}>
          <li className={style["home-nav-bar-item"]}>
            <a onClick={scrollToSection} href="#sobre-mi">
              Sobre mi
            </a>
          </li>
          <li className={style["home-nav-bar-item"]}>
            <a onClick={scrollToSection} href="#proyectos">
              Proyectos
            </a>
          </li>
          <li className={style["home-nav-bar-item"]}>
            <a onClick={scrollToSection} href="#habilidades">
              Habilidades
            </a>
          </li>
          <li className={style["home-nav-bar-item"]}>
            <a onClick={scrollToSection} href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <section className={style["home-container"]}>
        <div className={style["home-model-container"]}>
          <ModelViewer />
        </div>
        <h1>Hola, soy Dromedao</h1>
        <p>
          Actualmente, soy estudiante de Ingeniería Civil Informática, con un
          enfoque en el desarrollo de aplicaciones utilizando tecnologías web.
        </p>
        <div className={style["home-action-container"]}>
          <a
            className={style["home-cv-btn"]}
            href="/cv-matias-guerra.pdf"
            download
          >
            Descarga mi CV
          </a>

          <a
            href="https://github.com/Dromedao"
            className={style["home-information-icon"]}
          >
            <img src={Github} alt="" />
          </a>
        </div>
      </section>
      <section id="sobre-mi" className={style["home-main-information"]}>
        <div className={style["home-picture-work"]}>
          <img src={Claude} alt="" />
          <p className={style["home-picture-available-work"]}>
            Disponible para trabajar
          </p>
        </div>
        <h1>Sobre mí</h1>
        {/* <p>
          Desde niño, siempre he sentido un profundo interés por el mundo de la
          informática. Mi camino comenzó desarrollando scripts sencillos para
          Unity en C# y programas básicos en C. Más adelante, ingresé a la
          Universidad Técnica Federico Santa María para estudiar Ingeniería
          Civil Informática, lo que me permitió consolidar mi pasión por esta
          disciplina. Paralelamente, he explorado y experimentado con diversas
          tecnologías, lo que me ha brindado una perspectiva más amplia del
          campo de la informática.
        </p> */}
        <p>
          Mi interés en el mundo de la informática empezó durante mi infancia.
          Mi camino comenzó escribiendo scripts para Unity en C# y programas
          simples en C. Más adelante, ingresé a la Universidad Técnica Federico
          Santa María en la carrera de Ingeniería Civil Informática, donde me
          encuentro actualmente. Aquí he podido potenciar mi conocimiento y
          consolidar mi pasión por esta disciplina. Paralelamente, fuera de la
          universidad, he experimentado con diferentes tecnologías, lo que me ha
          brindado una perspectiva amplia del campo de la informática.
        </p>
      </section>
      <section id="proyectos" className={style["home-projects-section"]}>
        <div className={style["home-projects-header"]}>
          <img
            className={style["home-projects-icon"]}
            src={Folder}
            alt="Folder"
          />
          <h1>Proyectos</h1>
        </div>
        <div className={style["home-projects"]}>
          <div className={style["home-project-card"]}>
            <img
              className={style["home-translate-typing-img"]}
              src={TranslateTyping}
              alt="Translate Typing"
            />
            <div>
              <h2 className={style["home-project-name"]}>Translate Typing</h2>
              <ul className={style["home-project-tech-list"]}>
                <li
                  style={{ backgroundColor: "#e4feff" }}
                  className={style["home-project-tech-item"]}
                >
                  {" "}
                  <img src={ReactIcon} alt="React" /> React
                </li>{" "}
                <li
                  style={{ backgroundColor: "#e4ffe5" }}
                  className={style["home-project-tech-item"]}
                >
                  {" "}
                  <img src={Node} alt="NodeJS" /> NodeJS
                </li>{" "}
                <li
                  style={{ backgroundColor: "#c4cdff" }}
                  className={style["home-project-tech-item"]}
                >
                  {" "}
                  <img src={Postgre} alt="PostgreSQL" /> PostgreSQL
                </li>{" "}
              </ul>
              <p className={style["home-project-description"]}>
                Esta plataforma facilita el aprendizaje de nuevos idiomas con
                dos modos: uno para medir la velocidad de escritura y otro para
                corregir traducciones propuestas por los usuarios mediante
                inteligencia artificial.
              </p>
              <div
                className={style["home-project-link-container"]}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <a
                  className={style["home-project-link"]}
                  href="https://translatetyping.com"
                >
                  {" "}
                  Click aquí para ver
                </a>
                <a
                  className={style["home-project-link"]}
                  href="https://github.com/Dromedao/translate-typing"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
          <div className={style["home-project-card"]}>
            <img
              className={style["home-notes-app-img"]}
              src={NotesApp}
              alt="Aplicación de Notas"
            />
            <div>
              <h2 className={style["home-project-name"]}>
                Aplicación de notas movil
              </h2>
              <ul className={style["home-project-tech-list"]}>
                <li
                  style={{ backgroundColor: "#e4feff" }}
                  className={style["home-project-tech-item"]}
                >
                  {" "}
                  <img src={ReactNative} alt="React Native" /> React Native
                </li>{" "}
                <li
                  style={{ backgroundColor: "#c4cdff" }}
                  className={style["home-project-tech-item"]}
                >
                  {" "}
                  <img src={Sqlite} alt="SQLite" /> Sqlite
                </li>{" "}
              </ul>
              <p className={style["home-project-description"]}>
                Aplicación de notas completamente funcional, diseñada para
                crear, editar y eliminar notas. Desarrollada en React Native, lo
                que la hace multiplataforma (Android e iOS). Las notas se
                almacenan en una base de datos SQLite para garantizar su
                persistencia.
              </p>
              <p className={style["home-project-description"]}>
                Para utilizarla, puedes compilar el proyecto desde su
                repositorio en GitHub.
              </p>
              <div className={style["home-project-link-container"]}>
                <a
                  className={style["home-project-link"]}
                  href="https://github.com/Dromedao/react-native-notes-app"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="habilidades" className={style["home-skills-section"]}>
        <h1>Habilidades</h1>
        {/* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */}
        <article className={style["home-skills-collection"]}>
          <h1>Lenguajes</h1>
          <div className={style["home-icons-container"]}>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Html} alt="" />
              <p>HTML</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Css} alt="" />
              <p>CSS</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Javascript} alt="" />
              <p>Javascript</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Typescript} alt="" />
              <p>Typescript</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Python} alt="Python" />
              <p>Python</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Csharp} alt="" />
              <p>C#</p>
            </article>
          </div>
        </article>

        <article className={style["home-skills-collection"]}>
          <h1>Librerias y frameworks</h1>
          <div className={style["home-icons-container"]}>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={ReactIcon} alt="" />
              <p>React</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={ReactIcon} alt="" />
              <p>React Native</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Node} alt="" />
              <p>NodeJS</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Django} alt="" />
              <p>Django</p>
            </article>
          </div>
        </article>

        <article className={style["home-skills-collection"]}>
          <h1>Herramientas</h1>
          <div className={style["home-icons-container"]}>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Git} alt="" />
              <p>Git</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={GithubBlack} alt="" />
              <p>Github</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Terminal} alt="" />
              <p>Terminal</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Postgre} alt="" />
              <p>PostgreSQL</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Sqlite} alt="" />
              <p>SQLite</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Postman} alt="" />
              <p>Postman</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Vite} alt="" />
              <p>Vite</p>
            </article>
            <article className={style["home-container-icon"]}>
              <img className={style["home-icon"]} src={Jmeter} alt="" />
              <p>Jmeter</p>
            </article>
          </div>
        </article>
      </section>
      <section id="contacto" className={style["home-contact-section"]}>
        <h1>Contacto</h1>
        <div className={style["home-contact-info"]}>
          <p>matiasguerravalles@gmail.com</p>
          <a href="mailto:matiasguerravalles@gmail.com">
            <img
              style={{ width: "30px", backgroundColor: "transparent" }}
              src={Send}
              alt=""
            />
          </a>
        </div>
      </section>
      <footer className={style["home-footer"]}>
        <p>Derechos reservados o algo así</p>
      </footer>
    </>
  );
};

export default Home;
