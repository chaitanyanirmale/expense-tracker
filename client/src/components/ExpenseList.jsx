export default function ExpenseList({ expenses, onDelete }) {

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(`/api/expenses/${id}`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    onDelete(id);
    };

  if (expenses.length === 0) {
    return <p>No expenses yet</p>;
  }

  return (
    <div className="bg-white rounded shadow mt-3">
      {expenses.map(exp => (
        <div
          key={exp._id}
          className="flex justify-between p-4 border-b"
        >
          <div>
            <h4 className="font-semibold">{exp.title}</h4>
            <p className="text-sm text-gray-500">
              {exp.category} • {new Date(exp.date).toLocaleDateString()}
            </p>
          </div>

          <div
            className={
              exp.type === "expense"
                ? "text-red-500 font-bold"
                : "text-green-600 font-bold"
            }
          >
            ₹{exp.amount}
          </div>
        <button
            onClick={() => handleDelete(exp._id)}
            className="text-m border p-2 font-semibold bg-red-500 text-white rounded-sm hover:bg-red-600"
            >
            Delete
        </button>
        </div>
      ))}
    </div>
  );
}
