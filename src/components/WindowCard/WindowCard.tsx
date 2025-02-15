import { PropsWithChildren, ReactNode } from "react";

type Props = {
  isLoading?: boolean;
  heading?: ReactNode;
  extra?: ReactNode;
  contentClass?: string;
  headingGap?: number;
  opacity?: string;
  background?: "transparent" | "primary" | "secondary" | "base-300";
} & PropsWithChildren;

const WindowCard = ({
  isLoading = false,
  heading,
  extra,
  children,
  contentClass,
  headingGap = 4,
  opacity = "100",
  background = "transparent",
}: Props) => {
  return (
    <div
      className={`mockup-window bg-${background} mb-8 mt-4 overflow-auto opacity-${opacity}`}
    >
      <div
        className={`flex justify-between items-center flex-wrap pl-6 pr-6 mb-${headingGap}`}
      >
        <div>{heading}</div>
        <div>{extra}</div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-bars loading-lg mt-52 mb-40" />
        </div>
      ) : (
        <div className={contentClass}>{children}</div>
      )}
    </div>
  );
};

export default WindowCard;
