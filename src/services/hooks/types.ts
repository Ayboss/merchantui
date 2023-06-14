export type PermissionsType =
  | 'ROLE_KYC_CREATE'
  | 'ROLE_KYC_DELETE'
  | 'ROLE_KYC_UPDATE'
  | 'ROLE_KYC_VIEW'
  | 'ROLE_ORDER_VIEW'
  | 'ROLE_PAYMENT_CREATE'
  | 'ROLE_PAYMENT_DELETE'
  | 'ROLE_PAYMENT_UPDATE'
  | 'ROLE_PAYMENT_VIEW'
  | 'ROLE_PERMISSION_CREATE'
  | 'ROLE_PERMISSION_DELETE'
  | 'ROLE_PERMISSION_UPDATE'
  | 'ROLE_PERMISSION_VIEW'
  | 'ROLE_ROLE_CREATE'
  | 'ROLE_ROLE_DELETE'
  | 'ROLE_ROLE_UPDATE'
  | 'ROLE_ROLE_VIEW'
  | 'ROLE_USER_CREATE'
  | 'ROLE_USER_DELETE'
  | 'ROLE_USER_UPDATE'
  | 'ROLE_USER_VIEW'
  | 'ROLE_WALLET_CREATE'
  | 'ROLE_WALLET_DELETE'
  | 'ROLE_WALLET_EXCHANGE'
  | 'ROLE_WALLET_FUND'
  | 'ROLE_WALLET_UPDATE'
  | 'ROLE_WALLET_VIEW';

export type UserRoleType = 'Admin' | 'Merchant';

export type LoginResponseType = {
  data: {
    admin: boolean;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    mobileNumber: string;
    permission: Array<PermissionsType>;
    role: UserRoleType;
    superAdmin: boolean;
    token: string;
    tokenType: string;
    username: string;
    verified: boolean;
  };
  message: string;
  status: boolean;
  statusCode: 200;
  validation: unknown;
};

export interface overViewChartParams {
  type: string;
  startDate?: string;
  endDate?: string;
}

export interface overViewPieChartParams {
  startDate?: string;
  endDate?: string;
}

export interface CommonTableQueryType<T> {
  responseCode: string;
  responseMessage: string;
  success: boolean;
  data: {
    content: T[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: boolean;
    numberOfElements: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      unpaged: boolean;
    };
    size: number;
    totalElements: number;
    totalPages: number;
  };
}