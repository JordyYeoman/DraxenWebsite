import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";

const HeroEmailSub = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "35vw" }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="SubEmail-Container"
    >
      <div className="SubEmail-Container2">
        <form
          className="subEmail-Hero-Container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="SubEmail-LogoContainer"
          >
            <AiOutlineMail
              style={{
                fontSize: 36,
                verticalAlign: "middle",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="formField-Container"
          >
            <span className="frmField-Sub">
              Subscribe for all content updates!
            </span>
            <input
              className="inputField27"
              name="email"
              placeholder="Enter your email"
              type="email"
              ref={register}
            />
            <input className="inputField28" type="submit" />
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default HeroEmailSub;
