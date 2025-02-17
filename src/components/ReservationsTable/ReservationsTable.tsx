import {
  faBoxOpen,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../common/Icon/Icon";
import { ReservationResponse } from "../../types/Reservation";
import { format, parseISO } from "date-fns";
import { dateFormats } from "../../utils/date/formatDateToString";
import { useAppDispatch } from "../../store/store";
import deleteReservationThunk from "../../store/thunks/reservation/deleteReservationThunk";
import useDialog from "../../hooks/useDialog";
import { useNavigate, useParams } from "react-router-dom";
import { routePaths } from "../../routerConfig";
import { useTranslation } from "react-i18next";

type Props = {
  reservations: ReservationResponse[];
};

const ReservationsTable = ({ reservations }: Props) => {
  const dispatch = useAppDispatch();
  const openDialog = useDialog();
  const navigate = useNavigate();
  const { year } = useParams();
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-base-300">
        <thead>
          <tr>
            <th className="text text-primary">{t("common.note")}</th>
            <th className="text text-primary">{t("common.reserved")}</th>
            <th className="text text-primary">{t("common.paid")}</th>
            <th className="text text-primary">{t("common.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length === 0 ? (
            <tr>
              <td colSpan={100} className="text-center py-10">
                <div className="flex items-center justify-center">
                  <Icon icon={faBoxOpen} className="h-16" />
                </div>
              </td>
            </tr>
          ) : (
            reservations.map(
              ({
                note,
                reservationDate: [reservationStart, reservationEnd],
                paid,
                _id,
              }) => (
                <tr key={_id}>
                  <td>{note}</td>
                  <td>
                    <div>
                      {format(
                        parseISO(reservationStart),
                        dateFormats.defaultSlash
                      )}
                    </div>
                    <div className="divider divider-primary w-16 m-0 ml-1" />
                    <div>
                      {format(
                        parseISO(reservationEnd),
                        dateFormats.defaultSlash
                      )}
                    </div>
                  </td>
                  <td>{paid}</td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() =>
                        navigate(
                          `${routePaths.reservations.path}${year}/${_id}`
                        )
                      }
                    >
                      <Icon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-link"
                      onClick={() =>
                        openDialog("delete", {
                          onConfirm: () =>
                            dispatch(deleteReservationThunk(_id)),
                        })
                      }
                    >
                      <Icon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsTable;
