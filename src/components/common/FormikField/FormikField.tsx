import { ErrorMessage, Field } from "formik";
import { PropsWithChildren } from "react";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  fieldClassName?: string;
  disabled?: boolean;
  error?: boolean;
  as?: "input" | "textarea" | "select";
  type?: "password" | "text" | "number" | "date" | "datetime-local";
} & PropsWithChildren;

const FormikField = ({
  name,
  label,
  placeholder = "",
  children,
  className,
  disabled = false,
  error = true,
  as = "input",
  type = "text",
}: Props) => {
  return (
    <div className={`form-control ${className}`}>
      {label && (
        <label className="label pb-1">
          <span className="label-text text-sm font-medium text-base-content/70">{label}</span>
        </label>
      )}
      <Field
        as={as}
        name={name}
        className={`${as} ${as}-bordered rounded-xl bg-base-200/30 border-base-content/10 focus:border-primary focus:bg-base-100 transition-all duration-200 disabled:text-primary`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      >
        {as === "select" ? children : null}
      </Field>
      {error && (
        <ErrorMessage
          name={name}
          component="div"
          className="text-error/80 text-xs mt-1 ml-1"
        />
      )}
    </div>
  );
};

export default FormikField;
