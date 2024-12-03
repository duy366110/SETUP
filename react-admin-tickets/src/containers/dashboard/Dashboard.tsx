import { useMemo } from "react";
import { useTranslate } from "react-admin";
import { Card, CardContent, Typography } from "@mui/material";
import ChartBar from "@/components/charts/ChartBar";
import ChartDoughnut from "@/components/charts/ChartDoughnut";
import {
  deviceDataAccess,
  transactionData,
  RevenueAndFinanceData,
  systemPerformanceData,
} from "./constants/chart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styles from "./Dashboard.module.css";

const Dashboard = (props: any) => {
  const translate = useTranslate();
  const stats = useMemo(() => {
    return [
      {
        title: translate("dashboard.stat.customUsing"),
        value: "10,813",
        color: "#007bff",
        bg: "linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)",
      },
      {
        title: translate("dashboard.stat.totalTransactionInMonth"),
        value: "3,435",
        color: "#dc3545",
        bg: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      },
      {
        title: translate("dashboard.stat.transactionSuccess"),
        value: "31.8%",
        color: "#fd7e14",
        bg: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
      },
      {
        title: translate("dashboard.stat.amountReceived"),
        value: "121,529",
        color: "#28a745",
        bg: "linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)",
      },
    ];
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 mt-20 md:mt-4">
      <div className="col-span-12">
        <div className="grid grid-cols-12 items-stretch gap-4">
          {stats.map((stat, index) => {
            return (
              <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-full">
                <Card
                  className={`${styles["tast-card"]} h-full`}
                  style={{
                    background: `
                        ${stat.bg}
                    `,
                    color: "#fff",
                  }}
                >
                  <CardContent className="flex flex-col justify-between h-full !pb-[10px]">
                    <div>
                      <Typography variant="h5" component="div" gutterBottom>
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" component="div">
                        {stat.value}
                      </Typography>
                    </div>
                    <div className="border-t flex items-center justify-end pt-2">
                      <p className="flex items-center gap-4 cursor-pointer">
                        <span>{translate("dashboard.stat.detail")}</span>
                        <ArrowCircleRightIcon />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-12">
        <ChartBar
          data={deviceDataAccess}
          title={translate("dashboard.chart.access")}
        />
      </div>

      <div className="col-span-12">
        <ChartBar
          data={transactionData}
          title={translate("dashboard.chart.transaction")}
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <ChartDoughnut
          data={RevenueAndFinanceData}
          title={translate("dashboard.chart.RevenueAndFinance")}
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <ChartDoughnut
          data={systemPerformanceData}
          title={translate("dashboard.chart.systemPerformance")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
