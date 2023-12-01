import React from 'react';
import clsx from 'clsx';

interface TabContentProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
const TabContent: React.FC<TabContentProps> = ({ label, active, onClick }) => {
  const containerClassName = clsx('cursor-pointer pb-5 mr-7 ml-7', {
    'text-[#6231F4] border-b-4 border-[#6231F4]': active,
    'text-[#444] hover:text-[#6231F4]': !active
  });

  return (
    <div onClick={onClick} className={containerClassName}>
      {label}
    </div>
  );
};

export default TabContent;
