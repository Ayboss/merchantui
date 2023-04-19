import {
  StepProgressContainer,
  StepProgressItem,
  StepNumber,
  StepLine,
  StepTitle,
} from "./styles";

const StepProgress = ({ activeStep }) => {
  return (
    <StepProgressContainer className="step-progress">
      <StepProgressItem>
        <StepNumber
          className={
            activeStep === "1"
              ? "w-[29px] h-[29px] rounded-full bg-[#6231F4] text-[#fff] font-semibold flex items-center justify-center"
              : ""
          }
        >
          1
        </StepNumber>
        <StepTitle
          className={activeStep === "1" ? "text-[#6231F4] font-semibold" : ""}
        >
          Basic
        </StepTitle>
      </StepProgressItem>
      <StepLine
        className={activeStep === "1" ? "border-solid border-[#6231F4]" : ""}
      />
      <StepProgressItem>
        <StepNumber
          className={
            activeStep === "2"
              ? "w-[29px] h-[29px] rounded-full bg-[#6231F4] text-[#fff] font-semibold flex items-center justify-center"
              : ""
          }
        >
          2
        </StepNumber>
        <StepTitle
          className={activeStep === "2" ? "text-[#6231F4] font-semibold" : ""}
        >
          Address
        </StepTitle>
      </StepProgressItem>
      <StepLine
        className={activeStep === "2" ? "border-solid border-[#6231F4]" : ""}
      />
      <StepProgressItem>
        <StepNumber
          className={
            activeStep === "3"
              ? "w-[29px] h-[29px] rounded-full bg-[#6231F4] text-[#fff] font-semibold flex items-center justify-center"
              : ""
          }
        >
          3
        </StepNumber>
        <StepTitle
          className={activeStep === "3" ? "text-[#6231F4] font-semibold" : ""}
        >
          Logo
        </StepTitle>
      </StepProgressItem>
      <StepLine
        className={activeStep === "3" ? "border-solid border-[#6231F4]" : ""}
      />
      <StepProgressItem>
        <StepNumber
          className={
            activeStep === "4"
              ? "w-[29px] h-[29px] rounded-full bg-[#6231F4] text-[#fff] font-semibold flex items-center justify-center"
              : ""
          }
        >
          4
        </StepNumber>
        <StepTitle
          className={activeStep === "4" ? "text-[#6231F4] font-semibold" : ""}
        >
          Socials
        </StepTitle>
      </StepProgressItem>
    </StepProgressContainer>
  );
};

export default StepProgress;
