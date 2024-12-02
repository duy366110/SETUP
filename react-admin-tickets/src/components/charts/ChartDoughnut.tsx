import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Card, CardContent, useTheme } from "@mui/material";
import { H2Theme } from "../themes/HTheme";

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);
interface ChartDoughnutProps {
  title?: string;
  data?: any;
}

const ChartDoughnut = (props: ChartDoughnutProps) => {
  const theme = useTheme();

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: theme.palette.mode === "dark" ? "#fff" : "#333",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Card className="w-full">
      <CardContent className="!px-0">
        <H2Theme className="border-b border-slate-200 !text-lg !font-semibold text-slate-700 px-[16px] pb-4 mb-4">
          {props.title}
        </H2Theme>
        <div className="flex justify-center h-[650px] px-[16px] w-full">
          <Doughnut data={props.data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartDoughnut;
