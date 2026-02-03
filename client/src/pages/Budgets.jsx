import { useEffect, useState } from "react";

export default function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [formData, setFormData] = useState({ category: "", limit: "" });

  const fetchBudgets = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/budgets", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBudgets(await res.json());
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await fetch("/api/budgets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    console.log(formData),

    setFormData({ category: "", limit: "" });
    fetchBudgets();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Budgets</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Limit"
          value={formData.limit}
          onChange={(e) =>
            setFormData({ ...formData, limit: e.target.value })
          }
          className="border px-3 py-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </form>

      {budgets.map(b => (
        <div
          key={b._id}
          className="p-4 mb-2 bg-white rounded shadow"
        >
          <p className="font-semibold">{b.category}</p>
          <p>Limit: ₹{b.limit}</p>
        </div>
      ))}
    </div>
  );
}
