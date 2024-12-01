import { Form, Formik } from "formik";
import FormikField from "../../common/FormikField/FormikField";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { BaseExpenseValues } from "../../../types/Ledger";
import ButtonLoader from "../../common/ButtonLoader/ButtonLoader";
import { useAppDispatch } from "../../../store/store";
import addExpenseThunk from "../../../store/thunks/ledger/addExpenseThunk";

type Props = {
  isLoading?: boolean;
  ledgerId: string;
};

const initialValues: BaseExpenseValues = {
  title: "",
  amount: 0,
};

const CreateExpenseForm = ({ isLoading = false, ledgerId }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleExpenseSubmit = async (
    expense: BaseExpenseValues,
    resetForm: () => void
  ) => {
    const { meta } = await dispatch(addExpenseThunk({ ledgerId, expense }));

    if (meta.requestStatus === "fulfilled") {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) =>
        handleExpenseSubmit(values, resetForm)
      }
      validationSchema={Yup.object({
        amount: Yup.number().required(),
      })}
    >
      {({ isValid }) => (
        <Form className="flex flex-nowrap gap-2 justify-center mt-4">
          <FormikField
            className="w-6/12"
            name="title"
            placeholder={t("common.title")}
            error={false}
          />
          <FormikField
            className="w-3/12"
            name="amount"
            placeholder={t("common.amount")}
            error={false}
          />
          <ButtonLoader
            className="btn-primary w-2/12"
            type="submit"
            icon={faPlusCircle}
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CreateExpenseForm;
