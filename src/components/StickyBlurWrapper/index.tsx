import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const StickyBlurWrapper: React.FC = () => {
  const boxRef = useRef<null | HTMLDivElement>(null);
  const [isStickying, setIsStickying] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsStickying(true));

    return () => {
      window.removeEventListener('scroll', () => setIsStickying(false));
    };
  }, []);

  return <StickyBlurStyleContainer ref={boxRef} sticky={isStickying}></StickyBlurStyleContainer>;
};

export const BlurWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

export const StickyBlurStyleContainer = styled(BlurWrapper)<{
  sticky: boolean;
  stickyTop?: number;
}>`
  transition: box-shadow 0.125s;
  ${(props) =>
    props.sticky
      ? `
    position: sticky;
    top: ${props.stickyTop || 0}px;
    z-index: 9;
  `
      : ``}
`;
