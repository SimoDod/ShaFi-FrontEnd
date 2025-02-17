import { format, parseISO } from "date-fns";
import { ReservationResponse } from "../../types/Reservation";
import { dateFormats } from "../date/formatDateToString";

const filterReservationsByValue = (
  value: string,
  reservations: ReservationResponse[]
) =>
  reservations.filter((reservation) => {
    const matchesNote = reservation.note
      .toLowerCase()
      .includes(value.toLowerCase());
    const matchesPaid = reservation.paid.toString().includes(value);
    const matchesDate = reservation.reservationDate.some((date) => {
      const formattedDate = format(parseISO(date), dateFormats.defaultSlash);
      return formattedDate.includes(value);
    });

    return matchesNote || matchesPaid || matchesDate;
  });

export default filterReservationsByValue;
