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
    <div className="w-full p-4 bg-base-200 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label className="label">
            <span className="label-text">{t("settings.selectTheme")}</span>
          </label>
          <ThemeSelect />
        </div>
        <div className="bg-base-100 pb-3 pl-3 rounded-md">
          <label className="label">
            <span className="label-text">{t("settings.selectLanguage")}</span>
          </label>
          <LanguageSwitcher />
        </div>
        <div className="bg-base-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold">{t("settings.userInfo")}</h3>
          <div className="divider divider-primary m-0" />
          <div className="space-y-2">
            <div>
              <span className="font-medium">{t("common.name")}:</span>{" "}
              {username}
            </div>
            <div>
              <span className="font-medium">{t("common.email")}:</span> {email}
            </div>
            <div>
              <span className="font-medium">{t("common.role")}:</span> {role}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="btn btn-error"
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            {t("buttons.logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
