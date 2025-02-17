import Datepicker from "react-tailwindcss-datepicker";
import { parse, eachDayOfInterval, isSameDay } from "date-fns";
import { dateFormats } from "../../../utils/date/formatDateToString";
import { ErrorMessage } from "formik";
import useNotification from "../../../hooks/useNotification";
import { useTranslation } from "react-i18next";
import { DateRangeType } from "react-tailwindcss-datepicker/dist/types";

type Props = {
  name: string;
  value: [string, string];
  label: string;
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: Date[];
  onChange: (dates: [Date | null, Date | null]) => void;
};

const DateRangePicker = ({
  name,
  value,
  label,
  minDate,
  maxDate,
  excludeDates = [],
  onChange,
}: Props) => {
  const openNotification = useNotification();
  const { t } = useTranslation();

  const parseDate = (dateString: string) =>
    dateString
      ? parse(dateString, dateFormats.yearFirstLine, new Date())
      : null;

  const startDate = parseDate(value[0]);
  const endDate = parseDate(value[1]);

  const handleChange = (pickerValue: DateRangeType | null) => {
    const dates: [Date | null, Date | null] = [
      pickerValue?.startDate || null,
      pickerValue?.endDate || null,
    ];

    const [start, end] = dates;

    if (start && end) {
      const selectedRange = eachDayOfInterval({ start, end });
      const hasDisabledDate = selectedRange.some((day) =>
        excludeDates.some((disabledDate) => isSameDay(day, disabledDate))
      );

      if (hasDisabledDate) {
        openNotification("warning", t("notifications.dateReserved"));
        return;
      }
    }

    onChange(dates);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-base">{label}</span>
      </label>
      <Datepicker
        value={{ startDate, endDate }}
        onChange={handleChange}
        useRange={false}
        minDate={minDate}
        maxDate={maxDate}
        inputClassName="input focus:border-primary border border-neutral min-w-72 text-primary"
        readOnly={true}
        disabledDates={excludeDates.map((date) => ({
          startDate: date,
          endDate: date,
        }))}
        startWeekOn="mon"
        popoverDirection="down"
        displayFormat="DD/MM/YY"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-400 text-xs"
      />
    </div>
  );
};

export default DateRangePicker;
