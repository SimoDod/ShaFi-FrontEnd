import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { getAuthToken } from "../../utils/authentication/authentication";
import { routePaths } from "../../routerConfig";

const GuestGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token || getAuthToken());

  useEffect(() => {
    if (token) {
      navigate(routePaths.ledgers.path);
    }
  }, [token, navigate]);

  return !token ? children : null;
};

export default GuestGuard;
