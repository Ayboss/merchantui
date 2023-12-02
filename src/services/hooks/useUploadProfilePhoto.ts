import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { queryClient } from '../../main';
import { GET_PROFILE_PHOTO_QUERY_KEY } from './useGetProfilePhoto';

export const UPLOAD_PROFILE_PHOTO_MUTATION_KEY = ['upload-profile-photo-document'];

export const useUploadProflePhoto = () => {
  const request = useCallback(async (data: any) => {
    const response = await apiInstance('merchant').post('/upload-user-profile-photo', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: UPLOAD_PROFILE_PHOTO_MUTATION_KEY,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: GET_PROFILE_PHOTO_QUERY_KEY
      });
    }
  });
};
