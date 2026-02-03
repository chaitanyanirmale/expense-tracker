import { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/expenses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const filteredExpenses =
    filter === "all"
      ? expenses
      : expenses.filter(e => e.type === filter);

  const handleDelete = (id) => {
    setExpenses(prev => prev.filter(e => e._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="border px-3 py-2 rounded mb-4"
      >
        <option value="all">All</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDelete}
      />
    </div>
  );
}
