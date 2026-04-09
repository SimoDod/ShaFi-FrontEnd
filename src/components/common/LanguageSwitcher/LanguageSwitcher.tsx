import { changeLanguage } from "i18next";
import { languages } from "../../../localization/constants";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-xl bg-base-200/50 backdrop-blur-sm">
      {languages.map(({ shortName }) => (
        <input
          key={shortName}
          className="join-item btn btn-sm rounded-lg transition-all duration-300"
          type="radio"
          name="options"
          aria-label={shortName.toUpperCase()}
          id={shortName}
          onChange={() => changeLanguage(shortName)}
          checked={i18n.language === shortName}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;
