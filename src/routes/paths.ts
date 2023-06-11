export enum PRIVATE_PATHS {
  HOME = '/',
  DASHBOARD = '/dashboard',
  OVERVIEW = '/overview',
  BUSINESS_ACTIVATION = '/business-activation',
  REGISTERED_BUSINESS = '/registered-business',
  //   Under REGISTERED_BUSINESS
  BUSINESS_INFORMATION = '/registered-business/business-information',
  ACCOUNT_INFORMATION = '/registered-business/account-information',
  REGISTERED_DOCUMENTS = '/registered-business/documents',
  BVN_PRIMARY_OFFICER = '/registered-business/bvn-primary-officer',
  OTHERS = '/registered-business/others',
  //   ---------------------- //
  TRANSACTIONS = '/transactions',
  SETTINGS = '/settings',
  PAYOUTS = '/payouts',
  PAYOUT_OPTIONS = '/payouts/options',
  PAYOUT__HISTORY = '/payouts/history',
  PAYOUT_BENEFICIARIES = '/payouts/beneficaries'
}

export enum REGULAR_PATHS {
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  SIGN_UP = '/signup'
}
