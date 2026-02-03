import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import expenseRoutes from './routes/expense.route.js';
import budgetRoutes from './routes/budget.route.js';


dotenv.config();
//mongodb://localhost:27017/
mongoose.connect("mongodb://localhost:27017/expense-tracker").then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
app.use(express.json());


app.use(cors());

app.use('/api/auth', authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/budgets", budgetRoutes);

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});