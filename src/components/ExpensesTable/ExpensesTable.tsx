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
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="text text-primary">{t("common.date")}</th>
            <th className="text text-primary">{t("common.title")}</th>
            <th className="text text-primary">{t("common.amount")}</th>
            <th className="text text-primary">{t("common.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ date, title, amount, _id }) => (
            <tr key={_id}>
              <td>{format(date, dateFormats.defaultLine)}</td>
              <td>{title}</td>
              <td>{amount}</td>
              <td>
                <button
                  className="btn btn-link"
                  onClick={() =>
                    openDialog("delete", {
                      onConfirm: () =>
                        dispatch(
                          deleteExpenseThunk({ expenseId: _id, ledgerId })
                        ),
                    })
                  }
                >
                  <Icon icon={faTrashCan} />
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
