import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import WindowCard from "../../WindowCard/WindowCard";
import { routePaths } from "../../../routerConfig";
import useYearNavigation from "../../../hooks/useYearNavigation";
import { useTranslation } from "react-i18next";
import LedgerTile from "../../LedgerTile/LedgerTile";
import Modal from "../../common/Modal/Modal";
import CreateLedgerTile from "../../LedgerTile/CreateLedgerTile/CreateLedgerTile";
import { BaseLedgerValues, LedgerModal } from "../../../types/Ledger";
import CreateLedgerForm from "../../forms/CreateLedgerForm/CreateLedgerForm";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import createLedgerThunk from "../../../store/thunks/ledger/createLedgerThunk";
import fetchLedgersByYearThunk from "../../../store/thunks/ledger/fetchLedgersByYearThunk";
import { useEffect } from "react";
import CreateExpenseForm from "../../forms/CreateExpenseForm/CreateExpenseForm";
import ExpensesTable from "../../ExpensesTable/ExpensesTable";
import { setCurrLedgerById } from "../../../store/slices/ledgerSlice";

const LedgersPage = () => {
  const { t } = useTranslation();
  const { year, ledgerId } = useParams();
  const dispatch = useAppDispatch();
  const { ledgers, curLedger, isLoading } = useAppSelector(
    (state) => state.ledger
  );
  const userId = useAppSelector((state) => state.auth.user._id);
  const navigate = useNavigate();
  const { goToPreviousYear, goToNextYear } = useYearNavigation(
    routePaths.ledgers.path,
    year
  );

  const handleCreateLedgerSubmit = async (values: BaseLedgerValues) => {
    const { meta } = await dispatch(createLedgerThunk({ userId, ...values }));

    if (meta.requestStatus === "fulfilled") {
      navigate(`${routePaths.ledgers.path}${year}`);
    }
  };

  useEffect(() => {
    if (year) {
      dispatch(fetchLedgersByYearThunk(year));
    }
  }, [dispatch, year]);

  useEffect(() => {
    if (ledgerId && !isLoading) {
      dispatch(setCurrLedgerById(ledgerId));
    }
  }, [dispatch, isLoading, ledgerId]);

  return (
    <>
      {ledgerId && ledgerId !== LedgerModal.CREATE && (
        <Modal
          title={curLedger?.title}
          onClose={() => navigate(`${routePaths.ledgers.path}${year}`)}
        >
          <ExpensesTable expenses={curLedger?.expenses} ledgerId={ledgerId} />
          <CreateExpenseForm ledgerId={ledgerId} isLoading={isLoading} />
        </Modal>
      )}
      {ledgerId === LedgerModal.CREATE && (
        <Modal
          onClose={() => navigate(`${routePaths.ledgers.path}${year}`)}
          title={t("ledgersPage.createNewLedger")}
        >
          <CreateLedgerForm
            onSubmit={handleCreateLedgerSubmit}
            isLoading={isLoading}
          />
        </Modal>
      )}
      <div className="mx-2 2xl:pr-40 2xl:pl-40">
        <WindowCard
          contentClass="flex flex-wrap justify-evenly"
          heading={
            <h2 className="text text-3xl text-base-300">
              {t("ledgersPage.ledgers")}
            </h2>
          }
          extra={
            <Pagination
              nextPage={goToNextYear}
              previousPage={goToPreviousYear}
              currentPage={Number(year)}
              mode="page"
            />
          }
        >
          {ledgers.map(({ color, _id, title, total }) => (
            <LedgerTile
              key={_id}
              id={_id}
              color={color}
              onClick={() =>
                navigate(`${routePaths.ledgers.path}${year}/${_id}`)
              }
              title={title}
              total={total}
            />
          ))}
          <CreateLedgerTile
            onClick={() =>
              navigate(
                `${routePaths.ledgers.path}${year}${routePaths.ledgers.create}`
              )
            }
          />
        </WindowCard>
      </div>
    </>
  );
};

export default LedgersPage;
