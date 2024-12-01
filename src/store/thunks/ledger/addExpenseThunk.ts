/*  */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { BaseExpenseValues, LedgerResponse } from "../../../types/Ledger";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const addExpenseThunk = createAsyncThunk<
  LedgerResponse,
  { ledgerId: string; expense: BaseExpenseValues },
  { rejectValue: string }
>(
  "ledger/addExpenseThunk",
  async ({ ledgerId, expense }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/ledger/add-expense/${ledgerId}`,
        expense
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default addExpenseThunk;
