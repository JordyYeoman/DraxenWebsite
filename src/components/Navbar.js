import React from "react";
import NavbarMenu from "./sub-components/Navbar-menu";

const Navbar = (props) => {
  return (
    <div>
      <NavbarMenu toggle={props.toggle} isShowing={props.isShowing} />
    </div>
  );
};

export default Navbar;
