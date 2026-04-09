import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/store";
import useLogout from "../../hooks/useLogout";
import LanguageSwitcher from "../common/LanguageSwitcher/LanguageSwitcher";
import ThemeSelect from "../common/ThemeSelect/ThemeSelect";

const SettingsPanel = ({ handleClose }: { handleClose: () => void }) => {
  const { t } = useTranslation();
  const { username, email, role } = useAppSelector((state) => state.auth.user);
  const logout = useLogout();

  return (
    <div className="w-full space-y-5">
      <div>
        <label className="label pb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50">{t("settings.selectTheme")}</span>
        </label>
        <ThemeSelect />
      </div>
      <div className="bg-base-200/30 p-4 rounded-xl">
        <label className="label pb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50">{t("settings.selectLanguage")}</span>
        </label>
        <LanguageSwitcher />
      </div>
      <div className="bg-base-200/30 p-4 rounded-xl">
        <h3 className="text-sm font-semibold text-base-content/80 mb-3">{t("settings.userInfo")}</h3>
        <div className="divider divider-primary mt-0 mb-3 opacity-50" />
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-base-content/50 min-w-16">{t("common.name")}:</span>
            <span className="font-medium">{username}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-base-content/50 min-w-16">{t("common.email")}:</span>
            <span className="font-medium">{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-base-content/50 min-w-16">{t("common.role")}:</span>
            <span className="font-medium">{role}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <button
          className="btn btn-error btn-sm rounded-xl gap-2 transition-all duration-300 active:scale-95"
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          {t("buttons.logout")}
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
