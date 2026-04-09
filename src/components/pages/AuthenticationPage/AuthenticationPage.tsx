import { useAppSelector } from "../../../store/store";
import { Formik, Form } from "formik";
import ButtonLoader from "../../common/ButtonLoader/ButtonLoader";
import { useTranslation } from "react-i18next";
import useAuthenticationPage from "./useAuthenticationPage";
import FormikField from "../../common/FormikField/FormikField";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../routerConfig";
import Icon from "../../common/Icon/Icon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AuthenticationPage = () => {
  const { t } = useTranslation();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const {
    validationSchema,
    initialValues,
    authModeKeys,
    authMode,
    handleAuthentication,
  } = useAuthenticationPage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row-reverse lg:items-center gap-8 animate-scale-in">
        <div className="text-center lg:text-left lg:w-1/2 px-4">
          <h1 className="text-4xl font-bold tracking-tight py-6">
            {t("login.admin")}{" "}
            <span className="text-primary">{t("login.panel")}</span>
          </h1>
        </div>
        <div className="glass-card-strong rounded-2xl lg:min-w-96 overflow-hidden">
          <div className="p-2">
            <button
              className="btn btn-ghost btn-sm rounded-xl gap-2 transition-all duration-300 hover:bg-base-200/60"
              onClick={() => navigate(routePaths.dashboard.path)}
            >
              <Icon icon={faArrowLeft} /> {t("buttons.backButton")}
            </button>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleAuthentication}
          >
            <Form className="px-8 pb-8 pt-2 space-y-4">
              {authModeKeys.map((key) => (
                <FormikField
                  key={key}
                  name={key}
                  label={t(`${authMode}.${key}`)}
                  type={
                    key.toLowerCase().includes("password") ? "password" : "text"
                  }
                />
              ))}
              <div className="pt-4">
                <ButtonLoader
                  type="submit"
                  className="btn-primary w-full rounded-xl shadow-md shadow-primary/20"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  {t(`${authMode}.keyWord`)}
                </ButtonLoader>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
