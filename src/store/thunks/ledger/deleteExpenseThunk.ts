import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { LedgerResponseWithExpenseId } from "../../../types/Ledger";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const deleteExpenseThunk = createAsyncThunk<
  LedgerResponseWithExpenseId,
  { expenseId: string; ledgerId: string },
  { rejectValue: string }
>(
  "ledger/delete-expense",
  async ({ expenseId, ledgerId }, { rejectWithValue }) => {
    try {
      const response = await api.delete(
        `/ledger/delete-expense/${ledgerId}/${expenseId}`
      );

      return { ...response?.data, ledgerId };
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default deleteExpenseThunk;
