import { PropsWithChildren, ReactNode } from "react";

type Props = {
  isLoading?: boolean;
  heading?: ReactNode;
  extra?: ReactNode;
  contentClass?: string;
  headingGap?: number;
} & PropsWithChildren;

const WindowCard = ({
  isLoading = false,
  heading,
  extra,
  children,
  contentClass,
  headingGap = 4,
}: Props) => {
  return (
    <div className="glass-card rounded-2xl mb-8 mt-4 overflow-auto">
      <div
        className={`flex justify-between items-center flex-wrap px-5 pt-5 mb-${headingGap}`}
      >
        <div>{heading}</div>
        <div>{extra}</div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center py-32">
          <span className="loading loading-bars loading-lg text-primary" />
        </div>
      ) : (
        <div className={contentClass}>{children}</div>
      )}
    </div>
  );
};

export default WindowCard;
