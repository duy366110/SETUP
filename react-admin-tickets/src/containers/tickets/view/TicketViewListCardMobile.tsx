import { useEffect } from "react";
import {
  RecordContextProvider,
  useListContext,
  useRecordContext,
} from "react-admin";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardRecordDetail = (props: any) => {
  const record: any = useRecordContext();

  useEffect(() => {
    console.log(record);
  }, [record]);

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
        <div className="flex gap-2">
          {record.labels &&
            record.labels.length > 0 &&
            record.labels.map((label: any) => {
              return <span>{label}</span>;
            })}
        </div>

        <div>
          <h3>Người Người báo cáo</h3>
          {record.reporter && (
            <div className="px-2">
              <p>{record.reporter.email}</p>
              <p>{record.reporter.name}</p>
            </div>
          )}

          {!record.assignee && <p className="px-2">Chưa cập nhật</p>}
        </div>

        <div>
          <h3>Người phụ trách</h3>
          {record.assignee && (
            <div className="px-2">
              <p>{record.assignee.email}</p>
              <p>{record.assignee.name}</p>
            </div>
          )}

          {!record.assignee && <p className="px-2">Chưa cập nhật</p>}
        </div>
      </CardContent>
    </Card>
  );
};

const TicketViewListCardMobile = () => {
  const { data, isLoading }: any = useListContext<any>();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
