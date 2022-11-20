import "./Navbar.css";
import "/Colours.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar mt-2 navbar-dark navbar-expand-md sticky-top text-center"
      style={{
        backgroundColor: "rgb(0, 0, 0, .65)",
        backdropFilter: "blur(15px)",
      }}
    >
      <div className="container-md">
        <a href="#intro" className="navbar-brand">
          <span className="fw-bold fs-1 text-white">
            <img
              className="rounded-circle me-1"
              src="/Monke.png"
              alt="Monkey Icon"
              height="40"
            />
            BLACKJACKIE
          </span>
        </a>
        {/* Toggle Navbar For Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="navbar-item my-auto">
              <a href="#intro" className="nav-link">
                Home
              </a>
            </li>
            <li className="navbar-item my-auto">
              <a href="#about" className="nav-link">
                About Me
              </a>
            </li>
            <li className="navbar-item my-auto">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="navbar-item my-auto">
              <a
                href="https://discordapp.com/users/330929694859984896"
                target="_blank"
                className="nav-link"
              >
                <motion.button
                  type="button"
                  className="fw-semibold btn btn-sm text-white fs-5 py-1 py-lg-2 px-2"
                  style={{ background: "var(--PrimaryGradient)" }}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "var(--BackgroundLight)",
                  }}
                  whileTap={{
                    scale: 0.9,
                    backgroundColor: "var(--BackgroundDark)",
                  }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                >
                  <i className="bi bi-discord me-2" aria-hidden="true"></i>
                  Contact Me
                </motion.button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
