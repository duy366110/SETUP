import React from "react";
import Button from "@mui/material/Button";
import { ButtonsProps } from "./Buttons.type";

const Buttons: React.FC<ButtonsProps> = ({
  children = null,
  className = "",
  click,
}) => {
  return (
    <Button className={`flex items-center gap-2 ${className}`} onClick={click}>
      {children && children}
    </Button>
  );
};

export default Buttons;
