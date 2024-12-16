import React from "react";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawersRightProps } from "./Drawers.type";

const DrawerRight: React.FC<DrawersRightProps> = ({
  closeDrawer,
  children = null,
  open = false,
  title = "",
}) => {
  return (
    <Drawer className="relative" open={open} variant="persistent" anchor="right" sx={{ zIndex: 1 }}>
      <div className="w-[350px] h-full mt-[60px] p-4">
        <h2 className="flex justify-between w-full">
          <span>{title}</span>
          <CloseIcon
            fontSize="small"
            className="cursor-pointer"
            onClick={closeDrawer}
          />
        </h2>
        {children && children}
      </div>
    </Drawer>
  );
};

export default DrawerRight;
