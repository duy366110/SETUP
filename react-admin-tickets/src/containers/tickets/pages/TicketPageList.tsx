import { useState, useEffect } from "react";
import {
  List,
  DatagridConfigurable,
  DateField,
  SearchInput,
  DateInput,
  NullableBooleanInput,
  SelectInput,
  useRedirect,
  useTranslate,
  useGetList,
} from "react-admin";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

import { RootState } from "@/store";
import { UtilsActions } from "@/containers/utils/UtilsActions";
import {
  FieldFunction,
  RenderFieldFunction,
} from "@/components/fileds/FieldFunction";
import { RenderFieldText } from "@/containers/utils/renderFieldText";
import TicketViewEdit from "../view/TicketViewEdit";
import TicketViewListCardMobile from "../view/TicketViewListCardMobile";
import styles from "./TicketPageList.module.css";

const TicketPageList = (props: any) => {
  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );

  const { data: statuses, isLoading: isLoadingStatus }: any = useGetList<any>("statuses");
  const { data: priorities, isLoading: isLoadingPriority }: any = useGetList<any>("priorities");

  const redirect = useRedirect();
  const translate = useTranslate();
  const [isRightViewEdit, setIsRightViewEdit] = useState<boolean>(false);
  const [idTicket, setIdTicket] = useState<any>(-1);

  const visitorFilters = [
    <SearchInput source="q" alwaysOn />,
    <DateInput
      source="createdAt"
      label={translate("ticket.common.createdAt")}
    />,
    <NullableBooleanInput source="has_ordered" />,
    <NullableBooleanInput source="has_newsletter" defaultValue />,
    <SelectInput
      {...props}
      source="groups"
      translateChoice
      choices={[{ id: 1, name: "admin" }]}
    />,
  ];

  useEffect(() => {
    if (mediaQuery.md) {
      setIsRightViewEdit(false);
    }
  }, [mediaQuery]);

  return (
    <div className="grid grid-cols-12">
      <List
        title={translate("ticket.title")}
        filters={visitorFilters}
        sort={{ field: "title", order: "DESC" }}
        perPage={25}
        actions={<UtilsActions />}
        className={`${isRightViewEdit ? "col-span-9" : "col-span-12"}`}
        sx={{
          flexGrow: 1,
          transition: (theme: any) =>
            theme.transitions.create(["all"], {
              duration: theme.transitions.duration.enteringScreen,
            }),
          "& .MuiTableCell-root": {
            display: {
              xs: "none",
              md: "table-cell",
            },
          },
        }}
      >
        {mediaQuery.md && <TicketViewListCardMobile />}
        <DatagridConfigurable
          rowClick={(id, resource, record) => {
            if (!mediaQuery.md) {
              setIdTicket(id);
              setIsRightViewEdit(
                idTicket < 0 || id === idTicket ? !isRightViewEdit : true,
              );
              return false;
            }
            redirect(`/tickets/${id}`);
            return false;
          }}
          sx={{
            "& .column-groups": {
              md: { display: "none" },
              lg: { display: "table-cell" },
            },
          }}
        >
          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent !line-clamp-2 !max-w-[130px]"
            label={translate("ticket.common.title")}
            field="title"
            source="title"
            types="custom"
            customContent={(record: any) => {
              return (
                <p
                  onClick={(event: any) => {
                    event.stopPropagation();
                    redirect(`/tickets/${record.id}/show`);
                  }}
                  className="flex items-start gap-2 py-1 !line-clamp-2 max-w-[250px]"
                >
                  {record.title}
                </p>
              );
            }}
            render={RenderFieldFunction}
          />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label={translate("ticket.common.status")}
            field="status"
            source="status"
            types="custom"
            customContent={(record: any) => {
              return RenderFieldText(
                statuses && statuses.length ? statuses.find((status: any) => status.id === record.status) : null,
                "name",
              );
            }}
            render={RenderFieldFunction}
          />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label={translate("ticket.common.priority")}
            field="priority"
            source="priority"
            types="custom"
            customContent={(record: any) => {
              return RenderFieldText(
                priorities && priorities.length? priorities.find((priority: any) => priority.id === record.priority) : null,
                "name",
              );
            }}
            render={RenderFieldFunction}
          />

          <FieldFunction
            customStyles="flex items-center capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent"
            label={translate("ticket.common.assignee")}
            field="assignee"
            source="assignee"
            types="custom"
            customContent={(record: any) => {
              if (!record.assignee) {
                return <p className="py-1">Not assignee</p>;
              }
              return (
                <div className="flex items-start gap-2 py-1">
                  <div>
                    <AttachEmailIcon fontSize="small" />
                  </div>
                  <p className="flex flex-col gap-1">
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
            label={translate("ticket.common.reporter")}
            field="reporter"
            source="reporter"
            types="custom"
            customContent={(record: any) => {
              if (!record.reporter) {
                return <p className="py-1">Not Reporter</p>;
              }
              return (
                <div className="flex items-start gap-2 py-1">
                  <div>
                    <AttachEmailIcon fontSize="small" />
                  </div>
                  <p className="flex flex-col gap-1">
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
            label={translate("ticket.common.label")}
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
                    return <div key={label}>{label}</div>;
                  })}
                </div>
              );
            }}
            render={RenderFieldFunction}
          />

          <DateField
            source="createdAt"
            label={translate("ticket.common.createdAt")}
          />
        </DatagridConfigurable>

        {idTicket && idTicket >= 0 && (
          <Drawer
            className={styles["drawer-wrapper"]}
            open={isRightViewEdit}
            variant="persistent"
            anchor="right"
            sx={{ zIndex: 5 }}
          >
            <div className="w-[350px] h-full mt-[60px]">
              <TicketViewEdit
                id={idTicket}
                closeViewEdit={() => setIsRightViewEdit(false)}
              />
            </div>
          </Drawer>
        )}
      </List>
    </div>
  );
};

export default TicketPageList;
