import { useEffect, useState } from "react";
import { api } from "../../api/api";
import useNotification from "../../hooks/useNotification";
import { useTranslation } from "react-i18next";

type Balance = {
  totalLedgerBalance: number;
  totalPaidReservations: number;
  totalBalance: number;
};

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
    <span className="loading loading-dots loading-lg text-primary" />
  ) : (
    <div className="w-full max-w-sm space-y-3 py-2">
      <div className="glass-card rounded-xl p-4 hover-lift">
        <div className="text-xs font-semibold uppercase tracking-wider text-success/80 mb-1">{t("common.income")}</div>
        <div className="text-2xl font-bold tabular-nums">
          {balance?.totalPaidReservations.toFixed(2)}
        </div>
      </div>
      <div className="glass-card rounded-xl p-4 hover-lift">
        <div className="text-xs font-semibold uppercase tracking-wider text-error/80 mb-1">{t("common.expense")}</div>
        <div className="text-2xl font-bold tabular-nums">
          {balance?.totalLedgerBalance.toFixed(2)}
        </div>
      </div>
      <div className="glass-card rounded-xl p-4 hover-lift">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-1">
          {t("common.balance")}
        </div>
        <div className="text-2xl font-bold tabular-nums">{balance?.totalBalance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ExpensesStats;
