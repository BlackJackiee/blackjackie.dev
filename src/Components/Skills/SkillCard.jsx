import "/Colours.css";
import { motion } from "framer-motion";

export default function SkillCard(props) {
  return (
    <div
      className="card rounded-4"
      style={{ backgroundColor: "var(--SkillBackground)" }}
    >
      {/* Card Image */}
      <div className="card-body py-5 justify-content-center">
        <motion.div
          className="mx-auto btn-square-lg rounded-5"
          type="button"
          whileHover={{
            scale: 1.13,
            backgroundColor: "var(--BackgroundLight)",
          }}
          whileTap={{ scale: 0.9, backgroundColor: "var(--BackgroundDark)" }}
          transition={{ ease: "easeOut", duration: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            backgroundColor:
              props.Highlight === undefined
                ? "var(--BackgroundSecondary)"
                : "var(--PrimaryGradient)",
            background:
              props.Highlight === undefined
                ? "var(--BackgroundSecondary)"
                : "var(--PrimaryGradient)",
            color: "#B8B6B1",
          }}
        >
          <img
            src={`src/Components/Skills/Icons/${props.Title}.svg`}
            alt={`Icon Reprsenting ${props.Title}`}
            aria-hidden="true"
            style={{ transform: "scale(0.8)" }}
          />
        </motion.div>
      </div>

      {/* Card Title / Info */}
      <div className="card-body p-5 pt-0">
        <img
          className="img-fluid card-title mb-4"
          src={`src/Components/Skills/Titles/${props.Title}.svg`}
          alt={`Title Text Reprsenting ${props.Title}`}
        />
        <img
          className="img-fluid"
          src={`src/Components/Skills/Descriptions/${props.Title}.svg`}
          alt={`Description Text Reprsenting ${props.Title}`}
        />
      </div>
    </div>
  );
}
