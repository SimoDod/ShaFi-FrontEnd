import Icon from "../../common/Icon/Icon";
import Modal from "../../common/Modal/Modal";
import useNavigationItems from "./useNavigationItems";
import clsx from "clsx";
import { useState } from "react";
import ExpensesStats from "../../ExpensesStats/ExpensesStats";
import { useTranslation } from "react-i18next";
import SettingsPanel from "../../SettingsPanel/SettingsPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const navMenuItems = useNavigationItems();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettingsModal = () => setIsSettingsOpen((prev) => !prev);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="flex min-w-60 justify-center">
            <ExpensesStats />
          </div>
        </Modal>
      )}
      {isSettingsOpen && (
        <Modal title={t("common.settings")} onClose={toggleSettingsModal}>
          <SettingsPanel />
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
          <button
            onClick={() => toggleSettingsModal()}
            className="btn btn-ghost"
          >
            <Icon icon={faGear} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
