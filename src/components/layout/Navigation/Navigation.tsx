import Dropdown from "../../common/Dropdown/Dropdown";
import Icon from "../../common/Icon/Icon";
import Modal from "../../common/Modal/Modal";
import useNavigationItems from "./useNavigationItems";
import clsx from "clsx";
import { useState } from "react";
import ExpensesStats from "../../ExpensesStats/ExpensesStats";

const Navigation = () => {
  const { navMenuItems, profileMenuItems } = useNavigationItems();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="flex min-w-60 justify-center">
            <ExpensesStats />
          </div>
        </Modal>
      )}
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" onClick={() => setIsOpen(true)}>
            ShaFi
          </a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            {navMenuItems.map(({ icon, label, onClick, isActive }) => (
              <li
                key={label}
                className={clsx(
                  { "bg-primary text-base-200": isActive },
                  "hover:bg-secondary hover:text-base-200 rounded mr-1 ml-1"
                )}
              >
                <a
                  className="tooltip tooltip-bottom"
                  data-tip={label}
                  onClick={onClick}
                >
                  <Icon icon={icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Dropdown
            name={<span className="text-xl font-bold">S</span>}
            className={"btn btn-circle btn-primary"}
            direction="end"
          >
            {profileMenuItems.map(({ icon, label, onClick }) => (
              <div key={label} onClick={onClick} className="justify-between">
                <a>{label}</a>
                <Icon icon={icon} />
              </div>
            ))}
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navigation;
