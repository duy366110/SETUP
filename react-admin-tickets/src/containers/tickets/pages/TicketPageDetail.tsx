import {
  Show,
  SimpleShowLayout,
  TopToolbar,
  useShowContext,
} from "react-admin";
import { Card, CardContent, CardHeader, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const Detail = (props: any) => {
  const { record, isLoading }: any = useShowContext();

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
          {/* <CardHeader
            className="border-b"
            title={<p className="line-clamp-2 mb-2">{record.title}</p>}
            subheader={
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
            }
          /> */}

          <h2 className="text-2xl font-medium">{record.title}</h2>
          <div>
            <Button>
              <AttachFileIcon />
              <span>Attach</span>
            </Button>
            <Button>
            <LibraryAddCheckIcon />
              <span>Create subtask</span>
            </Button>
          </div>

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

          <div className="bg-gray-50 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">
              Người báo cáo
            </h3>

            {record.reporter ? (
              <div className="px-2 text-gray-700">
                <p className="mb-1">
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  {record.reporter.email}
                </p>
                <p>
                  <span className="font-medium text-gray-900">Họ tên:</span>{" "}
                  {record.reporter.name}
                </p>
              </div>
            ) : (
              <p className="px-2 text-sm text-gray-500 italic">
                Thông tin chưa được cung cấp
              </p>
            )}

            {!record.assignee && (
              <p className="px-2 mt-2 text-sm text-red-500 font-medium">
                Chưa cập nhật
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-1">
              Người phụ trách
            </h3>

            {record.assignee ? (
              <div className="px-2 text-gray-700">
                <p className="mb-1">
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  {record.assignee.email}
                </p>
                <p>
                  <span className="font-medium text-gray-900">Họ tên:</span>{" "}
                  {record.assignee.name}
                </p>
              </div>
            ) : (
              <p className="px-2 text-sm text-gray-500 italic">
                Thông tin chưa được cung cấp
              </p>
            )}

            {!record.assignee && (
              <p className="px-2 mt-2 text-sm text-red-500 font-medium">
                Chưa cập nhật
              </p>
            )}
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
