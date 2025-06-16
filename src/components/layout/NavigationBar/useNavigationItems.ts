import {
  faCalendarDays,
  faHome,
  faReceipt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { routePaths } from "../../../routerConfig";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../../utils/authentication/authentication";

type MenuItem = {
  label: string;
  icon: IconDefinition;
  isActive: boolean;
  isVisible: boolean;
  onClick: () => void;
};

const useNavigationItems = (): MenuItem[] => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const authToken = getAuthToken();

  return [
    {
      label: t(routePaths.dashboard.label),
      icon: faHome,
      isActive: routePaths.dashboard.path === pathname,
      isVisible: !!authToken,
      onClick: () => navigate(routePaths.dashboard.path),
    },
    {
      label: t(routePaths.ledgers.label),
      icon: faReceipt,
      isActive: pathname.includes(routePaths.ledgers.path),
      isVisible: !!authToken,
      onClick: () => navigate(routePaths.ledgers.path),
    },
    {
      label: t(routePaths.reservations.label),
      icon: faCalendarDays,
      isActive: pathname.includes(routePaths.reservations.path),
      isVisible: !!authToken,
      onClick: () => navigate(routePaths.reservations.path),
    },
  ];
};

export default useNavigationItems;
