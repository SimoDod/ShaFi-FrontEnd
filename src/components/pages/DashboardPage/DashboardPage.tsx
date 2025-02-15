import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import InfoCalendar from "../../InfoCalendar/InfoCalendar";
import fetchAllReservationDatesThunk from "../../../store/thunks/reservation/fetchAllReservationDatesThunk";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const reservedDates = useAppSelector(
    (state) => state.reservation.reservedDates
  );
  const [error, setError] = useState(false);

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
      <div className="flex justify-center py-2">
        <NavigationMenu />
      </div>
      <div className="flex justify-center items-center m-1">
        {!error && <InfoCalendar reservedDates={reservedDates} />}
      </div>
    </div>
  );
};

export default DashboardPage;
