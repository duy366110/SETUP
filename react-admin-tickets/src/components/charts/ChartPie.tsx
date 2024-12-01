import { useMemo } from "react";
import { Card, CardContent, useTheme } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { H2Theme } from "../themes/HTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = (props: any) => {
  const theme = useTheme();

  const data = useMemo(() => {
    return {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          label: "My Dataset",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }, []);

  const options = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "right" as const,
          labels: {
            usePointStyle: true,
            boxWidth: 20,
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
            font: {
              size: 14,
            },
          },
        },

        tooltip: {
          callbacks: {
            label: (context: any) => {
              return `${context.label}: ${context.raw}`;
            },
          },
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
        <div className="h-[315px] px-[16px]">
          <Pie data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartPie;
