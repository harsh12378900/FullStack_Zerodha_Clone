import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughtnutChart({data}) {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}