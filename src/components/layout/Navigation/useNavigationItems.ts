import {
  faCalendarDays,
  faHome,
  faReceipt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { routePaths } from "../../../routerConfig";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = {
  label: string;
  icon: IconDefinition;
  isActive?: boolean;
  onClick: () => void;
};

const useNavigationItems = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navMenuItems: MenuItem[] = [
    {
      label: t(routePaths.dashboard.label),
      icon: faHome,
      isActive: routePaths.dashboard.path === pathname,
      onClick: () => navigate(routePaths.dashboard.path),
    },
    {
      label: t(routePaths.ledgers.label),
      icon: faReceipt,
      isActive: pathname.includes(routePaths.ledgers.path),
      onClick: () => navigate(routePaths.ledgers.path),
    },
    {
      label: t(routePaths.reservations.label),
      icon: faCalendarDays,
      isActive: pathname.includes(routePaths.reservations.path),
      onClick: () => navigate(routePaths.reservations.path),
    },
  ];

  return navMenuItems;
};

export default useNavigationItems;
