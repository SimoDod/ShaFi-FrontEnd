import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  description: string;
  icon?: IconDefinition;
};

const InfoCard = ({ title, description, icon }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 backdrop-blur bg-opacity-65">
      <div className="card-body">
        <h2 className="card-title text-primary gap-2 items-center">
          {icon && (
            <FontAwesomeIcon icon={icon} className="text-accent w-5 h-5" />
          )}
          {title}
        </h2>
        <p className="text-base leading-relaxed text-base-content">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
