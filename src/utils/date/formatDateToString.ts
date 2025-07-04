import { isDate, format, isValid, parseISO } from "date-fns";

export const dateFormats = {
  defaultSlash: "dd/MM/yy",
  defaultLine: "dd-MM-yyyy",
  yearFirstLine: "yyyy-MM-dd",
  dateAndMonth: "dd-MM",
};

const formatDateToString = (
  date: Date | string | null,
  formatType = dateFormats.defaultSlash
): string | null => {
  if (!date) return null;

  const parsedDate = typeof date === "string" ? parseISO(date) : date;

  return isDate(parsedDate) && isValid(parsedDate)
    ? format(parsedDate, formatType)
    : null;
};

export default formatDateToString;
