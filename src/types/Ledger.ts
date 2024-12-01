import { ledgerColors } from "../utils/constants";

export type BaseExpenseValues = {
  title: string;
  amount: number;
};

export type ExpenseResponse = {
  date: Date;
  _id: string;
} & BaseExpenseValues;

export enum LedgerModal {
  CREATE = "create",
}

export type BaseLedgerValues = {
  title: string;
  color: (typeof ledgerColors)[number] | "";
};

export type LedgerResponse = {
  _id: string;
  total: number;
  expenses: ExpenseResponse[];
  _createdAt: Date;
  _updatedAt: Date;
  _v: number;
} & BaseLedgerValues;

export type LedgerResponseWithExpenseId = {
  expenseId: string;
} & LedgerResponse;

export type LedgerRequest = {
  userId: string;
} & BaseLedgerValues;
