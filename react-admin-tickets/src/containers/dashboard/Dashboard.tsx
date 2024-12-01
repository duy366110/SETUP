import { Card, CardContent, Typography } from "@mui/material";
import ChartBar from "@/components/charts/ChartBar";
import ChartPie from "@/components/charts/ChartPie";
import styles from "./Dashboard.module.css";

const Dashboard = (props: any) => {
  const stats = [
    {
      title: "Total queries",
      value: "10,813",
      color: "#007bff",
      bg: "https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png",
    },
    {
      title: "Queries Blocked",
      value: "3,435",
      color: "#dc3545",
      bg: "https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png",
    },
    {
      title: "Percentage Blocked",
      value: "31.8%",
      color: "#fd7e14",
      bg: "https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png",
    },
    {
      title: "Domains on Adlists",
      value: "121,529",
      color: "#28a745",
      bg: "https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 mt-20 md:mt-4">
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-4">
          {stats.map((stat, index) => {
            return (
              <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <Card
                  className={`${styles["tast-card"]}`}
                  style={{
                    background: `
                        url("${stat.bg}") no-repeat right top,linear-gradient(${stat.color}, ${stat.color})
                    `,
                    color: "#fff",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-12">
        <ChartBar title="Lượt truy cập trong 24h" />
      </div>

      <div className="col-span-12">
        <ChartBar title="Lượt giao dịch trong 24h" />
      </div>

      <div className="col-span-12 md:col-span-6">
        <ChartPie title="Loại yêu cầu" />
      </div>

      <div className="col-span-12 md:col-span-6">
        <ChartPie title="Máy chủ hiện hành" />
      </div>
    </div>
  );
};

export default Dashboard;
