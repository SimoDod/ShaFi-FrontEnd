import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Icon from "../common/Icon/Icon";
import { format } from "date-fns";
import { dateFormats } from "../../utils/date/formatDateToString";
import { useAppDispatch } from "../../store/store";
import useDialog from "../../hooks/useDialog";
import { ExpenseResponse } from "../../types/Ledger";
import deleteExpenseThunk from "../../store/thunks/ledger/deleteExpenseThunk";
import { useTranslation } from "react-i18next";

type Props = {
  expenses?: ExpenseResponse[];
  ledgerId: string;
};

const ExpensesTable = ({ expenses = [], ledgerId }: Props) => {
  const dispatch = useAppDispatch();
  const openDialog = useDialog();
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="table">
        <thead>
          <tr className="border-b border-base-content/5">
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80">{t("common.date")}</th>
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80">{t("common.title")}</th>
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80">{t("common.amount")}</th>
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80">{t("common.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ date, title, amount, _id }) => (
            <tr key={_id} className="border-b border-base-content/5 transition-colors duration-200 hover:bg-base-200/30">
              <td className="text-sm text-base-content/70">{format(date, dateFormats.defaultSlash)}</td>
              <td className="text-sm font-medium">{title}</td>
              <td className="text-sm tabular-nums font-medium">{amount}</td>
              <td>
                <button
                  className="btn btn-ghost btn-sm btn-circle transition-all duration-300 hover:bg-error/10 hover:text-error"
                  onClick={() =>
                    openDialog("delete", {
                      onConfirm: () =>
                        dispatch(
                          deleteExpenseThunk({ expenseId: _id, ledgerId })
                        ),
                    })
                  }
                >
                  <Icon icon={faTrashCan} className="h-3.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
