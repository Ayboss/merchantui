import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PayonusIcon } from '../../components/PayonusIcon';
import { REGULAR_PATHS } from '../../routes/paths';
import { RadialBackground } from './RadialBackgroud';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='h-full w-full p-10 flex items-center gap-14'>
      <AuthLayoutLeft />
      {children}
    </div>
  );
};

const AuthLayoutLeft: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#5329D3] relative rounded-[10px] h-full max-h-[1000px] w-full max-w-[550px] text-white px-[50px] py-[60px]'>
      <PayonusIcon onClick={() => navigate(REGULAR_PATHS.LOGIN)} />

      <div className='flex flex-col gap-[30px] w-full mt-36'>
        <h2 className='font-semibold leading-[70px] text-white text-6xl'>
          Start your journey with us.
        </h2>
        <p className='text-[#F5F6FA] text-lg font-normal '>
          Discover Endless possibilities for online payments in Africa, for B2B and B2C Businesses
        </p>
      </div>

      <RadialBackground className='absolute left-[-20%] bottom-[-17%]' />
    </div>
  );
};
