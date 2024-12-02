import { useState, useEffect } from "react";
import { List, Datagrid, TextField, useRedirect } from "react-admin";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";

import { RootState } from "@/store";
import TicketViewEdit from "../view/TicketViewEdit";
import styles from "./TicketPageList.module.css";

const TicketPageList = (props: any) => {
  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );
  const redirect = useRedirect();
  const [isRightViewEdit, setIsRightViewEdit] = useState<boolean>(false);
  const [idTicket, setIdTicket] = useState<any>(-1);

  useEffect(() => {
    if (mediaQuery.md) {
      setIsRightViewEdit(false);
    }
  }, [mediaQuery]);

  return (
    <div>
      <List
        title="Ticketsss"
        className="mt-10 lg:mt-0"
        sx={{
          flexGrow: 1,
          transition: (theme: any) =>
            theme.transitions.create(["all"], {
              duration: theme.transitions.duration.enteringScreen,
            }),
          marginRight: !!isRightViewEdit ? "400px" : 0,
        }}
      >
        <Datagrid
          rowClick={(id, resource) => {
            if (!mediaQuery.md) {
              setIdTicket(id);
              setIsRightViewEdit(idTicket < 0? !isRightViewEdit : true);
              return false;
            }
            redirect(`tickets/${idTicket}`);
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
        {idTicket && idTicket >= 0 && (
          <Drawer
            className={styles["drawer-wrapper"]}
            open={isRightViewEdit}
            variant="persistent"
            anchor="right"
            sx={{ zIndex: 5 }}
          >
            <div className="w-[400px] h-full mt-[60px]">
              <TicketViewEdit id={idTicket} />
            </div>
          </Drawer>
        )}
      </List>
    </div>
  );
};

export default TicketPageList;
