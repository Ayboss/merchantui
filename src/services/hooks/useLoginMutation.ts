import { useCallback } from "react";
import { apiInstance } from "..";
import { useMutation } from "react-query";
import { LoginResponseType } from "./types";

export const LOGIN_MUTATION_KEY = ["login"];

export type LoginRequestPayloadType = {
  username: string;
  password: string;
};

export const useLoginMuation = () => {
  const request = useCallback(async (data: LoginRequestPayloadType) => {
    const response = await apiInstance.post("/accounts/login", data);
    return response.data as LoginResponseType;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: LOGIN_MUTATION_KEY,
  });
};
