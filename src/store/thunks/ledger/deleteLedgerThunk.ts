import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { LedgerResponse } from "../../../types/Ledger";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const deleteLedgerThunk = createAsyncThunk<
  LedgerResponse,
  string,
  { rejectValue: string }
>("ledger/delete-ledger", async (id, { rejectWithValue }) => {
  try {
    const response = await api.delete("/ledger/delete-ledger/" + id);

    return response?.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});

export default deleteLedgerThunk;
