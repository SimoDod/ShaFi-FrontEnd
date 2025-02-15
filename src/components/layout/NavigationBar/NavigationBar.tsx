import Icon from "../../common/Icon/Icon";
import Modal from "../../common/Modal/Modal";
import { useState } from "react";
import ExpensesStats from "../../ExpensesStats/ExpensesStats";
import { useTranslation } from "react-i18next";
import SettingsPanel from "../../SettingsPanel/SettingsPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

enum ModalMode {
  STATS,
  SETTINGS,
}

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<ModalMode | null>(null);
  const { t } = useTranslation();

  return (
    <>
      {isOpen === ModalMode.STATS && (
        <Modal onClose={() => setIsOpen(null)}>
          <div className="flex min-w-60 justify-center">
            <ExpensesStats />
          </div>
        </Modal>
      )}
      {isOpen === ModalMode.SETTINGS && (
        <Modal title={t("common.settings")} onClose={() => setIsOpen(null)}>
          <SettingsPanel />
        </Modal>
      )}
      <div className="navbar">
        <div className="navbar-start">
          <a
            className="bg-base-300 p-2 rounded-xl border-none outline-none text-xl"
            onClick={() => setIsOpen(ModalMode.STATS)}
          >
            ShaFi
          </a>
        </div>
        <div className="navbar-center">
          <NavigationMenu />
        </div>
        <div className="navbar-end">
          <button
            onClick={() => setIsOpen(ModalMode.SETTINGS)}
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
