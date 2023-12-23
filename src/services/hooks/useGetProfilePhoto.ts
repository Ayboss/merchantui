import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_PROFILE_PHOTO_QUERY_KEY = ['GET_PROFILE_PHOTO_QUERY_KEY'];

export const useGetProfilePhoto = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').get('/get-user-profile-photo-url', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useQuery({
    queryKey: GET_PROFILE_PHOTO_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
