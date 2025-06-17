import {
  faBoxOpen,
  faEdit,
  faEllipsisVertical,
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
      <table className="table table-zebra bg-base-300 bg-opacity-85 backdrop-blur">
        <thead>
          <tr>
            <th className="text text-primary">{t("common.note")}</th>
            <th className="text text-primary text-center">{t("common.reserved")}</th>
            <th className="text text-primary text-center">{t("common.paid")}</th>
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
                  <td className="text-center w-10">
                    <div>
                      {format(
                        parseISO(reservationStart),
                        dateFormats.defaultSlash
                      )}
                    </div>
                    <div className="divider divider-primary m-0 " />
                    <div>
                      {format(
                        parseISO(reservationEnd),
                        dateFormats.defaultSlash
                      )}
                    </div>
                  </td>
                  <td className="text-center w-10">{paid}</td>
                  <td className="text-center px-2 w-10">
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="btn btn-sm btn-ghost">
                        <Icon icon={faEllipsisVertical} className="h-4" />
                      </MenuButton>

                      <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-base-100 shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <MenuItem
                          as="button"
                          onClick={() =>
                            navigate(
                              `${routePaths.reservations.path}${year}/${_id}`
                            )
                          }
                          className="ui-active:bg-primary ui-active:text-primary-content text-sm text-base-content w-full px-4 py-2 text-left flex items-center gap-2 rounded"
                        >
                          <Icon icon={faEdit} className="h-4" />
                          {t("buttons.edit")}
                        </MenuItem>

                        <MenuItem
                          as="button"
                          onClick={() =>
                            openDialog("delete", {
                              onConfirm: () =>
                                dispatch(deleteReservationThunk(_id)),
                            })
                          }
                          className="text-error ui-active:bg-error ui-active:text-error-content text-sm w-full px-4 py-2 text-left flex items-center gap-2 rounded"
                        >
                          <Icon icon={faTrashCan} className="h-4 text-error" />
                          {t("buttons.delete")}
                        </MenuItem>
                      </MenuItems>
                    </Menu>
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
