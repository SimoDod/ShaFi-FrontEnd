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
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center p-4">
        <div className="text-center lg:text-left lg:w-1/2 px-4 mb-6 lg:mb-0 min-w-fit">
          <h1 className="text-3xl font-bold py-6">
            {t("login.admin")}{" "}
            <span className="text-primary">{t("login.panel")}</span>
          </h1>
          {/* <h1 className="text-5xl font-bold py-6">
            {t(`${authMode}.keyWord`)}{" "}
            <span className="text-primary">{t(`${authMode}.now`)}</span>
          </h1> */}
          {/* <p className="py-6 max-w-xl mx-auto lg:mx-0">
            {t(`${authMode}.toContinueUsing`)} {t(`${authMode}.action`)}
            <br />
            {t(`${authMode}.hasAccount`)}{" "}
            <a onClick={toggleAuthMode} className="link text-primary">
              {t(`${authMode}.link`)}
            </a>
          </p> */}
        </div>
        <div className="card bg-base-100 lg:min-w-96 shadow-2xl">
          <div>
            <button
              className="btn"
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
            <Form className="card-body">
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
              <div className="form-control mt-6 gap-4">
                <ButtonLoader
                  type="submit"
                  className="btn-primary"
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
