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
        <label className="label">
          <span className="label-text text-base">{label}</span>
        </label>
      )}
      <Field
        as={as}
        name={name}
        className={`${as} ${as}-bordered focus:border-primary disabled:text-primary`}
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
          className="text-red-400 text-xs"
        />
      )}
    </div>
  );
};

export default FormikField;
