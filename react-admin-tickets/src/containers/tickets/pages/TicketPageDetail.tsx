import {
  Show,
  SimpleShowLayout,
  TopToolbar,
  useShowContext,
  useTranslate,
} from "react-admin";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Detail = (props: any) => {
  const { record, isLoading }: any = useShowContext();
  const t = useTranslate();

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!record) {
    return <div className="text-center py-8">No data available</div>;
  }

  return (
    <>
      <div className="p-6 bg-white rounded-lg">
        <div className="space-y-6">
          <h2 className="text-xl font-medium">{record.title}</h2>

          {/* NORMAL INFOR */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2 items-center">
              <AccessTimeIcon fontSize="small" />
              {record.createdAt && (
                <span>{new Date(record.createdAt).toLocaleString()}</span>
              )}
              {!record.createdAt && <span> // </span>}
            </div>
            <div className="flex gap-2">
              <p>{record.status}</p>
              <p>{record.priority}</p>
            </div>
          </div>

          <div className="p-2 bg-slate-50 flex gap-2 w-full">
            {/* REPORTER */}
            <div>
              <p className="mb-2 font-semibold">Reporter:</p>
              {record.reporter && (
                <ListItem
                  className="!py-0 !items-start"
                  sx={{ display: "flex" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={record.reporter.name}
                      src={record.reporter?.avatar? record.reporter?.avatar : "https://img.freepik.com/premium-vector/profile-icon-male-avatar_48369-2112.jpg?w=826"}
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
              <p className="mb-2 font-semibold">Assigned:</p>
              {record.assignee && (
                <ListItem
                  className="!py-0 !items-start"
                  sx={{ display: "flex" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={record.assignee.name}
                      src={record.assignee?.avatar? record.assignee?.avatar : "https://img.freepik.com/premium-vector/profile-icon-female-avatar_48369-2119.jpg?w=826"}
                    />
                  </ListItemAvatar>
                  <div className="">
                    <ListItemText primary={record.assignee.name} />
                    <ListItemText primary={record.assignee.email} />
                    <ListItemSecondaryAction
                      sx={{
                        transform: "unset",
                        top: "unset",
                        left: "unset",
                        position: "unset",
                      }}
                    >
                      Assign to me
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
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: record.description }}
            />
          </div>

          {/* Comments */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Comments</h2>
            {record.comments && record.comments.length > 0 ? (
              <ul className="mt-2 list-disc pl-5">
                {record.comments.map((comment: string, index: number) => (
                  <li key={index} className="text-gray-900">
                    {comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No comments available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const ToolBarTop = (props: any) => {
  return <TopToolbar className="!min-h-0"></TopToolbar>;
};

const TicketPageDetail = (props: any) => {
  return (
    <Show {...props} actions={<ToolBarTop />}>
      <SimpleShowLayout>
        <Detail />
      </SimpleShowLayout>
    </Show>
  );
};

export default TicketPageDetail;
