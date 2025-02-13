import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { LedgerResponse } from "../../../types/Ledger";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const fetchLedgersByYearThunk = createAsyncThunk<
  LedgerResponse[],
  string,
  { rejectValue: string }
>("ledger/fetchLedgersByYearThunk", async (year, { rejectWithValue }) => {
  try {
    const response = await api.get("/ledger/" + year);

    return response.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});

export default fetchLedgersByYearThunk;
