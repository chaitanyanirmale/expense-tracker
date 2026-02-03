import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function ExpenseCharts({ expenses }) {

  const expenseData = expenses.filter(e => e.type === "expense");

  const categoryTotals = {};
  expenseData.forEach(e => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + e.amount;
  });

  const CATEGORY_COLORS = {
    food: "#f97316",        // orange
    transport: "#3b82f6",   // blue
    shopping: "#ec4899",    // pink
    bills: "#22c55e",       // green
    salary: "#a855f7", // purple
    other: "#64748b",       // gray
    };
  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: Object.keys(categoryTotals).map(
            (cat) => CATEGORY_COLORS[cat] || "#94a3b8"
        ),
        borderWidth: 1,
      },
    ],
  };


  const monthlyTotals = {};

  expenseData.forEach(e => {
    const month = new Date(e.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    monthlyTotals[month] =
      (monthlyTotals[month] || 0) + e.amount;
  });

  const barData = {
    labels: Object.keys(monthlyTotals),
    datasets: [
      {
        label: "Monthly Expenses",
        data: Object.values(monthlyTotals),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">
          Category-wise Expenses
        </h3>
        <Pie data={pieData} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">
          Monthly Expense Trend
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
}
