import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavButton, NavText } from "./styles";
import { NavButtonProps } from "./types";

const NavigatorButton: React.FC<NavButtonProps> = ({
  onClick,
  name,
  activeNav,
}) => {
  return (
    <NavButton
      onClick={onClick}
      className={activeNav == name ? "bg-[#6231F4] text-[#fff]" : ""}
    >
      <NavText>{name}</NavText>
      <FontAwesomeIcon icon={faChevronRight} />
    </NavButton>
  );
};

export default NavigatorButton;
