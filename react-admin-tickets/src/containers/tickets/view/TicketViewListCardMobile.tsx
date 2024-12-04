import {
  RecordContextProvider,
  useListContext,
  useRecordContext,
} from "react-admin";
import { Card, CardContent, CardHeader } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardRecordDetail = (props: any) => {
  const record: any = useRecordContext();

  return (
    <Card>
      <CardHeader
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
      />
      <CardContent>
        <div className="flex gap-4 mb-4">
          {record.labels &&
            record.labels.length > 0 &&
            record.labels.map((label: any) => {
              return (
                <div
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
      </CardContent>
    </Card>
  );
};

const TicketViewListCardMobile = () => {
  const { data, isLoading }: any = useListContext<any>();

  return (
    <div className="p-4 flex flex-col gap-4">
      {data &&
        data?.length > 0 &&
        data.map((ticket: any) => {
          return (
            <RecordContextProvider value={ticket}>
              <CardRecordDetail />
            </RecordContextProvider>
          );
        })}
    </div>
  );
};

export default TicketViewListCardMobile;
