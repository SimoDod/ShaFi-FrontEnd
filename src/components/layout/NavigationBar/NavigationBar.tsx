import Icon from "../../common/Icon/Icon";
import Modal from "../../common/Modal/Modal";
import { useState } from "react";
import ExpensesStats from "../../ExpensesStats/ExpensesStats";
import { useTranslation } from "react-i18next";
import SettingsPanel from "../../SettingsPanel/SettingsPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const NavigationBar = () => {
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
          <a className="btn bg-base-300 text-xl" onClick={() => setIsOpen(true)}>
            ShaFi
          </a>
        </div>
        <div className="navbar-center">
          <NavigationMenu />
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

export default NavigationBar;
