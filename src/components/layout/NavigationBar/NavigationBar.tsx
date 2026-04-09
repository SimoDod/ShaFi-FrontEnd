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

      <nav className="sticky top-0 z-50 glass-card-strong border-b border-base-content/5">
        <div className="navbar px-4 py-1 max-w-screen-2xl mx-auto">
          <div className="navbar-start">
            <button
              className="text-2xl font-bold tracking-tight transition-all duration-300 hover:opacity-80 active:scale-95"
              onClick={() =>
                authToken
                  ? setIsOpen(ModalMode.STATS)
                  : navigate(routePaths.login.path)
              }
            >
              Sunny<span className="text-primary">Alfa</span>
            </button>
          </div>

          <div className="navbar-center hidden sm:flex">
            {authToken ? (
              <div className="flex items-center gap-1 p-1 rounded-2xl bg-base-200/50 backdrop-blur-sm">
                {navItems.map(({ icon, label, onClick, isActive }) => (
                  <button
                    key={label}
                    onClick={onClick}
                    className={`
                      btn btn-sm btn-ghost rounded-xl gap-2 transition-all duration-300
                      ${isActive
                        ? "bg-primary text-primary-content shadow-md shadow-primary/20"
                        : "hover:bg-base-200"
                      }
                    `}
                    title={label}
                  >
                    <Icon icon={icon} className="size-3.5" />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Mobile nav */}
          <div className="navbar-center flex sm:hidden">
            {authToken ? (
              <div className="flex items-center gap-0.5 p-0.5 rounded-xl bg-base-200/50 backdrop-blur-sm">
                {navItems.map(({ icon, onClick, isActive, label }) => (
                  <button
                    key={label}
                    onClick={onClick}
                    className={`
                      btn btn-xs btn-ghost btn-circle transition-all duration-300
                      ${isActive
                        ? "bg-primary text-primary-content shadow-sm shadow-primary/20"
                        : "hover:bg-base-200"
                      }
                    `}
                    title={label}
                  >
                    <Icon icon={icon} className="size-3" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="navbar-end gap-1">
            {!authToken && <ThemeSelect />}
            {authToken ? (
              <button
                onClick={() => setIsOpen(ModalMode.SETTINGS)}
                className="btn btn-sm btn-ghost btn-circle transition-all duration-300 hover:bg-base-200 hover:rotate-45"
              >
                <Icon icon={faGear} className="size-4" />
              </button>
            ) : (
              <LanguageSwitcher />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
