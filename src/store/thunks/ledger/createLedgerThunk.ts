import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { LedgerRequest, LedgerResponse } from "../../../types/Ledger";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const createLedgerThunk = createAsyncThunk<
  LedgerResponse,
  LedgerRequest,
  { rejectValue: string }
>("ledger/createLedgerThunk", async (ledger, { rejectWithValue }) => {
  try {
    const response = await api.post("/ledger/create", ledger);

    return response.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});

export default createLedgerThunk;
