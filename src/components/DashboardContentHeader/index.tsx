import React from 'react';
import tw from 'tailwind-styled-components';

type DashboardContentHeaderPropsType = {
  title: string;
  subtitle: string;
};

export const DashboardContentHeader: React.FC<DashboardContentHeaderPropsType> = (props) => {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

const Container = tw.div`
    flex
    flex-col
    items-start
`;

const Title = tw.h3`
    text-[#000000]
    text-[24px]
    font-semi-bold
`;

const Subtitle = tw.p`
    text-[#849DAE]
    font-normal
    text-[14px]
`;
