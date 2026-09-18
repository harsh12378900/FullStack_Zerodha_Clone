import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },

    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "700px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}