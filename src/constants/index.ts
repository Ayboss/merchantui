import HomeIcon from '../assets/icons/home-icon.svg';
import TransactionsIcon from '../assets/icons/transactions-icon.svg';
import PaymentsIcon from '../assets/icons/payments-icon.svg';
// import ProductsIcon from '../assets/icons/products-icon.svg';
// import AccountIcon from '../assets/icons/accounts-icon.svg';
// import StorefrontIcon from '../assets/icons/storefront-icon.svg';
// import DevelopersIcon from '../assets/icons/developers-icon.svg';
// import SettingsIcon from '../assets/icons/settings-icon.svg';

import SelectButtonIcon1 from '../assets/icons/selectButton-icon1.svg';
import SelectButtonIcon2 from '../assets/icons/selectButton-icon2.svg';

export const NavLinks = [
  // {
  //   url: '/',
  //   title: 'Get Started',
  //   icon: HomeIcon
  // },
  {
    url: '/overview',
    title: 'Dashboard',
    icon: HomeIcon
  },
  {
    url: '/transactions',
    title: 'Transactions',
    icon: TransactionsIcon
  },
  {
    url: '/payouts/history',
    title: 'Payouts',
    icon: PaymentsIcon
  }
  // {
  //   url: '/products',
  //   title: 'Products',
  //   icon: ProductsIcon
  // },
  // {
  //   url: '/accounts',
  //   title: 'Accounts',
  //   icon: AccountIcon
  // },
  // {
  //   url: '/storefront',
  //   title: 'Storefront',
  //   icon: StorefrontIcon
  // },
  // {
  //   url: '/developers',
  //   title: 'Developers',
  //   icon: DevelopersIcon
  // },
  // {
  //   url: '/settings',
  //   title: 'Settings',
  //   icon: SettingsIcon
  // }
];

export const BusinessTypes = [
  {
    selectIcon: SelectButtonIcon1,
    title: 'Registered Business',
    subtitle: 'For business that are registered with a valid identification number'
  },
  {
    selectIcon: SelectButtonIcon2,
    title: 'Starter Business',
    subtitle: 'For  Freelancers and other unregistered businesses'
  }
];

export const RegisteredBusinessInformation = [
  {
    title: 'Business Information',
    url: 'business-information'
  },
  {
    title: 'Account Information',
    url: 'account-information'
  },
  {
    title: 'Business Registration Documents',
    url: 'documents'
  },
  {
    title: 'BVN of Primary Officer',
    url: 'bvn-primary-officer'
  },
  {
    title: 'Others',
    url: 'others'
  }
];

export const MerchantCategories = [
  { id: 1, title: 'Agriculture' },
  { id: 2, title: 'Commerce' },
  { id: 3, title: 'Education' },
  { id: 3, title: 'Financial Services' },
  { id: 4, title: 'Gaming' },
  { id: 5, title: 'Hospitality' },
  { id: 6, title: 'Health' },
  { id: 7, title: 'Liesure & Enterainment' },
  { id: 8, title: 'Logistics' },
  { id: 9, title: 'Travel' },
  { id: 10, title: 'Non Profits' },
  { id: 11, title: 'Utilities' },
  { id: 12, title: 'Others' }
];
