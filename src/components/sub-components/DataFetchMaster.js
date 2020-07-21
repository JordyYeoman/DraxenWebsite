import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DataFetchMaster = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Draxen 25");
      }, 4000);
    });
    getName.then((result) => {
      setName(result);
    });
  }, []);

  if (!name) {
    return (
      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ loop: Infinity, ease: "easeInOut", duration: 1 }}
          exit={{ opacity: 0, height: 12, width: 0 }}
          className="loadingStateText"
        >
          Loading...
        </motion.h2>
      </AnimatePresence>
    );
  }

  return (
    <div>
      <motion.h2
        initial={{ height: 2, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 2 }}
        className="loadingStateText"
      >
        {name}
      </motion.h2>
    </div>
  );
};

export default DataFetchMaster;
