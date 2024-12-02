import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserThunk } from "../thunks/auth/fetchUserThunk";
import { loginThunk } from "../thunks/auth/loginThunk";
import { registerThunk } from "../thunks/auth/registerThunk";
import createLedgerThunk from "../thunks/ledger/createLedgerThunk";
import createReservationThunk from "../thunks/reservation/createReservationThunk";
import fetchReservationByYearThunk from "../thunks/reservation/fetchReservationByYearThunk";
import fetchLedgersByYearThunk from "../thunks/ledger/fetchLedgersByYearThunk";
import updateReservationThunk from "../thunks/reservation/updateReservationThunk";
import deleteReservationThunk from "../thunks/reservation/deleteReservationThunk";
import fetchAllReservationDatesThunk from "../thunks/reservation/fetchAllReservationDatesThunk";
import deleteLedgerThunk from "../thunks/ledger/deleteLedgerThunk";
import addExpenseThunk from "../thunks/ledger/addExpenseThunk";
import deleteExpenseThunk from "../thunks/ledger/deleteExpenseThunk";
import i18next from "i18next";

type NotificationState = {
  message: string;
};

const initialState: NotificationState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    clearMessage(state) {
      state.message = "";
    },
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(
      isAnyOf(
        fetchUserThunk.rejected,
        fetchAllReservationDatesThunk.rejected,
        loginThunk.rejected,
        registerThunk.rejected,
        createLedgerThunk.rejected,
        createReservationThunk.rejected,
        updateReservationThunk.rejected,
        deleteReservationThunk.rejected,
        fetchLedgersByYearThunk.rejected,
        fetchReservationByYearThunk.rejected,
        deleteLedgerThunk.rejected,
        addExpenseThunk.rejected,
        deleteExpenseThunk.rejected
      ),
      (state, action) => {
        state.message = action.payload || i18next.t("apiError.unknownError");
      }
    );
  },
});

export const { clearMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
