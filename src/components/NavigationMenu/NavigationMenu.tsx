import clsx from "clsx";
import Icon from "../common/Icon/Icon";
import useNavigationItems from "./useNavigationItems";

const NavigationMenu = () => {
  const navMenuItems = useNavigationItems();

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
    </ul>
  );
};

export default NavigationMenu;
