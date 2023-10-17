import { useMemo, useState } from 'react';
import { CustomTable, EmptyContent, LoaderControl, Paginator } from '../../../components';
import { useDashboardTopIntro } from '../../../hooks/useDashboardTopIntro';
import {
  WalletHistroyItemType,
  useGetWalletHistory
} from '../../../services/hooks/useGetWalletHistory';
import { formatDate, formatNumber } from '../../../utils';
import { WhiteBGContainer } from '../Overview/components/ListContainer';
import { TransactionsContainer } from '../Transactions/styles';
import { WalletHistoryHeader } from './constants';
import { WalletHistoryItem } from './WalletHistoryItem';

export const WalletHistory = () => {
  const { TopIntro } = useDashboardTopIntro();
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 20
  });

  const { data, isFetching, isError, refetch } = useGetWalletHistory({ ...query });

  const [currentDetails, setCurrentDetails] = useState<WalletHistroyItemType | null>(null);
  const [openWalletDetail, setShowWalletDetail] = useState(false);

  const handlePageChange = (current: number) => {
    setQuery({ ...query, page: current });
  };

  const transformData = useMemo(() => {
    if (data?.content) {
      const contents = data?.content;

      return contents.map((item: WalletHistroyItemType) => {
        return {
          ...item,
          created: formatDate(item?.created, 'MMM dd, yyyy h:mm:ssa'),
          amount: `₦${formatNumber(item?.amount)}`,
          balanceBefore: `₦${formatNumber(Number(item?.balanceBefore))}`,
          balanceAfter: `₦${formatNumber(Number(item?.balanceAfter))}`
        };
      });
    } else {
      return [];
    }
  }, [data?.content]);

  return (
    <TransactionsContainer>
      <TopIntro />
      <WhiteBGContainer className='mt-5'>
        <h3 className='text-[#444] text-[16px] font-semibold leading-6 px-5 mb-[18px]'>
          All Wallet History
        </h3>
        <LoaderControl
          loading={isFetching}
          error={isError}
          overlay={isFetching}
          errorTitle='Something went wrong'
          errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
          minHeight={'400px'}
          errorControlOnClick={() => refetch()}
        >
          <CustomTable
            onRowClick={(detail) => {
              // @ts-ignore incompatible amount and created type
              setCurrentDetails(detail);
              setShowWalletDetail(true);
            }}
            data={transformData}
            headers={WalletHistoryHeader}
            emptyLayout={
              <EmptyContent
                text='No recent wallet history. Looks like you haven’t made any transaction, no worries! '
                onClick={() => refetch()}
                className='min-h-[400px]'
              />
            }
          />
        </LoaderControl>
        {!isError && (
          <Paginator
            total={data?.totalElements || 1}
            pageSize={data?.size || 1}
            onChange={handlePageChange}
          />
        )}
      </WhiteBGContainer>
      {openWalletDetail && (
        <WalletHistoryItem {...currentDetails} onClose={() => setShowWalletDetail(false)} />
      )}
    </TransactionsContainer>
  );
};
