import { useEffect, useState } from "react";
import { api } from "../../api/api";
import useNotification from "../../hooks/useNotification";
import { useTranslation } from "react-i18next";

type Balance = {
  totalLedgerBalance: number;
  totalPaidReservations: number;
  totalBalance: number;
};

// Translate

const ExpensesStats = () => {
  const [balance, setTotalBalance] = useState<Balance>();
  const [isLoading, setIsLoading] = useState(false);
  const openNotification = useNotification();
  const { t } = useTranslation();

  useEffect(() => {
    const getTotalBalance = async () => {
      try {
        setIsLoading(true);
        const response = await api.get<Balance>("/auth/total-balance");

        if (response.data) {
          setTotalBalance(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        openNotification("warning", "Error loading stats.");
      } finally {
        setIsLoading(false);
      }
    };
    getTotalBalance();
  }, [openNotification]);

  return isLoading ? (
    <span className="loading loading-dots loading-lg" />
  ) : (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title text-error mb-2">{t("common.expense")}</div>
        <div className="stat-value">
          {balance?.totalLedgerBalance.toFixed(2)}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title text-success mb-2">{t("common.income")}</div>
        <div className="stat-value">
          {balance?.totalPaidReservations.toFixed(2)}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title text-primary mb-2">
          {t("common.balance")}
        </div>
        <div className="stat-value">{balance?.totalBalance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ExpensesStats;
