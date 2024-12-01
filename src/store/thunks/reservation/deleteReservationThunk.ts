import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { ReservationResponse } from "../../../types/Reservation";
import handleThunkError from "../../../utils/thunk/handleThunkError";

const deleteReservationThunk = createAsyncThunk<
  ReservationResponse,
  string,
  { rejectValue: string }
>("reservation/delete-reservation", async (id, { rejectWithValue }) => {
  try {
    const response = await api.delete("/reservation/delete-reservation/" + id);

    return response?.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});

export default deleteReservationThunk;
