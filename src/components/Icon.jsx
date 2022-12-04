import React from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
const Icon = ({ climate, icon, toggle }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      delay: 3000,
    },
  });
  if (climate == "") {
    return null;
  }

  return (
    <motion.div
      key={toggle}
      animate={{ x: 50, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="iconbox"
    >
      <h3>{climate}</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`}></img>
    </motion.div>
  );
};

export default Icon;
