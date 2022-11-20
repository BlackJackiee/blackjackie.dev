import { motion } from "framer-motion";

export default function Intro(props) {
  return (
    <section
      className="text-white text-center"
      style={{ marginTop: "120px" }}
      id="intro"
    >
      <div className="container-md">
        <div className="col-md-12 text-center">
          <h1 className="display-2 fw-bold my-0">PORTFOLIO</h1>
          <h1 className="display-2 fw-bold">COMING SOON</h1>
        </div>
      </div>
      <div className="container mt-3 mb-3">
        <div className="row justify-content-center">
          <div className="col-8 col-md-5 col-lg-4">
            <h6
              className="fw-normal my-4 lead"
              style={{ color: "var(--WhiteSecondary)" }}
            >
              Welcome To My Soon To Be Portfolio Page! I am currently in the
              process of building it up from scratch! Scroll down for more info!
            </h6>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <a
            className="col-4 col-md-3 col-lg-2 nav-link"
            href="https://discordapp.com/users/330929694859984896"
            target="_blank"
          >
            <motion.button
              type="button"
              className="btn fw-bold text-white px-3 py-3"
              style={{ background: "var(--PrimaryGradient)" }}
              whileHover={{
                scale: 1.13,
                backgroundColor: "var(--BackgroundLight)",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "var(--BackgroundDark)",
              }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <i className="bi tex bi-discord me-2" aria-hidden="true"></i>
              Contact Me!
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
