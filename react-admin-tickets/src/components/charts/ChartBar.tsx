import { Card, CardContent, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { H2Theme } from "../themes/HTheme";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

interface ChartBarProps {
  title?: string;
}

const ChartBar = (props: ChartBarProps) => {
  const theme = useTheme();

  const data = useMemo(() => {
    return {
      labels: ["19:00", "19:35", "20:00", "20:35", "21:00", "21:35"],
      datasets: [
        {
          label: "Dataset 1",
          data: [0, 0, 70, 40, 90, 20],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: [0, 20, 50, 60, 80, 15],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
        {
          label: "Dataset 3",
          data: [40, 50, 20, 0, 60, 17],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          label: "Dataset 3",
          data: [40, 50, 20, 0, 60, 10],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    };
  }, []);

  const options: any = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom" as const,
          display: true,
          labels: {
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        title: {
          display: false,
          text: "Stacked Bar Chart Example",
          color: theme.palette.mode === "dark" ? "#fff" : "#333",
        },
        label: {
          color: "red",
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
          }
        },
      },
    };
  }, [theme.palette.mode]);

  return (
    <Card className="w-full">
      <CardContent className="!px-0">
        <H2Theme className="border-b border-slate-200 !text-lg !font-semibold text-slate-700 px-[16px] pb-4 mb-4">
          {props.title}
        </H2Theme>
        <div className="h-[220px] px-[16px]">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartBar;
