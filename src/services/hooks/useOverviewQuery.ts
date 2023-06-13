import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '../index';
import { overViewChartParams } from './types';

export const overviewChartQueryKey = 'overviewChart';
export const overviewPieChartQueryKey = 'overviewPieChart';

export type ChartResponseType = {
  responseCode: string;
  responseMessage: string;
  success: boolean;
  data: {
    totalVolume: number;
    totalValue: number;
    successfulTransactions: number;
    failedTransactions: number;
    data: { x: string; y: string }[];
    channel: string;
    endDate: string;
    startDate: string;
  };
};

export type PieChartResponseType = {
  responseCode: string;
  responseMessage: string;
  success: boolean;
  data: {
    data: { x: string; y: string }[];
    endDate: string;
    startDate: string;
  };
};

export const useOverviewChartQuery = (params: overViewChartParams, config?: any) => {
  const load = useCallback(async () => {
    const { data } = await apiInstance('settlement').get(
      `/get-merchant-transactions-series/${params.type}`,
      {
        params,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        }
      }
    );

    return data as ChartResponseType;
  }, [params]);

  return useQuery(overviewChartQueryKey, load, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    ...config
  });
};

export const useOverviewPieChartQuery = (config?: any) => {
  const load = useCallback(async () => {
    const { data } = await apiInstance('settlement').get(`/get-merchant-transactions-pie-chart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return data as PieChartResponseType;
  }, []);

  return useQuery(overviewPieChartQueryKey, load, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    ...config
  });
};
