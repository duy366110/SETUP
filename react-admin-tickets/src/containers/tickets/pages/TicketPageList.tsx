import { useState, useEffect } from "react";
import { List, Datagrid, TextField, DateField, useRedirect } from "react-admin";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PTheme from "@/components/themes/PTheme";

import { RootState } from "@/store";
import TicketViewEdit from "../view/TicketViewEdit";
import {
  FieldFunction,
  RenderFieldFunction,
} from "@/components/fileds/FieldFunction";
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
              setIsRightViewEdit(
                idTicket < 0 || id === idTicket ? !isRightViewEdit : true,
              );
              return false;
            }
            redirect(`tickets/${idTicket}`);
            return false;
          }}
        >
          <TextField className="!line-clamp-2 !max-w-[130px]" source="title" />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label="Status"
            field="status"
            source="status"
            types="custom"
            customContent={(record: any) => {
              return (
                <PTheme className={`
                  ${record.status === "In Progress"? "!text-[#fff] bg-[#559ee5]" : ""}
                  ${record.status === "Completed"? "!text-[#fff] bg-[#37a137]" : ""}
                  ${record.status === "Pending"? "!text-[#fff] bg-[#e3c839]" : ""}
                  ${record.status === "To Do"? "!text-[#fff] bg-[#4d6eb9]" : ""}
                  ${record.status === "Done"? "!text-[#fff] bg-[#37a137]" : ""}
                  ${record.status === "Close"? "!text-[#fff] bg-[#eb5a24]" : ""}
                  ${record.status === "Open"? "!text-[#fff] bg-[#42c6f1]" : ""}
                  min-h-[50px] h-full flex items-center px-2
                `}>
                  <span>{record.status}</span>
                </PTheme>
              );
            }}
            render={RenderFieldFunction}
          />

          <TextField source="priority" />
          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label="Assignee"
            field="assignee"
            source="assignee"
            types="custom"
            customContent={(record: any) => {
              if (!record.assignee) {
                return <p>Not assignee</p>;
              }
              return (
                <div className="flex items-start gap-2">
                  <div>
                    <AttachEmailIcon fontSize="small" />
                  </div>
                  <p className="flex flex-col gap-2">
                    <span>{record.assignee.email}</span>
                    <span>{record.assignee.name}</span>
                  </p>
                </div>
              );
            }}
            render={RenderFieldFunction}
          />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label="Reporter"
            field="reporter"
            source="reporter"
            types="custom"
            customContent={(record: any) => {
              if (!record.reporter) {
                return <p>Not Reporter</p>;
              }
              return (
                <div className="flex items-start gap-2">
                  <div>
                    <AttachEmailIcon fontSize="small" />
                  </div>
                  <p className="flex flex-col gap-2">
                    <span>{record.reporter.email}</span>
                    <span>{record.reporter.name}</span>
                  </p>
                </div>
              );
            }}
            render={RenderFieldFunction}
          />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label="Labels"
            field="labels"
            source="labels"
            types="custom"
            customContent={(record: any) => {
              if (!record.labels.length) {
                return <p>Not Reporter</p>;
              }
              return (
                <div className="flex items-start gap-2">
                  {record.labels.map((label: string) => {
                    return <div>{label}</div>;
                  })}
                </div>
              );
            }}
            render={RenderFieldFunction}
          />

          <DateField source="createdAt" />
        </Datagrid>

        {idTicket && idTicket >= 0 && (
          <Drawer
            className={styles["drawer-wrapper"]}
            open={isRightViewEdit}
            variant="persistent"
            anchor="right"
            sx={{ zIndex: 5 }}
          >
            <div className="w-[350px] h-full mt-[60px]">
              <TicketViewEdit id={idTicket} closeViewEdit={() => setIsRightViewEdit(false)}/>
            </div>
          </Drawer>
        )}
      </List>
    </div>
  );
};

export default TicketPageList;
