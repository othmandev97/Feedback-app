import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Card = ({ children }) => {
  //frame motion animation
  const cardFeedback = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={cardFeedback}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        className="feedback-wrapper bg-slate-200 text-zinc-900 p-4 rounded-lg relative mt-6 shadow-lg"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
