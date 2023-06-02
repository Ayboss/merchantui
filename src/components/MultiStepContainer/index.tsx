import React, { useState } from 'react';

interface MultiStepContainerProps {
  children: React.ReactNode | undefined;
}

export const MultiStepContainer: React.FC<MultiStepContainerProps> = ({ children }) => {
  const [position, setPosition] = useState(0);

  const onNext = () => {
    setPosition(position + 1);
  };

  const onPrev = () => {
    setPosition(position - 1);
  };

  const currentForm = React.Children.toArray(children)[position];

  if (React.isValidElement(currentForm)) {
    return React.cloneElement(currentForm, {
      onPrev,
      onNext
    } as React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>);
  }

  return <></>;
};

export default MultiStepContainer;
