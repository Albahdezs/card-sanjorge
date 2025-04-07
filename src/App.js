import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <CardSanJorge />
      <Footer />
    </div>
  );
}

function CardSanJorge() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={`card ${open ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <FrontPage />
        </div>
        <div className="card-back">
          <InsideCard />
        </div>
      </div>
    </div>
  );
}

function FrontPage() {
  return (
    <div className="front">
      <h1>23 de abril de 2025</h1>
      <img src="/flowers/imgFront.jpg" alt="Claveles de San Jorge" />
      <p className="flip">Girar ➡️</p>
    </div>
  );
}

function InsideCard() {
  return (
    <div className="inside">
      <h2>¡Feliz día de Aragón</h2>
      <p>En este día de San Jorge, te deseo alegría, paz y un buen libro.</p>
      <p>¡Un abrazo!</p>
      <p className="rose">🌹</p>
      <img src="/flowers/flag.png" alt="Bandera de Aragón" className="flag" />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>
        Creado por{" "}
        <a
          href="https://albahernandez.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alba Hernández
        </a>
        .
        <a
          href="https://www.linkedin.com/in/alba-hern%C3%A1ndez-serrano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/flowers/linkedin.svg"
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
      </p>
    </div>
  );
}
