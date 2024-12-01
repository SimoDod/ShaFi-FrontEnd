import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ icon, className, onClick }: Props) => (
  <FontAwesomeIcon icon={icon} className={className} onClick={onClick} />
);

export default Icon;
