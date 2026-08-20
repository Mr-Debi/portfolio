import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

export default function DashboardCharts({ stats }) {
  const pieData = {
    labels: ["Approved", "Pending", "Rejected"],

    datasets: [
      {
        data: [stats.approved, stats.pending, stats.rejected],

        backgroundColor: ["#22c55e", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const barData = {
    labels: ["Approved", "Pending", "Rejected"],

    datasets: [
      {
        label: "Donations",

        data: [stats.approved, stats.pending, stats.rejected],

        backgroundColor: ["#22c55e", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-card">
        <h3>Donation Status</h3>

        <Pie data={pieData} />
      </div>

      <div className="chart-card">
        <h3>Donation Statistics</h3>

        <Bar data={barData} />
      </div>
    </div>
  );
}
