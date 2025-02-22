// PageTransition.jsx
import { motion, AnimatePresence, delay } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./PageTransition.module.scss";

const PageTransition = ({ children }) => {
  const location = useLocation();

  const transitionVariants = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 3,
        ease: "easeInOut",
        delay: 10,
      },
    },
  };

  return (
    <div className="page-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="page-content"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;