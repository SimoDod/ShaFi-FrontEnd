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

  return (
    <LedgerTileWrapper
      onClick={onClick}
      onDelete={() =>
        openDialog("delete", {
          onConfirm: () => dispatch(deleteLedgerThunk(id)),
        })
      }
    >
      <h2 className="card-title text-primary text-lg">{title}</h2>
      <div className={`divider divider-${color} text-lg`} />
      <div className="text-xl">{total}</div>
    </LedgerTileWrapper>
  );
};

export default LedgerTile;
