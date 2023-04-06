import tw from "tailwind-styled-components"
import bgImg from "../../assets/img/footer_bg.svg"
import styled from "styled-components"



export const AuthFooterContainer = styled.footer`
height: 313px;
background-image: url(${bgImg});
background-color: #6231F4;
background-repeat: no-repeat;
background-position: right;
background-size: contain;
padding: 72px 100px 0px  100px ;
color: #fff;
`

export const AuthFooterText = tw.p` 
text-[16px]
leading-[15px]
font-sans
font-semibold
`
export const AuthFooterImages = tw.div`
flex
gap-10
justify-start
mt-[24px]
`
export const AuthFooterImg = tw.img`
w-[100px]
`