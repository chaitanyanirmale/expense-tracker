import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../../api/utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  }
  return (
    <div className="h-14 bg-white flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-blue-900">
        Smart Expense Tracker
      </h1>

      {user && (
        <div className="flex items-center gap-4 font-semibold">
        <span className="text-sm  text-gray-600">Hello, {user.name}</span>
        <button onClick={handleLogout} className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
          Logout
        </button>
      </div>
    )}      
    </div>
  );
}
