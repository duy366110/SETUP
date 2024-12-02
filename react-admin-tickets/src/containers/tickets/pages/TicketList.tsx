import { useState, useEffect } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";

import { RootState } from "@/store";
import TicketViewEdit from "../view/TicketViewEdit";
import styles from "./TicketList.module.css";

const TicketList = (props: any) => {
  const mediaQuery = useSelector<RootState>((state: any) => state.mediaQuery);
  const [open, isOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(mediaQuery);
  }, [mediaQuery])

  return (
    <div>
      <List
        title="Ticketsss"
        sx={{
          flexGrow: 1,
          transition: (theme: any) =>
            theme.transitions.create(["all"], {
              duration: theme.transitions.duration.enteringScreen,
            }),
          marginRight: !!open ? "400px" : 0,
        }}
      >
        <Datagrid
          rowClick={(id, resource) => {
            isOpen(!open);
            return false;
          }}
        >
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
          <TextField source="id" />
        </Datagrid>
        <Drawer
          className={styles["drawer-wrapper"]}
          open={open}
          variant="persistent"
          anchor="right"
          sx={{ zIndex: 5 }}
        >
          <div className="w-[400px] h-full mt-[60px]">
            <TicketViewEdit id={1} />
          </div>
        </Drawer>
      </List>
    </div>
  );
};

export default TicketList;
