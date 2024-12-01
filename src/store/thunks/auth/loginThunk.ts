import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../api/api";
import { LoginData, User } from "../../../types/User";
import handleThunkError from "../../../utils/thunk/handleThunkError";

export const loginThunk = createAsyncThunk<
  User,
  LoginData,
  { rejectValue: string }
>("auth/login", async (loginData, { rejectWithValue }) => {
  try {
    const response = await authApi.post("auth/login", loginData);

    return response.data;
  } catch (error) {
    return rejectWithValue(handleThunkError(error));
  }
});
