import tw from 'tailwind-styled-components';

export const AuthContainer = tw.div`
lg:w-[50%]
w-full
relative
lg:flex
lg:justify-end

`;

export const AuthForm = tw.form`
bg-[#fff]
w-full
lg:w-[500px]
absolute
z-10
top-[90px]
rounded
lg:p-[50px]
`;

export const FormHeader = tw.div`
text-left
`;

export const Title = tw.h3`
font-semibold
text-[40px]
leading-[40px]
mb-[18px]
`;

export const Subtitle = tw.p`
text-[15px]
leading-[26px]
`;
export const FormBody = tw.div`
mt-5
mb-[60px]
lg:mb-0
`;

export const FormLink = tw.p`
    text-[#6231F4]
    text-center
    text-[14px]
    mt-5
    leading-[17px]
`;

export const FormGroup = tw.div` 
flex 
justify-between
items-center
gap-5
 `;
