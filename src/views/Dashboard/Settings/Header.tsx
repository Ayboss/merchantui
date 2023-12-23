import React from 'react';

interface BusinessSectionProps {
  title: string;
}

const Header: React.FC<BusinessSectionProps> = ({ title }) => {
  return (
    <div>
      <h2 className='text-[#444] text-[21px] ml-7 font-semibold'>{title}</h2>
    </div>
  );
};

export default Header;
