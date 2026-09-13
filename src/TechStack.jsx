import "./TechStack.css";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiVite,
  SiPython,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiSqlalchemy,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiSupabase,
  SiGooglegemini,
  SiGithub,
  SiVercel,
  SiRender,
  SiRailway,
  SiGooglecloud,
  SiSelenium,
  SiPostman,
  SiDocker,
} from "react-icons/si";

/* =========================
   FRONTEND
========================= */

const frontend = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss />, name: "CSS3" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiRailway />, name: "Railway" },
];

/* =========================
   BACKEND + DATABASE + TOOLS
========================= */

const backend = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiSqlalchemy />, name: "SQLAlchemy" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMariadb />, name: "MariaDB" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <SiSupabase />, name: "Supabase" },

  { icon: <SiGooglegemini />, name: "Gemini" },
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiSelenium />, name: "Selenium" },
  { icon: <SiPostman />, name: "Postman" },
];

/* =========================
   CARD
========================= */

const Card = ({ icon, name }) => {
  return (
    <div className="tech-card">
      <div className="tech-icon">{icon}</div>

      <span>{name}</span>
    </div>
  );
};

/* =========================
   TECH STACK
========================= */

export default function TechStack({ isDark }) {
  return (
    <section className={`tech-stack ${isDark ? "dark" : "light"}`} id="tech">
      {/* =========================
          FRONTEND
      ========================= */}

      <div className="slider frontend-slider">
        <div className="track left">
          {[...frontend, ...frontend, ...frontend].map((item, i) => (
            <Card key={`frontend-${i}`} {...item} />
          ))}
        </div>
      </div>

      <div className="tech-gap"></div>

      {/* =========================
          BACKEND
      ========================= */}

      <div className="slider backend-slider">
        <div className="track right">
          {[...backend, ...backend, ...backend].map((item, i) => (
            <Card key={`backend-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
