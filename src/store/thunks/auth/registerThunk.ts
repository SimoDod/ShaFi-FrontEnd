import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../api/api";
import { RegisterData, User } from "../../../types/User";
import handleThunkError from "../../../utils/thunk/handleThunkError";

export const registerThunk = createAsyncThunk<
  User,
  RegisterData,
  { rejectValue: string }
>("auth/register", async (registerData, { rejectWithValue }) => {
  try {
    const response = await authApi.post("/auth/register", registerData);

    return response.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});
