import { useDashboardTopIntro } from '../../../hooks/useDashboardTopIntro';
import { useGetStatusInfo } from '../../../services/hooks/useGetStatusInfo';
import { TransactionsContainer } from '../Transactions/styles';
import { ServiceStatusInfoBox } from './components';

export const ServiceStatus = () => {
  const { TopIntro } = useDashboardTopIntro('information about service status');
  const { data, isLoading } = useGetStatusInfo();

  return (
    <TransactionsContainer>
      <TopIntro />
      <div className=' flex flex-wrap gap-5 items-start'>
        <ServiceStatusInfoBox
          data={data?.data?.callbacks}
          isLoading={isLoading}
          title='Callbacks'
        />
        <ServiceStatusInfoBox
          data={data?.data?.accountCreations}
          isLoading={isLoading}
          title='Account Creation'
        />
        <ServiceStatusInfoBox
          data={data?.data?.nameEnquires}
          isLoading={isLoading}
          title='Name Enquiry'
        />
      </div>
    </TransactionsContainer>
  );
};
