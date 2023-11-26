import React from 'react';

interface TabContentProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer pb-5 mr-7 ml-7 ${
        active ? 'text-[#6231F4] border-b-4 border-[#6231F4]' : 'text-[#444] hover:text-[#6231F4]'
      }`}
    >
      {label}
    </div>
  );
};

export default TabContent;
