type Props = {
  previousPage: () => void;
  nextPage: () => void;
  totalPages?: number;
  currentPage: number;
  mode?: "page" | "total";
};

const Pagination = ({
  previousPage,
  nextPage,
  totalPages,
  currentPage,
  mode = "total",
}: Props) => (
  <div className="flex items-center gap-1 p-1 rounded-xl bg-base-200/50 backdrop-blur-sm">
    <button
      className="btn btn-sm btn-ghost rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-content active:scale-95"
      onClick={previousPage}
    >
      «
    </button>
    <span className="px-3 text-sm font-medium tabular-nums text-base-content/70 select-none">
      {currentPage}{mode === "total" && ` / ${totalPages}`}
    </span>
    <button
      className="btn btn-sm btn-ghost rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-content active:scale-95"
      onClick={nextPage}
    >
      »
    </button>
  </div>
);
export default Pagination;
