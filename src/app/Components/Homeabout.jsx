import  "./Homeabout.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function index() {
  const phrase =
    "As an experienced Frontend Developer, I've honed my abilities in crafting user-friendly, interactive websites. I have a keen interest in responsive design and stay updated with the latest industry trends.";
  const description = useRef(null);
  const isInView = useInView(description);

  const slideUp = {
    initial: {
      y: "100%",
    },

    open: (i) => ({
      y: "0%",

      transition: { duration: 0.5, delay: 0.01 * i },
    }),

    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },

    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },

    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={description} className="description">
      <div className="body">
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span className="mask">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          I relish the challenge of creating web applications from the ground up
          and watching them come to life in the browser.
        </motion.p>
      </div>
    </section>
  );
}
