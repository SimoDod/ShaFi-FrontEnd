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
    <div className="overflow-x-auto rounded-xl">
      <table className="table glass-surface">
        <thead>
          <tr className="border-b border-base-content/5">
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80">{t("common.note")}</th>
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80 text-center">{t("common.reserved")}</th>
            <th className="text-xs font-semibold uppercase tracking-wider text-primary/80 text-center">{t("common.paid")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservations.length === 0 ? (
            <tr>
              <td colSpan={100} className="text-center py-16">
                <div className="flex flex-col items-center justify-center gap-2 text-base-content/30">
                  <Icon icon={faBoxOpen} className="h-12" />
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
                <tr key={_id} className="border-b border-base-content/5 transition-colors duration-200 hover:bg-base-200/30">
                  <td className="text-sm font-medium">{note}</td>
                  <td className="text-center w-10">
                    <div className="text-sm text-base-content/70">
                      {format(
                        parseISO(reservationStart),
                        dateFormats.defaultSlash
                      )}
                    </div>
                    <div className="divider divider-primary m-0 opacity-50" />
                    <div className="text-sm text-base-content/70">
                      {format(
                        parseISO(reservationEnd),
                        dateFormats.defaultSlash
                      )}
                    </div>
                  </td>
                  <td className="text-center w-10 text-sm font-medium tabular-nums">{Number(paid).toFixed(2)}</td>
                  <td className="text-center px-2 w-10">
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="btn btn-sm btn-ghost btn-circle transition-all duration-300 hover:bg-base-200">
                        <Icon icon={faEllipsisVertical} className="h-4" />
                      </MenuButton>

                      <MenuItems className="absolute right-0 z-10 mt-1 w-36 origin-top-right glass-card-strong rounded-xl p-1">
                        <MenuItem
                          as="button"
                          onClick={() =>
                            navigate(
                              `${routePaths.reservations.path}${year}/${_id}`
                            )
                          }
                          className="ui-active:bg-primary/10 text-sm text-base-content w-full px-3 py-2 text-left flex items-center gap-2 rounded-lg transition-colors duration-200"
                        >
                          <Icon icon={faEdit} className="h-3.5" />
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
                          className="text-error ui-active:bg-error/10 text-sm w-full px-3 py-2 text-left flex items-center gap-2 rounded-lg transition-colors duration-200"
                        >
                          <Icon icon={faTrashCan} className="h-3.5" />
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
