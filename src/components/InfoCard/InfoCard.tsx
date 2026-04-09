import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  description: string;
  icon?: IconDefinition;
  delay?: number;
};

const InfoCard = ({ title, description, icon, delay = 0 }: Props) => {
  return (
    <div
      className="glass-card rounded-2xl hover-lift hover-glow group"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="p-5">
        <h2 className="flex items-center gap-2.5 text-lg font-semibold text-primary mb-2">
          {icon && (
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <FontAwesomeIcon icon={icon} className="text-primary w-4 h-4" />
            </span>
          )}
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-base-content/70 ml-[2.625rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
