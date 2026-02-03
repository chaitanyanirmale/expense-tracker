import Budget from "../models/budget.model.js";

export const getBudgets = async (req, res) => {
  const budgets = await Budget.find({ user: req.user._id });
  res.status(200).json(budgets);
};

export const addBudget = async (req, res) => {
  const { category, limit } = req.body;

  const budget = await Budget.create({
    user: req.user._id,
    category,
    limit,
  });

  res.status(201).json(budget);
};
