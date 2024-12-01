import { useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { Drawer } from "@mui/material";
import styles from "./TicketList.module.css";

const TicketList = (props: any) => {
  const [open, isOpen] = useState<boolean>(false);

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
          <div className="w-[400px] bg-[red] h-full"></div>
        </Drawer>
      </List>
    </div>
  );
};

export default TicketList;
