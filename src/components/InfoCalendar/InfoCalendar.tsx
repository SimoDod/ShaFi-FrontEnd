import Calendar from "react-calendar";
import WindowCard from "../WindowCard/WindowCard";
import clsx from "clsx";
import getDateRange from "../../utils/date/getDateRange";
import {
  formatISO,
  isSameMonth,
  isSaturday,
  isSunday,
  isToday,
} from "date-fns";
import Icon from "../common/Icon/Icon";
import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./InfoCalendar.css";
import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const InfoCalendar = ({ reservedDates = [] }: { reservedDates?: string[] }) => {
  const { pastDate, futureDate } = getDateRange(1, 13);
  const [isDoubleView, setIsDoubleView] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { i18n, t } = useTranslation();

  const isReserved = (date: Date) =>
    reservedDates.includes(formatISO(date, { representation: "date" }));

  useEffect(() => {
    if (isMap) {
      const scrollTimeout = setTimeout(() => {
        iframeRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);

      return () => clearTimeout(scrollTimeout);
    }
  }, [isMap]);

  return (
    <WindowCard headingGap={0} opacity="75" background="base-100" blur>
      <div className="w-full max-w-lg rounded-lg p-4 pt-0 font-semibold">
        <Calendar
          tileClassName={({ date, activeStartDate, view }) =>
            clsx("mb-2 rounded-md", {
              "bg-error": isReserved(date),
              "hover:bg-base-100 hover:text-secondary": !isReserved(date),
              "border border-primary": isToday(date),
              "text-primary": isSunday(date) || isSaturday(date),
              "opacity-20":
                view === "month" && !isSameMonth(date, activeStartDate),
            })
          }
          className="text-center space-y-6"
          showFixedNumberOfWeeks
          prev2Label={null}
          next2Label={null}
          minDate={pastDate}
          maxDate={futureDate}
          showDoubleView={isDoubleView}
          locale={i18n.language}
          nextLabel={
            <span className="btn btn-circle text-xl font-bold text-primary w-14 h-14">
              <Icon icon={faArrowRight} />
            </span>
          }
          prevLabel={
            <span className="btn btn-circle text-xl font-bold text-primary w-14 h-14">
              <Icon icon={faArrowLeft} />
            </span>
          }
          navigationLabel={({ label }) => (
            <div className="w-40 text-md text-center">{label}</div>
          )}
        />
      </div>
      <div className="flex justify-end p-2 gap-4">
        <button
          className={`btn btn-sm btn-${isDoubleView ? "neutral" : "link"}`}
          onClick={() => setIsDoubleView((prev) => !prev)}
        >
          <Icon icon={faCalendar} className="h-4 mr-2" />
          {t("dashboard.double")}
        </button>

        <button
          className={`btn btn-sm btn-${isMap ? "neutral" : "link"}`}
          onClick={() => setIsMap((prev) => !prev)}
        >
          <Icon icon={faMapLocationDot} className="h-4 mr-2" />
          {t("dashboard.map")}
        </button>
      </div>

      <Transition
        show={isMap}
        enter="transition-all ease-in-out duration-600"
        enterFrom="transform scale-y-0 opacity-0 max-h-0"
        enterTo="transform scale-y-100 opacity-100 max-h-screen"
        leave="transition-all ease-in-out duration-600"
        leaveFrom="transform scale-y-100 opacity-100 max-h-screen"
        leaveTo="transform scale-y-0 opacity-0 max-h-0"
      >
        <iframe
          ref={iframeRef}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.3951867618061!2d27.70441601052865!3d42.67023911367717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69f8a395592f5%3A0x9bdddc4ef30b53a4!2z0JDQu9GE0LA!5e0!3m2!1sbg!2sbg!4v1731147691360!5m2!1sbg!2sbg"
          className="w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </Transition>
    </WindowCard>
  );
};

export default InfoCalendar;
