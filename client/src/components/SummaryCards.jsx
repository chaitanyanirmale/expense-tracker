export default function SummaryCards({ expenses }) {
  const income = expenses
    .filter(e => e.type === "income")
    .reduce((acc, e) => acc + e.amount, 0);

  const expense = expenses
    .filter(e => e.type === "expense")
    .reduce((acc, e) => acc + e.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 font-semibold">
      <div className="p-4 bg-green-100 rounded">
        <h3>Total Income</h3>
        <p className="text-xl font-bold">₹{income}</p>
      </div>

      <div className="p-4 bg-red-100 rounded">
        <h3>Total Expense</h3>
        <p className="text-xl font-bold">₹{expense}</p>
      </div>

      <div className="p-4 bg-blue-100 rounded">
        <h3>Balance</h3>
        <p className="text-xl font-bold">₹{balance}</p>
      </div>
    </div>
  );
}
