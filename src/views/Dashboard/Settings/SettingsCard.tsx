import React from 'react';
import { Link } from 'react-router-dom';

type settingsCardProps = {
  icon: JSX.Element;
  title: string;
  text: string;
  path?: string;
};

const SettingsCard: React.FC<settingsCardProps> = (props) => {
  const { icon, title, text, path } = props;

  return (
    <Link
      to={`${path}`}
      className='h-[224px] w-[338px] bg-white mr-5 mb-6 rounded-[5px] border border-solid border-[#E4E4E7] transition-transform hover:scale-105'
    >
      <div className='pl-6 pt-6'>
        <div className='h-[50px] w-[50px] mb-8'>{icon}</div>
        <h3 className='text-[#444] text-[18px] font-medium'>{title}</h3>
        <p className='text-[#A1A1AA] text-[14px] font-normal w-[278px]'>{text}</p>
      </div>
    </Link>
  );
};

export default SettingsCard;
