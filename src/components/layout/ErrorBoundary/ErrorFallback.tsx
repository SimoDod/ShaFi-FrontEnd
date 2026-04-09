import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routePaths } from "../../../routerConfig";

export type ErrorFallbackProps = {
  resetError?: () => void;
  errorMessage?: "errorMessage" | "wrongPath";
};

const ErrorFallback = ({
  resetError,
  errorMessage = "errorMessage",
}: ErrorFallbackProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleErrorReset = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    resetError && resetError();

    navigate(routePaths.ledgers.path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="glass-card-strong rounded-2xl w-11/12 sm:w-96 p-8 text-center animate-scale-in">
        <h1 className="text-xl font-bold text-error mb-6">
          {t(`errorPage.${errorMessage}`)}
        </h1>
        <button
          className="btn btn-primary rounded-xl shadow-md shadow-primary/20 transition-all duration-300 active:scale-95"
          onClick={handleErrorReset}
        >
          {t("buttons.backButton")}
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
