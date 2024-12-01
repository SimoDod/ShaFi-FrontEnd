import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LedgerResponse } from "../../types/Ledger";
import createLedgerThunk from "../thunks/ledger/createLedgerThunk";
import fetchLedgersByYearThunk from "../thunks/ledger/fetchLedgersByYearThunk";
import deleteLedgerThunk from "../thunks/ledger/deleteLedgerThunk";
import addExpenseThunk from "../thunks/ledger/addExpenseThunk";
import deleteExpenseThunk from "../thunks/ledger/deleteExpenseThunk";

type LedgerState = {
  ledgers: LedgerResponse[];
  curLedger: LedgerResponse | null;
  isLoading: boolean;
};

const initialState: LedgerState = {
  ledgers: [],
  curLedger: null,
  isLoading: false,
};

const ledgerSlice = createSlice({
  name: "ledger",
  initialState,
  reducers: {
    setCurrLedgerById: (state, action: PayloadAction<string>) => {
      const ledgerId = action.payload;
      const ledger = state.ledgers.find(({ _id }) => _id === ledgerId) || null;

      state.curLedger = ledger;
    },
  },
  extraReducers: ({ addCase }) => {
    // Fetch by year
    addCase(fetchLedgersByYearThunk.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      fetchLedgersByYearThunk.fulfilled,
      (state, action: PayloadAction<LedgerResponse[]>) => {
        state.isLoading = false;
        state.ledgers = action.payload;
      }
    );
    addCase(fetchLedgersByYearThunk.rejected, (state) => {
      state.isLoading = false;
    });

    // Create
    addCase(createLedgerThunk.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      createLedgerThunk.fulfilled,
      (state, action: PayloadAction<LedgerResponse>) => {
        state.isLoading = false;
        state.ledgers = [...state.ledgers, action.payload];
      }
    );
    addCase(createLedgerThunk.rejected, (state) => {
      state.isLoading = false;
    });

    // Add Expense
    addCase(addExpenseThunk.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      addExpenseThunk.fulfilled,
      (state, action: PayloadAction<LedgerResponse>) => {
        state.isLoading = false;

        const ledgerIndex = state.ledgers.findIndex(
          (ledger) => ledger._id === action.payload._id
        );

        if (ledgerIndex !== -1) {
          state.ledgers[ledgerIndex] = action.payload;
          state.curLedger = action.payload;
        }
      }
    );
    addCase(addExpenseThunk.rejected, (state) => {
      state.isLoading = false;
    });

    // Delete ledger
    addCase(deleteLedgerThunk.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      deleteLedgerThunk.fulfilled,
      (state, action: PayloadAction<LedgerResponse>) => {
        state.isLoading = false;
        state.ledgers = state.ledgers.filter(
          ({ _id }) => action.payload._id !== _id
        );
      }
    );

    // Delete expense
    addCase(deleteLedgerThunk.rejected, (state) => {
      state.isLoading = false;
    });

    addCase(deleteExpenseThunk.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      deleteExpenseThunk.fulfilled,
      (
        state,
        action: PayloadAction<LedgerResponse & { expenseId: string }>
      ) => {
        state.isLoading = false;

        const ledgerIndex = state.ledgers.findIndex(
          (ledger) => ledger._id === action.payload._id
        );

        if (ledgerIndex !== -1) {
          state.ledgers[ledgerIndex] = action.payload;
          state.curLedger = action.payload;
        }
      }
    );
    addCase(deleteExpenseThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setCurrLedgerById } = ledgerSlice.actions;
export default ledgerSlice.reducer;
