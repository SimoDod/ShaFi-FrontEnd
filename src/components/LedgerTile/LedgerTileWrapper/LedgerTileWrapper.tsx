import { PropsWithChildren } from "react";
import Icon from "../../common/Icon/Icon";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onClick: () => void;
  onDelete?: () => void;
} & PropsWithChildren;

const LedgerTileWrapper = ({ onClick, onDelete, children }: Props) => {
  return (
    <div className="glass-card rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-base-content/5 group relative">
      {onDelete && (
        <Icon
          className="absolute top-2 right-2 p-1 text-base-content/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-error cursor-pointer z-10"
          icon={faX}
          onClick={onDelete}
        />
      )}
      <div
        onClick={onClick}
        className="card-body w-full h-32 items-center justify-between text-center p-4"
      >
        {children}
      </div>
    </div>
  );
};

export default LedgerTileWrapper;
