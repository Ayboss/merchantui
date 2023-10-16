import { useDashboardTopIntro } from '../../../hooks/useDashboardTopIntro';
import { TransactionsContainer } from '../Transactions/styles';
import { ServiceStatusInfoBox } from './components';

export const ServiceStatus = () => {
  const { TopIntro } = useDashboardTopIntro('information about service status');

  return (
    <TransactionsContainer>
      <TopIntro />
      <div className=' flex flex-wrap gap-5 items-start'>
        <ServiceStatusInfoBox title='Callbacks' />
        <ServiceStatusInfoBox title='Account Creation' />
        <ServiceStatusInfoBox title='Name Enquiry' />
      </div>
    </TransactionsContainer>
  );
};
