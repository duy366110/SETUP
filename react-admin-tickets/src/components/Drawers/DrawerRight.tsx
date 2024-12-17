import React from "react";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawersRightProps } from "./Drawers.type";
import { RootState } from "@/store";

const DrawerRight: React.FC<DrawersRightProps> = ({
  closeDrawer,
  children = null,
  open = false,
  title = "",
}) => {

  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );

  return (
    <Drawer className="relative" open={open} variant="persistent" anchor="right" sx={{ zIndex: 1 }}>
      <div className={`${mediaQuery.md ? "w-[100%] mt-[60px]" : "w-[350px] mt-[60px]"} h-full</CreateBase>`}>
        <h2 className="flex justify-between w-full px-4 pt-4">
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
