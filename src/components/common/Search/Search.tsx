import { PropsWithChildren } from "react";
import Icon from "../Icon/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

type Props = {
  onClick?: () => void;
  onSearch: (value: string) => void;
  onCriteriaSelect?: (value: string) => void;
  criteria?: boolean;
  searchCriteria?: string;
  criteriaOptions?: string[];
} & PropsWithChildren;

const Search = ({
  onClick,
  onSearch,
  onCriteriaSelect,
  criteria = false,
  searchCriteria = "",
  criteriaOptions = [],
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-0 rounded-xl overflow-hidden glass-card border border-base-content/10">
      <div className="flex items-center pl-3 text-base-content/40">
        <Icon icon={faSearch} className="h-3.5" />
      </div>
      <input
        className="input input-sm border-0 bg-transparent focus:outline-none w-40 placeholder:text-base-content/30"
        onChange={({ target }) => onSearch(target.value)}
        placeholder={t("common.search")}
      />
      {criteria && (
        <select
          value={searchCriteria as string}
          onChange={({ target }) =>
            onCriteriaSelect && onCriteriaSelect(target.value)
          }
          className="select select-sm border-0 bg-transparent focus:outline-none"
        >
          <option value="" />
          {Object.values(criteriaOptions).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {onClick && (
        <button onClick={onClick} className="btn btn-sm btn-primary rounded-none px-3">
          <Icon icon={faSearch} className="h-3" />
        </button>
      )}
    </div>
  );
};

export default Search;
