import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
  title?: ReactNode;
  actions?: ReactNode;
  centered?: boolean;
  onClose: () => void;
} & PropsWithChildren;

const Modal = ({
  onClose,
  title,
  children,
  actions,
  centered = false,
}: Props) =>
  createPortal(
    <div className={`modal modal-open z-40 ${!centered && "items-start"}`}>
      <div
        className={`modal-box pt-0 glass-card-strong rounded-2xl xxs:w-[98%] xxxs:w-[98%] ${!centered && "mt-10"} animate-scale-in`}
      >
        <div className="flex sticky top-0 z-10 glass-surface rounded-xl justify-between items-center py-3 px-4 -mx-2 mt-2">
          <h3 className="font-semibold text-base-content/90 tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle transition-all duration-300 hover:bg-error/10 hover:text-error"
          >
            <Icon icon={faX} className="h-3" />
          </button>
        </div>
        <div className="modal-content mt-4">{children}</div>
        {actions && <div className="modal-actions mt-4">{actions}</div>}
      </div>
      <div className="modal-backdrop bg-black/40 backdrop-blur-sm" onClick={onClose} />
    </div>,
    document.body
  );

export default Modal;
