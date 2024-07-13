import { createSlice } from "@reduxjs/toolkit";

const Extra = createSlice({
  name: "total",
  initialState: { total: 0 },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase("DEDUCT_EXPENSE", (state, action) => {
      state.total = action.payload.expense;
    });
  },
});

export default Extra.reducer;
