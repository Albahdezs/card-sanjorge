import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
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
      <img
        src={`${process.env.PUBLIC_URL}/flowers/imgFront.jpg`}
        alt="Claveles de San Jorge"
      />
      <p className="flip">Girar ➡️</p>
    </div>
  );
}

function InsideCard() {
  const [copied, setCopied] = useState(false);

  function handleCopy(e) {
    e.stopPropagation();
    navigator.clipboard.writeText("¡Feliz día de Aragón!");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="inside">
      <h2>¡Feliz día de Aragón</h2>
      <p>En este día de San Jorge, te deseo alegría, paz y un buen libro.</p>
      <p>¡Un abrazo!</p>
      <p className="rose">🌹</p>
      <img
        src={`${process.env.PUBLIC_URL}/flowers/flag.png`}
        alt="Bandera de Aragón"
        className="flag"
      />

      <button className="share-btn" onClick={handleCopy}>
        📋 Copiar enlace
      </button>
      {copied && <p className="copied-msg">¡Enlace copiado!</p>}
    </div>
  );
}

function Footer() {
  const url = window.location.href;
  const shareText = "¡Feliz día de Aragón! 🌹";

  return (
    <div className="footer">
      <WhatsappShareButton url={url} title={shareText} separator=" ">
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <FacebookShareButton url={url} quote={shareText}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <p>
        Creado por{" "}
        <a
          href="https://albahernandez.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alba Hernández
        </a>
        <a
          href="https://www.linkedin.com/in/alba-hern%C3%A1ndez-serrano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/flowers/linkedin.svg`}
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
        <a
          href="https://www.youtube.com/@albahdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/flowers/youtube.svg`}
            alt="YouTube"
            className="youtube-icon"
          />
        </a>
        <a
          href="https://github.com/Albahdezs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/flowers/github.svg`}
            alt="GitHub"
            className="github-icon"
          />
        </a>
      </p>
    </div>
  );
}
