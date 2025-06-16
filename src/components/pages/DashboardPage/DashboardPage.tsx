import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import InfoCalendar from "../../InfoCalendar/InfoCalendar";
import fetchAllReservationDatesThunk from "../../../store/thunks/reservation/fetchAllReservationDatesThunk";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";
import InfoCard from "../../InfoCard/InfoCard";
import { useTranslation } from "react-i18next";
import { faMapMarkerAlt, faCheckCircle, faUtensils, faCouch } from "@fortawesome/free-solid-svg-icons";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const reservedDates = useAppSelector(
    (state) => state.reservation.reservedDates
  );
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchReservations = async () => {
      const { meta } = await dispatch(fetchAllReservationDatesThunk());

      if (meta.requestStatus === "fulfilled") {
        setError(false);
      }

      if (meta.requestStatus === "rejected") {
        setError(true);
      }
    };
    fetchReservations();
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div className="flex flex-wrap justify-between gap-6 px-2 mx-auto max-w-screen-xl">
        {/* Left Column */}
        <div className="flex flex-col items-center w-full lg:w-[55%] min-w-[300px]">
          {!error && <InfoCalendar reservedDates={reservedDates} />}
          <ImageCarousel />
        </div>

        {/* Right Column */}
        <div className="flex flex-wrap justify-center gap-6 w-full my-4 lg:w-[40%] min-w-[300px]">
          <div className="w-full max-w-[420px] flex flex-col gap-6">
            <InfoCard
              title={t("dashboard.location.title")}
              description={t("dashboard.location.text")}
              icon={faMapMarkerAlt}
            />
            <InfoCard
              title={t("dashboard.convenience.title")}
              description={t("dashboard.convenience.text")}
              icon={faCheckCircle}
            />
            <InfoCard
              title={t("dashboard.kitchenware.title")}
              description={t("dashboard.kitchenware.text")}
              icon={faUtensils}
            />
            <InfoCard
              title={t("dashboard.comfort.title")}
              description={t("dashboard.comfort.text")}
              icon={faCouch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
