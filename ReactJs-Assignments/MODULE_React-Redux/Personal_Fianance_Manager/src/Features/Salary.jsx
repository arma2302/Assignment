import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice({
  name: "salary",
  initialState: { salary: 0, expense: [], total: 0 },
  reducers: {
    AddSalary: (state, action) => {
      state.salary = action.payload;
    },
    AddExpense: (state, action) => {
      state.expense.push(action.payload);
    },
  },
});

export default salarySlice.reducer;
export const { AddSalary, AddExpense } = salarySlice.actions;
