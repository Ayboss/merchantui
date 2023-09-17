import React from 'react';
import { PRIVATE_PATHS } from '../../routes/paths';
import { NavLinkItemPropsType } from './NavLinkItem';

export type NavGroupType = 'Analytics' | 'Administration' | 'Support';

export type NavLinkListType = {
  [K in NavGroupType]: NavLinkItemPropsType[];
};

export const NavLinkList: NavLinkListType = {
  Analytics: [
    {
      text: 'Transactions',
      path: PRIVATE_PATHS.TRANSACTIONS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.75 14.25V9.75C6.75 8.92157 6.07843 8.25 5.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H5.25C6.07843 15.75 6.75 15.0784 6.75 14.25ZM6.75 14.25V6.75C6.75 5.92157 7.42157 5.25 8.25 5.25H9.75C10.5784 5.25 11.25 5.92157 11.25 6.75V14.25M6.75 14.25C6.75 15.0784 7.42157 15.75 8.25 15.75H9.75C10.5784 15.75 11.25 15.0784 11.25 14.25M11.25 14.25V3.75C11.25 2.92157 11.9216 2.25 12.75 2.25H14.25C15.0784 2.25 15.75 2.92157 15.75 3.75V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H12.75C11.9216 15.75 11.25 15.0784 11.25 14.25Z'
            stroke='#444444'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      text: 'Settlement',
      path: PRIVATE_PATHS.SETTLEMENTS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.25 11.2498L9.74999 14.9998L6.74999 6.74982L15 9.74982L11.25 11.2498ZM11.25 11.2498L15 14.9998M5.39117 1.67871L5.97351 3.85204M3.85217 5.97336L1.67883 5.39102M10.4623 3.03754L8.87128 4.62853M4.62872 8.87109L3.03773 10.4621'
            stroke='#444444'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      text: 'Payouts',
      path: PRIVATE_PATHS.PAYOUT_HISTORY,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1.5'
            y='3.75'
            width='15'
            height='10.5'
            rx='2'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M1.5 10.5H16.5' stroke='#444444' strokeLinecap='round' />
        </svg>
      )
    },
    {
      text: 'Account',
      path: PRIVATE_PATHS.PAYOUTS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1.5'
            y='3.75'
            width='15'
            height='10.5'
            rx='2'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M1.5 10.5H16.5' stroke='#444444' strokeLinecap='round' />
        </svg>
      )
    }
  ],
  Administration: [
    {
      text: 'Manage Business',
      path: PRIVATE_PATHS.TRANSACTIONS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.25 5.25V12.75C2.25 13.5784 2.92157 14.25 3.75 14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V6.75C15.75 5.92157 15.0784 5.25 14.25 5.25H9.75L8.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25Z'
            stroke='#444444'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      text: 'Manage Customers',
      path: PRIVATE_PATHS.TRANSACTIONS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 3.26563C9.54971 2.64282 10.354 2.25 11.25 2.25C12.9069 2.25 14.25 3.59315 14.25 5.25C14.25 6.90685 12.9069 8.25 11.25 8.25C10.354 8.25 9.54971 7.85718 9 7.23437M11.25 15.75H2.25V15C2.25 12.5147 4.26472 10.5 6.75 10.5C9.23528 10.5 11.25 12.5147 11.25 15V15.75ZM11.25 15.75H15.75V15C15.75 12.5147 13.7353 10.5 11.25 10.5C10.4304 10.5 9.66189 10.7191 9 11.102M9.75 5.25C9.75 6.90685 8.40685 8.25 6.75 8.25C5.09315 8.25 3.75 6.90685 3.75 5.25C3.75 3.59315 5.09315 2.25 6.75 2.25C8.40685 2.25 9.75 3.59315 9.75 5.25Z'
            stroke='#444444'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      text: 'Payment Link',
      path: PRIVATE_PATHS.TRANSACTIONS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.7713 11.6787L8.46708 13.9828C7.73418 14.7157 6.868 15.099 5.86854 15.1327C4.8691 15.1664 4.02681 14.8407 3.34168 14.1555C2.65657 13.4704 2.33133 12.6286 2.36598 11.6301C2.40065 10.6317 2.78443 9.76599 3.51733 9.03308L5.82151 6.72891L6.43671 7.34411L4.13254 9.64828C3.57831 10.2025 3.28818 10.853 3.26214 11.5998C3.23609 12.3465 3.48149 12.9783 3.99835 13.4952C4.51521 14.0121 5.14812 14.2586 5.89709 14.2347C6.64606 14.2109 7.29766 13.9218 7.85188 13.3676L10.1561 11.0635L10.7713 11.6787ZM7.09942 11.0019L6.4842 10.3867L10.8981 5.97277L11.5133 6.58798L7.09942 11.0019ZM12.1785 10.2714L11.5633 9.65619L13.8675 7.35202C14.4217 6.79779 14.7118 6.1473 14.7379 5.40054C14.7639 4.65377 14.5185 4.02196 14.0017 3.50509C13.4848 2.98824 12.8519 2.74174 12.1029 2.76559C11.354 2.78942 10.7024 3.07845 10.1481 3.63267L7.84397 5.93685L7.22877 5.32164L9.53295 3.01747C10.2658 2.28457 11.132 1.90127 12.1315 1.86759C13.1309 1.83392 13.9732 2.15964 14.6583 2.84477C15.3435 3.52989 15.6687 4.37168 15.634 5.37015C15.5994 6.36863 15.2156 7.23431 14.4827 7.96722L12.1785 10.2714Z'
            fill='#444444'
          />
        </svg>
      )
    },
    {
      text: 'API Documentation',
      path: PRIVATE_PATHS.TRANSACTIONS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15 9.00006L9 12L3 9.00006M15 12L9 15L3 12M9.00001 3L15 6.00003L9.00001 9L3.00001 6.00003L9.00001 3Z'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      text: 'Settings',
      path: PRIVATE_PATHS.SETTINGS,
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.74347 3.23798C8.06327 1.92067 9.93673 1.92067 10.2565 3.23798C10.4631 4.08895 11.4381 4.49278 12.1859 4.03714C13.3435 3.33179 14.6682 4.65653 13.9629 5.81414C13.5072 6.56194 13.9111 7.53688 14.762 7.74347C16.0793 8.06327 16.0793 9.93673 14.762 10.2565C13.9111 10.4631 13.5072 11.4381 13.9629 12.1859C14.6682 13.3435 13.3435 14.6682 12.1859 13.9629C11.4381 13.5072 10.4631 13.9111 10.2565 14.762C9.93673 16.0793 8.06327 16.0793 7.74347 14.762C7.53688 13.9111 6.56194 13.5072 5.81414 13.9629C4.65653 14.6682 3.33179 13.3435 4.03714 12.1859C4.49278 11.4381 4.08895 10.4631 3.23798 10.2565C1.92067 9.93673 1.92067 8.06327 3.23798 7.74347C4.08895 7.53688 4.49278 6.56194 4.03714 5.81414C3.33179 4.65653 4.65653 3.33179 5.81414 4.03714C6.56194 4.49278 7.53688 4.08895 7.74347 3.23798Z'
            stroke='#6231F4'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z'
            stroke='#6231F4'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    }
  ],
  Support: [
    {
      text: 'Disputes',
      path: PRIVATE_PATHS.SETTINGS,
      icon: (
        <svg
          width='18'
          height='19'
          viewBox='0 0 18 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.75 5.75H6.25C6.25 6.02614 6.47386 6.25 6.75 6.25V5.75ZM7.24345 5.75L7.24505 6.25C7.52088 6.24911 7.74389 6.02503 7.74345 5.7492C7.74301 5.47337 7.51928 5.25 7.24345 5.25V5.75ZM6.10308 14.2222L6.38981 13.8125H6.38981L6.10308 14.2222ZM9 16.25L8.71327 16.6596C8.88543 16.7801 9.11457 16.7801 9.28673 16.6596L9 16.25ZM11.8969 14.2222L11.6102 13.8125L11.8969 14.2222ZM10.7565 5.75V5.25C10.4807 5.25 10.257 5.47337 10.2565 5.7492C10.2561 6.02503 10.4791 6.24911 10.7549 6.25L10.7565 5.75ZM11.25 5.75V6.25C11.5261 6.25 11.75 6.02614 11.75 5.75H11.25ZM7.25 5.75C7.25 4.7835 8.0335 4 9 4V3C7.48122 3 6.25 4.23122 6.25 5.75H7.25ZM7.24345 5.25H6.75V6.25H7.24345V5.25ZM5.75 7.74999C5.75 6.92321 6.41892 6.25265 7.24505 6.25L7.24185 5.25C5.86487 5.25442 4.75 6.372 4.75 7.74999H5.75ZM5.75 12.5837V7.74999H4.75V12.5837H5.75ZM6.38981 13.8125C5.98882 13.5318 5.75 13.0732 5.75 12.5837H4.75C4.75 13.3995 5.14803 14.1639 5.81634 14.6318L6.38981 13.8125ZM9.28673 15.8404L6.38981 13.8125L5.81634 14.6318L8.71327 16.6596L9.28673 15.8404ZM11.6102 13.8125L8.71327 15.8404L9.28673 16.6596L12.1837 14.6318L11.6102 13.8125ZM12.25 12.5837C12.25 13.0732 12.0112 13.5318 11.6102 13.8125L12.1837 14.6318C12.852 14.1639 13.25 13.3995 13.25 12.5837H12.25ZM12.25 7.74999V12.5837H13.25V7.74999H12.25ZM10.7549 6.25C11.5811 6.25265 12.25 6.92321 12.25 7.74999H13.25C13.25 6.372 12.1351 5.25442 10.7581 5.25L10.7549 6.25ZM11.25 5.25H10.7565V6.25H11.25V5.25ZM9 4C9.9665 4 10.75 4.7835 10.75 5.75H11.75C11.75 4.23122 10.5188 3 9 3V4Z'
            fill='#444444'
          />
          <path d='M3 10.25H5.25' stroke='#444444' strokeLinecap='round' strokeLinejoin='round' />
          <path
            d='M2.25 5.75L3.75 7.25H5.25'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.75 5.75L14.25 7.25H12.75'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.25 14.75L3.75 13.25H5.25'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12.75 13.25H14.25L15.75 14.75V14.75'
            stroke='#444444'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M12.75 10.25H15' stroke='#444444' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
    }
  ]
};

export const DashboardNavLinkItemIcon = (
  <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.25 9L3.75 7.5M3.75 7.5L9 2.25L14.25 7.5M3.75 7.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H6.75M14.25 7.5L15.75 9M14.25 7.5V15C14.25 15.4142 13.9142 15.75 13.5 15.75H11.25M6.75 15.75C7.16421 15.75 7.5 15.4142 7.5 15V12C7.5 11.5858 7.83579 11.25 8.25 11.25H9.75C10.1642 11.25 10.5 11.5858 10.5 12V15C10.5 15.4142 10.8358 15.75 11.25 15.75M6.75 15.75H11.25'
      stroke='#444444'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);