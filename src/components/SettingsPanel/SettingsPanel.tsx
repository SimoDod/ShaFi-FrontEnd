import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import { ThemeType } from "../../types/Theme";
import { languages } from "../../localization/constants";
import { changeLanguage } from "i18next";
import { useAppSelector } from "../../store/store";
import useLogout from "../../hooks/useLogout";

const SettingsPanel = () => {
  const { t } = useTranslation();
  const { setTheme, theme } = useTheme();
  const { username, email, role } = useAppSelector((state) => state.auth.user);
  const logout = useLogout();

  return (
    <div className="w-full max-w-md p-4 bg-base-200 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label className="label">
            <span className="label-text">{t("settings.selectTheme")}</span>
          </label>
          <select
            onChange={({ target }) => setTheme(target.value as ThemeType)}
            value={theme}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>{t("settings.pickTheme")}</option>
            {Object.values(ThemeType).map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-base-100 pb-3 pl-3 rounded-md">
          <label className="label">
            <span className="label-text">{t("settings.selectLanguage")}</span>
          </label>
          <div className="join">
            {languages.map(({ shortName }) => (
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label={shortName.toUpperCase()}
                id={shortName}
                onChange={() => changeLanguage(shortName)}
                checked={shortName === localStorage.getItem("i18nextLng")}
              />
            ))}
          </div>
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
          <button className="btn btn-error" onClick={() => logout()}>
            {t("buttons.logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
