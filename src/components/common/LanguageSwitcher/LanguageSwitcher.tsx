import { changeLanguage } from "i18next";
import { languages } from "../../../localization/constants";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  console.log(i18n);
  

  return (
    <div className="join">
      {languages.map(({ shortName }) => (
        <input
          className="join-item btn"
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
