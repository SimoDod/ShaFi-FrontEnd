import { PropsWithChildren } from "react";
import Icon from "../../common/Icon/Icon";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onClick: () => void;
  onDelete?: () => void;
} & PropsWithChildren;

const LedgerTileWrapper = ({ onClick, onDelete, children }: Props) => {
  return (
    <div className="card bg-base-100 bg-opacity-70 backdrop-blur cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {onDelete && (
        <Icon
          className="absolute top-1 right-1 p-2"
          icon={faX}
          onClick={onDelete}
        />
      )}
      <div
        onClick={onClick}
        className="card-body w-44 h-32 items-center justify-between text-center p-3"
      >
        {children}
      </div>
    </div>
  );
};

export default LedgerTileWrapper;
