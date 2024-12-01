import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const fetchAllReservationDatesThunk = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>(
  "reservation/fetchAllReservationDatesThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/reservation/all-reserved-dates");

      return response.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default fetchAllReservationDatesThunk;
