import { motion } from "framer-motion";

export default function SocialBttn(props) {
  const Icon =
    props.src !== undefined ? (
      <img
        src={props.src}
        aria-hidden="true"
        style={{ transform: "scale(0.65)" }}
      />
    ) : (
      <i className={`fs-1 ${props.IconPath}`} aria-hidden="true"></i>
    );

  return (
    <a href={props.HrefLink} target="_blank">
      <motion.div
        className="mx-auto btn-square-md"
        type="button"
        whileHover={{ scale: 1.13, backgroundColor: "var(--BackgroundLight)" }}
        whileTap={{ scale: 0.9, backgroundColor: "var(--BackgroundDark)" }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          backgroundColor: "var(--BackgroundDark)",
          color: "#B8B6B1",
        }}
      >
        {Icon}
      </motion.div>
    </a>
  );
}
