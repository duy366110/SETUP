import { useEffect, useState } from "react";
import {
  Show,
  SimpleShowLayout,
  TopToolbar,
  Link,
  useShowContext,
  useTranslate,
  useGetList,
  useReference,
  useRedirect,
} from "react-admin";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ShortTextIcon from "@mui/icons-material/ShortText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Comments } from "@/components/comments/Comments";

const Detail = (props: any) => {
  const { record, isLoading }: any = useShowContext();
  const { data: statuses, isLoading: isLoadingStatus }: any =
    useGetList<any>("statuses");
  const { data: priorities, isLoading: isLoadingPriority }: any =
    useGetList<any>("priorities");
  const { referenceRecord: assigne, isLoading: isLoadingAssignes } =
    useReference<any>({
      reference: "assignes",
      id: record.assignee,
    });
  const t = useTranslate();
  const redirect = useRedirect();

  const [status, setStatus] = useState<any>(null);
  const [priority, setPriority] = useState<any>(null);
  const [assignee, setAssignee] = useState<any>(null);

  useEffect(() => {
    if (statuses && statuses.length > 0) {
      setStatus(statuses.find((status: any) => status.id === record.status));
    }
  }, [statuses]);

  useEffect(() => {
    if (priorities && priorities.length > 0) {
      setPriority(
        priorities.find((priority: any) => priority.id === record.priority),
      );
    }
  }, [priorities]);

  useEffect(() => {
    if (assigne) {
      setAssignee(assigne);
    }
  }, [assigne]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!record) {
    return <div className="text-center py-8">No data available</div>;
  }

  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="space-y-6">
          <h2 className="flex gap-2 items-center text-lg">
            <ArrowBackIosNewIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => redirect("/tickets")}
            />
            <span>{record.title}</span>
          </h2>

          {/* NORMAL INFOR */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex gap-2 items-center">
              <AccessTimeIcon fontSize="small" />
              {record.createdAt && (
                <span>{new Date(record.createdAt).toLocaleString()}</span>
              )}
              {!record.createdAt && <span> // </span>}
            </div>
            <div className="flex items-center gap-4">
              {status && (
                <div
                  style={{ backgroundColor: status.color }}
                  className="flex items-center gap-2 p-2 rounded text-white"
                >
                  <p>{status.name}</p>
                  <DoneAllIcon fontSize="small" />
                </div>
              )}

              {priority && (
                <div
                  style={{ backgroundColor: priority.color }}
                  className="flex items-center gap-2 p-2 rounded text-white"
                >
                  <p>{priority.name}</p>
                  <ShortTextIcon fontSize="small" />
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 flex flex-col md:flex-row gap-2 w-full">
            {/* REPORTER */}
            <div>
              <p className="mb-2 text-base font-semibold">
                {t("ticket.common.reporter")} :
              </p>
              {record.reporter && (
                <ListItem
                  className="!py-0 !items-start"
                  sx={{ display: "flex" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={record.reporter.name}
                      src={
                        record.reporter?.avatar
                          ? record.reporter?.avatar
                          : "https://img.freepik.com/premium-vector/profile-icon-male-avatar_48369-2112.jpg?w=826"
                      }
                    />
                  </ListItemAvatar>
                  <div>
                    <ListItemText primary={record.reporter.name} />
                    <ListItemText primary={record.reporter.email} />
                  </div>
                </ListItem>
              )}

              {!record.reporter && (
                <p className="text-sm text-red-500 font-medium">
                  Chưa cập nhật
                </p>
              )}
            </div>

            {/* ASSIGNED */}
            <div>
              <p className="mb-2 text-base font-semibold">
                {t("ticket.common.assignee")} :
              </p>
              {assignee && (
                <ListItem
                  className="!py-0 !items-start"
                  sx={{ display: "flex" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={assignee.name}
                      src={
                        assignee?.avatar
                          ? assignee?.avatar
                          : "https://img.freepik.com/premium-vector/profile-icon-female-avatar_48369-2119.jpg?w=826"
                      }
                    />
                  </ListItemAvatar>
                  <div className="">
                    <ListItemText primary={assignee.name} />
                    <ListItemText primary={assignee.email} />
                    <ListItemSecondaryAction
                      sx={{
                        transform: "unset",
                        top: "unset",
                        left: "unset",
                        position: "unset",
                      }}
                    >
                      <Link to="/tickets">{t("common.assignToMe")}</Link>
                    </ListItemSecondaryAction>
                  </div>
                </ListItem>
              )}

              {!record.assignee && (
                <p className="text-sm text-red-500 font-medium">
                  Chưa cập nhật
                </p>
              )}
            </div>
          </div>

          {/* LABEL */}
          <div className="flex gap-4 mb-4">
            {record.labels &&
              record.labels.length > 0 &&
              record.labels.map((label: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`
                    ${label === "bug" ? "!bg-[#FF6B6B] text-white" : ""}
                    ${label === "login" ? "!bg-[#4CAF50] text-white" : ""}
                    ${label === "backend" ? "!bg-[#607D8B] text-white" : ""}
                    ${label === "feature" ? "!bg-[#2196F3] text-white" : ""}
                    ${label === "frontend" ? "!bg-[#FFC107] text-white" : ""}
                    ${label === "UI/UX" ? "!bg-[#FF9800] text-white" : ""}
                    ${label === "performance" ? "!bg-[#8BC34A] text-white" : ""}
                    ${label === "database" ? "!bg-[#9C27B0] text-white" : ""}
                    ${label === "design" ? "!bg-[#E91E63] text-white" : ""}
                    ${label === "migration" ? "!bg-[#00BCD4] text-white" : ""}
                    ${label === "CSS" ? "!bg-[#3F51B5] text-white" : ""}
                    ${label === "authentication" ? "!bg-[#009688] text-white" : ""}
                    ${label === "documentation" ? "!bg-[#795548] text-white" : ""}
                    ${label === "API" ? "!bg-[#673AB7] text-white" : ""}
                    ${label === "security" ? "!bg-[#F44336] text-white" : ""}
                    ${label === "testing" ? "!bg-[#CDDC39] text-white" : ""}
                    relative w-fit bg-gray-200 rounded px-2 py-1
                `}
                  >
                    {label}
                    <div
                      className={`
                    ${label === "bug" ? "!bg-[#FF6B6B]" : ""}
                    ${label === "login" ? "!bg-[#4CAF50] text-white" : ""}
                    ${label === "backend" ? "!bg-[#607D8B] text-white" : ""}
                    ${label === "feature" ? "!bg-[#2196F3] text-white" : ""}
                    ${label === "frontend" ? "!bg-[#FFC107] text-white" : ""}
                    ${label === "UI/UX" ? "!bg-[#FF9800] text-white" : ""}
                    ${label === "performance" ? "!bg-[#8BC34A] text-white" : ""}
                    ${label === "database" ? "!bg-[#9C27B0] text-white" : ""}
                    ${label === "design" ? "!bg-[#E91E63] text-white" : ""}
                    ${label === "migration" ? "!bg-[#00BCD4] text-white" : ""}
                    ${label === "CSS" ? "!bg-[#3F51B5] text-white" : ""}
                    ${label === "authentication" ? "!bg-[#009688] text-white" : ""}
                    ${label === "documentation" ? "!bg-[#795548] text-white" : ""}
                    ${label === "API" ? "!bg-[#673AB7] text-white" : ""}
                    ${label === "security" ? "!bg-[#F44336] text-white" : ""}
                    ${label === "testing" ? "!bg-[#CDDC39] text-white" : ""}
                    absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rotate-45
                `}
                    ></div>
                  </div>
                );
              })}
          </div>

          {/* DESC */}
          <div>
            <h3 className="text-base font-semibold mb-2">
              {t("ticket.common.description")}
            </h3>
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: record.description }}
            />
          </div>

          {/* FROM COMMENT */}
          <Comments record={record} />
        </div>
      </div>
    </>
  );
};

const ToolBarTop = (props: any) => {
  return <TopToolbar className="!min-h-0"></TopToolbar>;
};

const TicketPageDetail = (props: any) => {
  const t = useTranslate();

  return (
    <Show
      className="md:!p-4"
      {...props}
      actions={<ToolBarTop />}
      title={t("ticket.page.show")}
    >
      <SimpleShowLayout>
        <Detail />
      </SimpleShowLayout>
    </Show>
  );
};

export default TicketPageDetail;
