import React from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import moment from "moment";
const Info = ({ data, toggle }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      delay: 3000,
    },
  });
  if (data == null) {
    return null;
  }
  console.log("cfdgfdg", data);
  return (
    <motion.div
      key={toggle}
      animate={{ x: -50, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="infobox"
    >
      <ul>
        <li>
          <h3>Temperature </h3> : {data.main.temp}
        </li>
        <li>
          <h3>Visibility </h3> : {data.visibility / 1000} kms
        </li>
        <li>
          <h3>Humidity </h3> : {data.main.humidity} %
        </li>
        <li>
          <h3>Sunrise </h3> :{" "}
          {moment(data.sys.sunrise * 1000).format("hh:mm a")}
        </li>
        <li>
          <h3>Sunset </h3> : {moment(data.sys.sunset * 1000).format("hh:mm a")}
        </li>
      </ul>
    </motion.div>
  );
};

export default Info;
