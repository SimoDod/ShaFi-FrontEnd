import clsx from "clsx";
import Icon from "../common/Icon/Icon";
import useNavigationItems from "./useNavigationItems";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { ThemeType } from "../../types/Theme";
import useTheme from "../../hooks/useTheme";

const NavigationMenu = () => {
  const navMenuItems = useNavigationItems();
  const { setTheme } = useTheme();

  return (
    <ul className="menu menu-horizontal  rounded-box">
      {navMenuItems.map(({ icon, label, onClick, isActive }) => (
        <li
          key={label}
          className={clsx(
            { "bg-primary text-base-200": isActive },
            "hover:bg-secondary hover:text-base-200 rounded mr-1 ml-1"
          )}
        >
          <a
            className="tooltip tooltip-bottom"
            data-tip={label}
            onClick={onClick}
          >
            <Icon icon={icon} className="size-4" />
          </a>
        </li>
      ))}
      <details className="dropdown dropdown-end">
        <summary className="p-2 hover:text-base-200 ">
          <Icon icon={faPaintBrush} className="size-4" />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {Object.values(ThemeType).map((theme) => (
            <li onClick={() => setTheme(theme)}>
              <a>{`${theme.charAt(0).toUpperCase()}${theme.slice(1)}`}</a>
            </li>
          ))}
        </ul>
      </details>
    </ul>
  );
};

export default NavigationMenu;
