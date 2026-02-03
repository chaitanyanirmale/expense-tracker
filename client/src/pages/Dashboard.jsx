import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ExpenseList from "../components/ExpenseList";
import AddExpenseModal from "../components/AddExpenseModal";
import SummaryCards from "../components/SummaryCards";
import ExpenseCharts from "../components/ExpenseCharts";


export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/expenses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setExpenses(data);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e._id !== id));
  };


  useEffect(() => {
    fetchExpenses();
  }, []);


  return (
    <div>
      <Navbar />
    <div className="flex">
      <Sidebar />
    <div className="p-6 bg-blue-50 sm:w-full md:w-full min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
       <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded m-2"
        >
        Add Expense
        </button>
      {/* Summary Cards */}
      <SummaryCards expenses={expenses} />
      <ExpenseCharts expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} /> 

      {showModal && (
        <AddExpenseModal
          onClose={() => {
            setShowModal(false);
            fetchExpenses();
          }}
        />
      )}


    </div>
    </div>
    </div>
  );
}
