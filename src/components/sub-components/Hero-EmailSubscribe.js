import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";

const HeroEmailSub = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="SubEmail-Container">
      <div className="SubEmail-Container2">
        <form
          className="subEmail-Hero-Container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="SubEmail-LogoContainer">
            <AiOutlineMail
              style={{
                fontSize: 36,
                verticalAlign: "middle",
              }}
            />
          </div>
          <div className="formField-Container">
            Subscribe for all content updates!
            <input
              className="inputField27"
              name="email"
              placeholder="Enter your email"
              type="email"
              ref={register}
            />
            <input className="inputField28" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroEmailSub;
