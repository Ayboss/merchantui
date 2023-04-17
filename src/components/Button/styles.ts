import tw from "tailwind-styled-components";

export const CustomButton = tw.button`
w-full
h-[56px]
 bg-[#6231F4]
text-[#fff]
text-[16px]
leading-[20px]
font-bold
mt-10
rounded-sm
cursor-[pointer]
`;

// bg-${(props) => (props.disabled === true ? "#6231F44D" : "#6231F4")}
// cursor-[${(props) => (props.disabled === true ? "not-allowed" : "pointer")}]
