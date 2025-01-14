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
  // Under SETTINGS
  PERSONAL_INFO = '/settings/personal-info',
  BUSINESS_INFO = '/settings/business-info',
  PAYMENT_METHODS = '/settings/payment-method',
  SETTLEMENT_INFO = '/settings/settlement-info',
  ACCOUNT_SECURITY = '/settings/account-security',
  MANAGE_USERS = '/settings/manage-users',
  API_KEYS = '/settings/api-keys',
  WEB_HOOKS = '/settings/webhooks',
  //
  SETTLEMENTS = '/settlements',
  PAYOUTS = '/payouts',
  PAYOUT_OPTIONS = '/payouts/options',
  PAYOUT_HISTORY = '/payouts/history',
  PAYOUT_BENEFICIARIES = '/payouts/beneficaries',

  MANAGE_BUSINESS = '/manage-business',
  MANAGE_CUSTOMERS = '/manage-customers',
  PAYMENT_LINK = '/payment-links',
  API_DOCUMENTATION = '/api-documentation',
  DISPUTES = '/disputes',

  // ................//

  KYC_VERIFICATION = '/verify-kyc',
  WALLET_HISTORY = '/wallet-history',
  SERVICE_STATUS = '/service-status'
}

export enum REGULAR_PATHS {
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  SIGN_UP = '/signup'
}
