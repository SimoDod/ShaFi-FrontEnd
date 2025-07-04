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
        className={`modal-box pt-0 bg-opacity-75 backdrop-blur xxs:w-[98%] xxxs:w-[98%] ${!centered && "mt-10"}`}
      >
        <div className="flex sticky top-3 z-10 bg-base-100 bg-opacity-55 backdrop-blur justify-between items-center h-8 py-4 px-3 w-full rounded-xl">
          <h3 className="font-bold text">{title}</h3>
          <button onClick={onClose} className="btn btn-link pt-4 pr-0 items-start">
            <Icon
              icon={faX}
              className="text-primary h-4 ml-4 hover:text-secondary"
            />
          </button>
        </div>
        <div className="modal-content mt-4">{children}</div>
        <div className="modal-actions mt-4">{actions}</div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>,
    document.body
  );

export default Modal;
