import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutside } from "react-recipes";
import { motion } from "framer-motion";

const Modal = ({ isShowing, hide }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => hide(true));

  const modalContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0.5, top: "-100vh" }}
            animate={{ top: 0 }}
          />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal" ref={ref}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 1.5,
                  },
                }}
                className="modal-header"
              >
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </motion.div>
              <motion.ul
                variants={modalContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={menuItem}>Home</motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  Youtube
                </motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  About
                </motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  Business
                </motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  Facebook
                </motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  LinkedIn
                </motion.li>
                <motion.li variants={menuItem} className="notHoveredModalPopup">
                  Contact
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
