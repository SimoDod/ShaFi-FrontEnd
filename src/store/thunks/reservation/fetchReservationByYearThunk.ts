import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { ReservationResponse } from "../../../types/Reservation";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const fetchReservationByYearThunk = createAsyncThunk<
  ReservationResponse[],
  string,
  { rejectValue: string }
>(
  "reservation/fetchReservationByYearThunk",
  async (year, { rejectWithValue }) => {
    try {
      const response = await api.get("/reservation/" + year);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default fetchReservationByYearThunk;
