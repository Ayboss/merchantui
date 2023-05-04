import {
  Topbar,
  WelcomeContainer,
  CTAContainer,
  WelcomeNote,
  Breadcrumb,
  Notification,
  MerchantsAvatar,
  FlexContainer,
  NameTag,
  LogoutButton,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import bellIcon from "../../assets/icons/bell-icon.svg";

const DashboardTopbar = () => {
  return (
    <Topbar>
      <WelcomeContainer>
        <WelcomeNote>Welcome Abdulhafiz !</WelcomeNote>
        <Breadcrumb>
          <span> Dashboard</span>
          <FontAwesomeIcon
            icon={faGreaterThan}
            className="font-light mx-2 text-[10px] text-[#3A3A3AB2]"
          />
          <span>Business activation</span>
        </Breadcrumb>
      </WelcomeContainer>
      <CTAContainer>
        <Notification src={bellIcon} />
        <MerchantsAvatar />
        <FlexContainer>
          <NameTag>Abdulhafiz Ibrahim</NameTag>
          <LogoutButton>Log out</LogoutButton>
        </FlexContainer>
      </CTAContainer>
    </Topbar>
  );
};

export default DashboardTopbar;
