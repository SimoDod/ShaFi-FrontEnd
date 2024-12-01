import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import {
  ReservationRequest,
  ReservationResponse,
} from "../../../types/Reservation";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const createReservationThunk = createAsyncThunk<
  ReservationResponse,
  ReservationRequest,
  { rejectValue: string }
>(
  "reservation/createReservationThunk",
  async (reservation, { rejectWithValue }) => {
    try {
      const response = await api.post("/reservation/create", reservation);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default createReservationThunk;
