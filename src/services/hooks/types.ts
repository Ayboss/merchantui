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

export type UserDetails = {
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

export type LoginResponseType = {
  data: UserDetails;
  message: string;
  status: boolean;
  statusCode: 200;
  validation: unknown;
};

export type MerchantProfileResponseType = {
  responseCode: string;
  status: boolean;
  responseMessage: string;
  data: {
    id: string;
    businessInformation: string;
    businessAddress: string;
    tin: string;
    country: string;
    state: string;
    client: {
      id: string;
      name: string;
      payonusClientId: string;
      payonusClientSecret: string;
    };
    merchant: {
      id: string;
      name: string;
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      merchantBvn: string[];
      created: number[];
      testEnvironment: boolean;
    };
    profileUpdated: boolean;
    businessCategory: 'STARTER' | 'REGISTERED';
    businessType: string;
    extra: {
      bvnSet: boolean;
      hasActiveSettlementAccount: boolean;
      transactionPinSet: boolean;
    };
  };
  success: boolean;
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
