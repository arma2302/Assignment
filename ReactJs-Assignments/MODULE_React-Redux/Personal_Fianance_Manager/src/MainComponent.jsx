import React, { useState } from "react";
import bg from "./bg-video.mp4";
import bg1 from "./bg.mp4";
import { useDispatch, useSelector } from "react-redux";
import { AddExpense, AddSalary } from "./Features/Salary";
import { Terminal } from "@mui/icons-material";
import TotalAmmount from "./Features/TotalAmmount";

export default function MainComponent() {
  const [sallary, setsallary] = useState("");
  const [expense, setExpense] = useState("");
  const [title, setTtile] = useState("");

  const dispatch = useDispatch();

  const salary = useSelector((state) => {
    return state.salarykey.salary;
  });
  const expenseData = useSelector((state) => {
    return state.salarykey.expense;
  });
  const avail_balance = useSelector((state) => {
    return state.Extra.total;
  });

  const addSalary = () => {
    dispatch(AddSalary(sallary));
    setsallary("");
  };
  const addExpense = () => {
    // setBalance(parseInt(sallary) - parseInt(expense));
    dispatch(AddExpense({ title, expense }));
    dispatch({ type: "DEDUCT_EXPENSE", payload: { expense: parseInt(salary) - parseInt(expense) } });
    setTtile("");
    setExpense("");
  };

  // setBalance(avail_balance);
  return (
    <div class="bg-[#EAE1DC] flex justify-center items-center w-screen h-screen px-5 flex-col gap-5">
      <div className="flex items-center justify-between w-1/2 p-4 h-28 bg-[#191716] rounded-3xl shadow-2xl">
        <input placeholder="Enter Income" className="p-2 w-80 rounded" onChange={(e) => setsallary(e.target.value)}></input>
        <button className="bg-[#F15D3C] text-white w-1/5 rounded p-2" onClick={addSalary}>
          {" "}
          Add
        </button>
      </div>
      <div class="bg-white w-1/2 rounded-3xl shadow-2xl">
        <div class="bg-[#191716] text-white p-4 rounded-t-3xl">
          <div class="flex justify-between items-center">
            <span class="text-base">Monthly Balance</span>
            <span class="text-2xl">Rs.{salary}</span>
          </div>

          <div class="mt-4 bg-white text-[#191716] p-4 rounded-xl">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-sm text-gray-400">Available Ammount</div>
                <div class="text-4xl font-bold">Rs.{avail_balance}</div>
              </div>
            </div>
            {/*  */}
            <div class="flex justify-between items-center  mt-2">
              <div>
                <input type="text" placeholder="Enter other Expense" className="p-2 border-0 w-80 focus:outline-0" onChange={(e) => setTtile(e.target.value)} />
                <input type="Number" placeholder="Enter Amount" className="p-2 border-0 w-80 focus:outline-0" onChange={(e) => setExpense(e.target.value)} />
              </div>
              <button class="bg-[#F15D3C] text-white rounded-full w-7 h-7 flex items-center justify-center" onClick={addExpense}>
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center space-x-4">
            <span class="font-bold">History</span>
          </div>
          {expenseData && (
            <div class="mt-4">
              {expenseData.map((e, i) => {
                return (
                  <div class="flex justify-between items-center mb-3" key={i}>
                    <div class="flex items-center space-x-3">
                      <div class="bg-[#F15D3C] text-white w-7 h-7 rounded-full flex items-center justify-center">
                        <i class="fas fa-wallet"></i>
                      </div>
                      <div>
                        <div class="text-sm font-bold">{e.title}</div>
                        <div class="text-xs text-gray-400">3:40 pm</div>
                      </div>
                    </div>
                    <div class="text-[#F15D3C]">- {e.expense}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
