import { UserDetails } from '../services/hooks/types';
import { getFromLocal } from '../utils';
import { TransactionsTopFlexWrapper } from '../views/Dashboard/Transactions/styles';

export const useDashboardTopIntro = (
  text: string = 'here’s what’s happening with your business today'
) => {
  const { firstName = '' } =
    (JSON.parse(getFromLocal('user') as string) as unknown as UserDetails) || {};

  const TopIntro = () => (
    <TransactionsTopFlexWrapper>
      <p className='text-[#6F7482] font-medium text-base leading-6'>
        <span className='text-[#444] font-bold leading-6 text-base'>Hello {firstName} - </span>
        {text}
      </p>
    </TransactionsTopFlexWrapper>
  );

  return {
    TopIntro
  };
};
