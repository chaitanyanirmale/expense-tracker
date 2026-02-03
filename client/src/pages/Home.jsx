import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-600 text-white">
      
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">Smart Expense Tracker</h1>
        <div className="space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition"
          >
            Sign In 
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Take Control of Your Spending
        </h2>
        <p className="max-w-xl text-lg text-gray-200 mb-8">
          Track expenses, set budgets, and gain smart insights to manage your
          personal finances effectively.
        </p>

        <Link
          to="/signup"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Start Tracking Now
        </Link>
      </div>

      {/* Features */}
      <div className="mt-32 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Track Expenses</h3>
          <p className="text-gray-200">
            Easily log daily expenses and monitor spending patterns.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
          <p className="text-gray-200">
            Get clear insights and suggestions to improve your savings.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Budget Control</h3>
          <p className="text-gray-200">
            Set monthly budgets and stay in control of your money.
          </p>
        </div>
      </div>
    </div>
  );
}
