import CustomInput from "../../../../../../../components/CustomInput";
import URLInput from "../../../../../../../components/URLInput";
import { Title } from "../BasicInformation/styles";
import {
  SocialInformationContainer,
  SocialInformationForm,
  Container,
  FlexWrapper,
} from "./styles";
import LinkedInIcon from "../../../../../../../assets/icons/linkedIn-icon.svg";
import TwitterIcon from "../../../../../../../assets/icons/twitter-icon.svg";
import InstagramIcon from "../../../../../../../assets/icons/instagram-icon.svg";
import FacebookIcon from "../../../../../../../assets/icons/facebook-icon.svg";
import Button from "../../../../../../../components/Button";
import { Link } from "react-router-dom";

const SocialInformation = () => {
  return (
    <SocialInformationContainer>
      <SocialInformationForm>
        <Container>
          <Title>WEBSITE</Title>
          <CustomInput
            label="website"
            name=""
            placeholder="Type your business website here"
          />
        </Container>
        <Container>
          <Title className="mt-10">SOCIAL MEDIA</Title>
          <FlexWrapper>
            <URLInput
              label="LinkedIn"
              placeholder="input link here"
              icon={LinkedInIcon}
            />
            <URLInput
              label="Twiter"
              placeholder="input link here"
              icon={TwitterIcon}
            />
          </FlexWrapper>
          <FlexWrapper>
            <URLInput
              label="Instagram"
              placeholder="input link here"
              icon={InstagramIcon}
            />
            <URLInput
              label="Facebook"
              placeholder="input link here"
              icon={FacebookIcon}
            />
          </FlexWrapper>
        </Container>
        <Button
          name="Save & Continue"
          className="bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold"
          onClick={() => {}}
        />
      </SocialInformationForm>
      <div className="text-center my-5">
        <Link to="/" className="text-[16px] font-semibold leading-[20px] ">
          Do this later
        </Link>
      </div>
    </SocialInformationContainer>
  );
};

export default SocialInformation;
