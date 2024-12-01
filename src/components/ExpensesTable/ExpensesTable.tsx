import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Icon from "../common/Icon/Icon";
import { format } from "date-fns";
import { dateFormats } from "../../utils/date/formatDateToString";
import { useAppDispatch } from "../../store/store";
import useDialog from "../../hooks/useDialog";
import { ExpenseResponse } from "../../types/Ledger";
import deleteExpenseThunk from "../../store/thunks/ledger/deleteExpenseThunk";

type Props = {
  expenses?: ExpenseResponse[];
  ledgerId: string;
};

const ExpensesTable = ({ expenses = [], ledgerId }: Props) => {
  const dispatch = useAppDispatch();
  const openDialog = useDialog();

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="text text-primary">Date</th>
            <th className="text text-primary">Title</th>
            <th className="text text-primary">Amount</th>
            <th className="text text-primary">Actions</th>
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
