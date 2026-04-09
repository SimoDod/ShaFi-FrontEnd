import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../common/Icon/Icon";
import LedgerTileWrapper from "../LedgerTileWrapper/LedgerTileWrapper";

type Props = {
  onClick: () => void;
};

const CreateLedgerTile = ({ onClick }: Props) => {
  return (
    <LedgerTileWrapper onClick={onClick}>
      <div className="h-full flex items-center">
        <Icon icon={faPlusCircle} className="text-5xl text-primary/40 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
      </div>
    </LedgerTileWrapper>
  );
};

export default CreateLedgerTile;
