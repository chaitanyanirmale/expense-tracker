import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-50 min-h-screen bg-blue-700 text-white p-4">
      <nav className="space-y-4">
        <NavLink end={true} 
          to="/dashboard"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </NavLink>


        <NavLink
          to="/expenses"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Expenses
        </NavLink>

        <NavLink
          to="/budgets"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Budgets
        </NavLink>
      </nav>
    </div>
  );
}
