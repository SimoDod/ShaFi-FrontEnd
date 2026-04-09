import LedgerTileWrapper from "./LedgerTileWrapper/LedgerTileWrapper";
import { ledgerColors } from "../../utils/constants";
import { useAppDispatch } from "../../store/store";
import deleteLedgerThunk from "../../store/thunks/ledger/deleteLedgerThunk";
import useDialog from "../../hooks/useDialog";

type Props = {
  title: string;
  total: string | number;
  color: (typeof ledgerColors)[number] | "";
  id: string;
  onClick: () => void;
};

const LedgerTile = ({ title, total, id, color = "accent", onClick }: Props) => {
  const dispatch = useAppDispatch();
  const openDialog = useDialog();

  const formattedTotal = typeof total === "number" ? total.toFixed(2) : Number(total).toFixed(2);

  return (
    <LedgerTileWrapper
      onClick={onClick}
      onDelete={() =>
        openDialog("delete", {
          onConfirm: () => dispatch(deleteLedgerThunk(id)),
        })
      }
    >
      <div className="h-full flex items-center">
        <h3 className="card-title text-primary text-sm font-semibold">{title}</h3>
      </div>

      <div className="w-full">
        <div className={`divider divider-${color} text-lg my-0`} />
        <div className="text-lg font-medium tabular-nums">{formattedTotal}</div>
      </div>
    </LedgerTileWrapper>
  );
};

export default LedgerTile;
