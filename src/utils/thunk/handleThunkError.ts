import { AxiosError, HttpStatusCode } from "axios";
import i18n from "../../localization/i18n";

const handleThunkError = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    if (error.status === HttpStatusCode.TooManyRequests) {
      return error.response?.data;
    }
    return error.response.data?.join(", ");
  }

  return i18n.t("apiError.unknownError");
};

export default handleThunkError;
