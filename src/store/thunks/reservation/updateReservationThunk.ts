import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import {
  ReservationResponse,
  ReservationUpdateRequest,
} from "../../../types/Reservation";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const updateReservationThunk = createAsyncThunk<
  ReservationResponse,
  ReservationUpdateRequest,
  { rejectValue: string }
>(
  "reservation/updateReservationThunk",
  async (reservation, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/reservation/${reservation.reservationId}`,
        reservation
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(handleThunkError(error));
    }
  }
);

export default updateReservationThunk;
