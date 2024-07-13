import { configureStore } from "@reduxjs/toolkit";
import Salary from "../Features/Salary";
import TotalAmmount from "../Features/TotalAmmount";

export const store = configureStore({
  reducer: {
    salarykey: Salary,
    Extra: TotalAmmount,
  },
});
