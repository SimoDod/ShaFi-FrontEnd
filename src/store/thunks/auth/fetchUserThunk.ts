import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../types/User";
import { api } from "../../../api/api";
import handleThunkError from "../../../utils/thunk/handleThunkError";

export const fetchUserThunk = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/fetchUserThunk", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/auth/me");

    return response.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});
