import { DashboardApiInstance } from '../index';

const transactionStats = async () => {
  const { data } = (await DashboardApiInstance.get('/transaction-stats')).data;

  return data;
};

export const overviewQuery = () => ({
  queryKey: ['overview_stats'],
  queryFn: () => transactionStats(),
  keepPreviousData: true,
  refetchOnWindowFocus: false,
  enabled: true
});
