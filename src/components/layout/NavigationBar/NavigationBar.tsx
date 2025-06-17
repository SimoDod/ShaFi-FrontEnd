import { useState } from "react";
import { useTranslation } from "react-i18next";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../common/Icon/Icon";
import Modal from "../../common/Modal/Modal";
import ExpensesStats from "../../ExpensesStats/ExpensesStats";
import SettingsPanel from "../../SettingsPanel/SettingsPanel";
import useNavigationItems from "./useNavigationItems";
import { getAuthToken } from "../../../utils/authentication/authentication";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../routerConfig";
import ThemeSelect from "../../common/ThemeSelect/ThemeSelect";

enum ModalMode {
  STATS,
  SETTINGS,
}

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<ModalMode | null>(null);
  const { t } = useTranslation();
  const navItems = useNavigationItems();
  const authToken = getAuthToken();
  const navigate = useNavigate();

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
          <SettingsPanel handleClose={() => setIsOpen(null)} />
        </Modal>
      )}

      <div className="navbar sticky top-0 bg-base-100 bg-opacity-60 backdrop-blur shadow-md px-4 py-0 z-50">
        <div className="text-2xl font-bold navbar-start">
          <button
            className="mr-4"
            onClick={() =>
              authToken
                ? setIsOpen(ModalMode.STATS)
                : navigate(routePaths.login.path)
            }
          >
            Sunny<span className="text-primary">Alfa</span>
          </button>
        </div>

        <div className="navbar-center">
          {authToken ? (
            <ul className="menu menu-horizontal gap-2">
              {navItems.map(({ icon, label, onClick, isActive }) => (
                <li key={label}>
                  <button
                    onClick={onClick}
                    className={`
              btn btn-circle transition-colors
              ${isActive ? "bg-primary text-base-100" : "bg-base-200 text-base-content"}
              hover:bg-secondary hover:text-base-100
              tooltip tooltip-bottom
            `}
                    data-tip={label}
                  >
                    <Icon icon={icon} className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="navbar-end gap-2">
          {!authToken && <ThemeSelect />}
          {authToken ? (
            <button
              onClick={() => setIsOpen(ModalMode.SETTINGS)}
              className="btn btn-sm btn-ghost"
            >
              <Icon icon={faGear} />
            </button>
          ) : (
            <LanguageSwitcher />
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
