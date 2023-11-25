import { PRIVATE_PATHS } from '../../../../routes/paths';
const {
  PERSONAL_INFO,
  BUSINESS_INFO,
  SETTLEMENT_INFO,
  PAYMENT_METHODS,
  ACCOUNT_SECURITY,
  MANAGE_USERS,
  API_KEYS,
  WEB_HOOKS
} = PRIVATE_PATHS;

export const SettingItems = [
  {
    title: 'Personal Info',
    text: 'Manage your contact information and account password',
    path: PERSONAL_INFO,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M25 22.3111C22.7902 22.3111 20.8984 21.5248 19.3248 19.9521C17.7511 18.3795 16.9643 16.489 16.9643 14.2806C16.9643 12.0721 17.7511 10.1816 19.3248 8.60896C20.8984 7.03632 22.7902 6.25 25 6.25C27.2098 6.25 29.1016 7.03632 30.6752 8.60896C32.2489 10.1816 33.0357 12.0721 33.0357 14.2806C33.0357 16.489 32.2489 18.3795 30.6752 19.9521C29.1016 21.5248 27.2098 22.3111 25 22.3111ZM6.25 41.6667V37.2601C6.25 36.1551 6.57194 35.1212 7.21583 34.1586C7.85971 33.196 8.72596 32.4487 9.81458 31.9168C12.342 30.7053 14.8712 29.7967 17.4021 29.191C19.933 28.5853 22.4657 28.2824 25 28.2824C27.5343 28.2824 30.067 28.5853 32.5979 29.191C35.1288 29.7967 37.658 30.7053 40.1854 31.9168C41.274 32.4487 42.1403 33.196 42.7842 34.1586C43.4281 35.1212 43.75 36.1551 43.75 37.2601V41.6667H6.25ZM8.92857 38.9898H41.0714V37.2601C41.0714 36.6665 40.88 36.1088 40.4971 35.5871C40.1142 35.0655 39.5845 34.6245 38.9079 34.2641C36.7033 33.1968 34.4302 32.3792 32.0886 31.8112C29.747 31.2433 27.3842 30.9593 25 30.9593C22.6158 30.9593 20.253 31.2433 17.9114 31.8112C15.5698 32.3792 13.2967 33.1968 11.0921 34.2641C10.4155 34.6245 9.88583 35.0655 9.50292 35.5871C9.12002 36.1088 8.92857 36.6665 8.92857 37.2601V38.9898ZM25 19.6342C26.4732 19.6342 27.7344 19.11 28.7835 18.0616C29.8326 17.0132 30.3571 15.7528 30.3571 14.2806C30.3571 12.8083 29.8326 11.548 28.7835 10.4995C27.7344 9.45112 26.4732 8.9269 25 8.9269C23.5268 8.9269 22.2656 9.45112 21.2165 10.4995C20.1674 11.548 19.6429 12.8083 19.6429 14.2806C19.6429 15.7528 20.1674 17.0132 21.2165 18.0616C22.2656 19.11 23.5268 19.6342 25 19.6342Z'
          fill='#444444'
        />
      </svg>
    )
  },
  {
    title: 'Business Info',
    text: 'Manage your business information and other contact information',
    path: BUSINESS_INFO,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M9.61536 41.6663C8.65651 41.6663 7.8559 41.3452 7.21354 40.7028C6.57118 40.0604 6.25 39.2598 6.25 38.301V17.9484C6.25 16.9895 6.57118 16.1889 7.21354 15.5466C7.8559 14.9042 8.65651 14.583 9.61536 14.583H18.75V11.6984C18.75 10.7395 19.0712 9.93891 19.7135 9.29655C20.3559 8.65419 21.1565 8.33301 22.1154 8.33301H27.8846C28.8435 8.33301 29.6441 8.65419 30.2865 9.29655C30.9288 9.93891 31.25 10.7395 31.25 11.6984V14.583H40.3846C41.3435 14.583 42.1441 14.9042 42.7865 15.5466C43.4288 16.1889 43.75 16.9895 43.75 17.9484V38.301C43.75 39.2598 43.4288 40.0604 42.7865 40.7028C42.1441 41.3452 41.3435 41.6663 40.3846 41.6663H9.61536ZM20.8333 14.583H29.1667V11.6984C29.1667 11.3779 29.0331 11.0841 28.766 10.817C28.4989 10.5499 28.2051 10.4163 27.8846 10.4163H22.1154C21.7949 10.4163 21.5011 10.5499 21.234 10.817C20.9669 11.0841 20.8333 11.3779 20.8333 11.6984V14.583ZM41.6667 30.208H29.1667V33.333H20.8333V30.208H8.33333V38.301C8.33333 38.6215 8.46688 38.9153 8.73396 39.1824C9.00108 39.4495 9.29488 39.583 9.61536 39.583H40.3846C40.7051 39.583 40.9989 39.4495 41.266 39.1824C41.5331 38.9153 41.6667 38.6215 41.6667 38.301V30.208ZM22.9167 31.2497H27.0833V27.083H22.9167V31.2497ZM8.33333 28.1247H20.8333V24.9997H29.1667V28.1247H41.6667V17.9484C41.6667 17.6279 41.5331 17.3341 41.266 17.067C40.9989 16.7999 40.7051 16.6663 40.3846 16.6663H9.61536C9.29488 16.6663 9.00108 16.7999 8.73396 17.067C8.46688 17.3341 8.33333 17.6279 8.33333 17.9484V28.1247Z'
          fill='#444444'
        />
      </svg>
    )
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M12.5 39.5837C10.7692 39.5837 9.29488 38.9747 8.07693 37.7567C6.85898 36.5388 6.25 35.0644 6.25 33.3337V16.667C6.25 14.9362 6.85898 13.4619 8.07693 12.2439C9.29488 11.026 10.7692 10.417 12.5 10.417H37.5C39.2308 10.417 40.7051 11.026 41.9231 12.2439C43.141 13.4619 43.75 14.9362 43.75 16.667V33.3337C43.75 35.0644 43.141 36.5388 41.9231 37.7567C40.7051 38.9747 39.2308 39.5837 37.5 39.5837H12.5ZM12.5 17.7087H37.5C38.3173 17.7087 39.0798 17.8489 39.7877 18.1293C40.4955 18.4098 41.1218 18.8211 41.6667 19.3633V16.667C41.6667 15.5212 41.2587 14.5403 40.4427 13.7243C39.6267 12.9083 38.6458 12.5003 37.5 12.5003H12.5C11.3542 12.5003 10.3733 12.9083 9.55729 13.7243C8.74132 14.5403 8.33333 15.5212 8.33333 16.667V19.3633C8.87819 18.8211 9.50453 18.4098 10.2123 18.1293C10.9202 17.8489 11.6827 17.7087 12.5 17.7087ZM8.40547 23.3978L32.0232 29.1429C32.2823 29.2124 32.5481 29.2191 32.8205 29.163C33.093 29.1069 33.328 28.9881 33.5256 28.8064L41.286 22.2439C40.9842 21.5094 40.4915 20.9171 39.8077 20.4671C39.1239 20.017 38.3547 19.792 37.5 19.792H12.5C11.437 19.792 10.5202 20.1332 9.74958 20.8156C8.97903 21.4981 8.53099 22.3588 8.40547 23.3978Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'Settlement Info',
    text: 'Manage bank account credentials for receiving settlement payments',
    path: SETTLEMENT_INFO
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M43.75 13.7824V36.2183C43.75 37.1771 43.4288 37.9778 42.7865 38.6201C42.1441 39.2625 41.3435 39.5837 40.3846 39.5837H9.61536C8.65651 39.5837 7.8559 39.2625 7.21354 38.6201C6.57118 37.9778 6.25 37.1771 6.25 36.2183V13.7824C6.25 12.8235 6.57118 12.0229 7.21354 11.3805C7.8559 10.7382 8.65651 10.417 9.61536 10.417H40.3846C41.3435 10.417 42.1441 10.7382 42.7865 11.3805C43.4288 12.0229 43.75 12.8235 43.75 13.7824ZM8.33333 18.3496H41.6667V13.7824C41.6667 13.4619 41.5331 13.1681 41.266 12.901C40.9989 12.6339 40.7051 12.5003 40.3846 12.5003H9.61536C9.29488 12.5003 9.00108 12.6339 8.73396 12.901C8.46688 13.1681 8.33333 13.4619 8.33333 13.7824V18.3496ZM8.33333 23.3177V36.2183C8.33333 36.5388 8.46688 36.8326 8.73396 37.0997C9.00108 37.3668 9.29488 37.5003 9.61536 37.5003H40.3846C40.7051 37.5003 40.9989 37.3668 41.266 37.0997C41.5331 36.8326 41.6667 36.5388 41.6667 36.2183V23.3177H8.33333Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'Payment Methods',
    text: 'Setup your preferred payment method for your business.',
    path: PAYMENT_METHODS
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M22.9166 43.6696C18.7312 42.4222 15.2543 39.876 12.4859 36.0307C9.71747 32.1855 8.33325 27.8541 8.33325 23.0365V11.7221L22.9166 6.25L37.4999 11.7221V23.5555C37.1874 23.4375 36.8442 23.3322 36.4703 23.2396C36.0964 23.1471 35.7451 23.062 35.4166 22.9842V13.1626L22.9166 8.49517L10.4166 13.1626V23.0365C10.4166 25.1046 10.7204 27.0856 11.328 28.9793C11.9357 30.8731 12.7637 32.6147 13.812 34.204C14.8603 35.7933 16.1003 37.1821 17.5319 38.3704C18.9636 39.5588 20.49 40.4641 22.1113 41.0864L22.2315 41.0462C22.3997 41.4646 22.6094 41.871 22.8605 42.2653C23.1116 42.6596 23.396 43.0298 23.7139 43.3758C23.5723 43.4295 23.4394 43.4784 23.3152 43.5227C23.191 43.5669 23.0581 43.6159 22.9166 43.6696ZM33.3333 43.75C31.0122 43.75 29.0431 42.9379 27.4258 41.3137C25.8085 39.6895 24.9999 37.7119 24.9999 35.3809C24.9999 33.0499 25.8085 31.0723 27.4258 29.4481C29.0431 27.8239 31.0122 27.0118 33.3333 27.0118C35.6543 27.0118 37.6234 27.8239 39.2407 29.4481C40.858 31.0723 41.6666 33.0499 41.6666 35.3809C41.6666 37.7119 40.858 39.6895 39.2407 41.3137C37.6234 42.9379 35.6543 43.75 33.3333 43.75ZM32.5319 40.6116H34.1346V36.1856H38.5416V34.5762H34.1346V30.1502H32.5319V34.5762H28.1249V36.1856H32.5319V40.6116Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'Account Security',
    text: 'Manage bank account credentials for receiving settlement payments',
    path: ACCOUNT_SECURITY
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M4.16675 39.583V35.6949C4.16675 34.5987 4.43302 33.6562 4.96557 32.8674C5.49811 32.0786 6.21378 31.4482 7.11257 30.9762C9.03418 30.0008 10.9422 29.2231 12.8366 28.6432C14.7311 28.0633 17.0104 27.7734 19.6746 27.7734C22.3388 27.7734 24.6181 28.0633 26.5125 28.6432C28.407 29.2231 30.315 30.0008 32.2366 30.9762C33.1354 31.4482 33.851 32.0786 34.3836 32.8674C34.9161 33.6562 35.1824 34.5987 35.1824 35.6949V39.583H4.16675ZM39.6132 39.583V35.5859C39.6132 34.2172 39.3534 32.9252 38.8337 31.71C38.314 30.4947 37.5769 29.452 36.6224 28.5819C37.7103 28.8181 38.7583 29.1459 39.7666 29.5652C40.7749 29.9846 41.7718 30.4563 42.7574 30.9802C43.7174 31.4949 44.4701 32.1537 45.0154 32.9564C45.5608 33.7592 45.8334 34.6357 45.8334 35.5859V39.583H39.6132ZM19.6746 22.5045C17.8469 22.5045 16.2822 21.8107 14.9807 20.4231C13.6791 19.0355 13.0284 17.3674 13.0284 15.4188C13.0284 13.4702 13.6791 11.8021 14.9807 10.4144C16.2822 9.02682 17.8469 8.33301 19.6746 8.33301C21.5023 8.33301 23.0669 9.02682 24.3685 10.4144C25.67 11.8021 26.3208 13.4702 26.3208 15.4188C26.3208 17.3674 25.67 19.0355 24.3685 20.4231C23.0669 21.8107 21.5023 22.5045 19.6746 22.5045ZM35.7789 15.4188C35.7789 17.3674 35.1281 19.0355 33.8266 20.4231C32.525 21.8107 30.9604 22.5045 29.1327 22.5045C29.0389 22.5045 28.9196 22.4932 28.7748 22.4705C28.6299 22.4478 28.5106 22.4228 28.4169 22.3955C29.1674 21.4155 29.7441 20.3284 30.1471 19.134C30.5501 17.9397 30.7516 16.6994 30.7516 15.4131C30.7516 14.1269 30.5407 12.8979 30.1189 11.726C29.6972 10.5542 29.1298 9.45948 28.4169 8.44201C28.5362 8.39662 28.6555 8.3671 28.7748 8.35344C28.8941 8.33982 29.0134 8.33301 29.1327 8.33301C30.9604 8.33301 32.525 9.02682 33.8266 10.4144C35.1281 11.8021 35.7789 13.4702 35.7789 15.4188ZM6.38215 37.221H32.967V35.6949C32.967 35.1407 32.8371 34.6563 32.5772 34.2414C32.3173 33.8266 31.8508 33.4299 31.1776 33.0514C29.5246 32.1096 27.7821 31.3882 25.9502 30.887C24.1182 30.3859 22.0263 30.1353 19.6746 30.1353C17.3229 30.1353 15.231 30.3859 13.399 30.887C11.567 31.3882 9.82456 32.1096 8.17154 33.0514C7.49838 33.4299 7.03186 33.8266 6.77195 34.2414C6.51209 34.6563 6.38215 35.1407 6.38215 35.6949V37.221ZM19.6746 20.1426C20.8931 20.1426 21.9361 19.6801 22.8038 18.755C23.6715 17.8299 24.1054 16.7179 24.1054 15.4188C24.1054 14.1198 23.6715 13.0077 22.8038 12.0826C21.9361 11.1575 20.8931 10.695 19.6746 10.695C18.4561 10.695 17.413 11.1575 16.5453 12.0826C15.6776 13.0077 15.2438 14.1198 15.2438 15.4188C15.2438 16.7179 15.6776 17.8299 16.5453 18.755C17.413 19.6801 18.4561 20.1426 19.6746 20.1426Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'Manage Users',
    text: 'Manage bank account credentials for receiving settlement payments',
    path: MANAGE_USERS
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M14.5872 42.708C13.4046 42.708 12.398 42.2941 11.5677 41.4662C10.7372 40.6384 10.322 39.6331 10.322 38.4505C10.322 37.2678 10.7364 36.2613 11.5652 35.4309C12.394 34.6005 13.4004 34.1853 14.5844 34.1853C14.9159 34.1853 15.263 34.2334 15.6258 34.3295C15.9885 34.4257 16.3262 34.5557 16.6387 34.7196L20.9689 29.3339C20.3482 28.6717 19.9254 27.9396 19.7003 27.1376C19.4752 26.3356 19.437 25.5227 19.5855 24.6988L13.2165 22.5977C12.8428 23.2642 12.3272 23.7996 11.6697 24.2038C11.0123 24.6081 10.2789 24.8103 9.46974 24.8103C8.28602 24.8103 7.27987 24.3964 6.45129 23.5685C5.62268 22.7407 5.20837 21.7354 5.20837 20.5528C5.20837 19.3701 5.62229 18.3636 6.45014 17.5332C7.27798 16.7028 8.28323 16.2876 9.4659 16.2876C10.6485 16.2876 11.6551 16.7019 12.4855 17.5305C13.3159 18.359 13.7311 19.3652 13.7311 20.5489C13.7311 20.6931 13.7256 20.8046 13.7147 20.8833C13.7038 20.9619 13.6983 21.0406 13.6983 21.1193L20.0346 23.3286C20.4061 22.6119 20.9366 21.9858 21.6261 21.4504C22.3155 20.9149 23.1258 20.5697 24.0567 20.4145V13.6586C22.9706 13.4554 22.1145 12.95 21.4884 12.1426C20.8623 11.3351 20.5493 10.4395 20.5493 9.45582C20.5493 8.28477 20.9632 7.28405 21.791 6.45365C22.6189 5.62322 23.6241 5.20801 24.8068 5.20801C25.9895 5.20801 26.996 5.62231 27.8264 6.45092C28.6568 7.2795 29.072 8.28565 29.072 9.46937C29.072 10.444 28.7573 11.3351 28.128 12.1426C27.4986 12.95 26.6441 13.4554 25.5646 13.6586V20.4145C26.4955 20.5697 27.3003 20.9149 27.9788 21.4504C28.6574 21.9858 29.1933 22.6119 29.5867 23.3286L35.923 21.1193C35.9011 21.0188 35.8902 20.9346 35.8902 20.8669V20.5489C35.8902 19.3652 36.3041 18.359 37.132 17.5305C37.9598 16.7019 38.9651 16.2876 40.1477 16.2876C41.3304 16.2876 42.3369 16.7015 43.1673 17.5293C43.9977 18.3572 44.4129 19.3624 44.4129 20.545C44.4129 21.7277 43.9986 22.7342 43.17 23.5646C42.3414 24.3951 41.3353 24.8103 40.1516 24.8103C39.3494 24.8103 38.6162 24.6081 37.9519 24.2038C37.2877 23.7996 36.772 23.2642 36.4048 22.5977L30.0358 24.6988C30.1843 25.5227 30.1461 26.334 29.921 27.1327C29.6959 27.9315 29.2731 28.6543 28.6524 29.3011L32.9826 34.677C33.2951 34.5349 33.6328 34.4175 33.9955 34.3246C34.3583 34.2317 34.7054 34.1853 35.0369 34.1853C36.2209 34.1853 37.2273 34.5992 38.0561 35.427C38.8849 36.2549 39.2993 37.2601 39.2993 38.4428C39.2993 39.6255 38.8854 40.632 38.0575 41.4624C37.2297 42.2928 36.2244 42.708 35.0418 42.708C33.8591 42.708 32.8526 42.2937 32.0222 41.4651C31.1918 40.6365 30.7766 39.6304 30.7766 38.4466C30.7766 37.9398 30.858 37.452 31.0208 36.9832C31.1836 36.5143 31.454 36.0778 31.8321 35.6735L27.5019 30.2222C26.7304 30.7227 25.8372 30.9729 24.8221 30.9729C23.807 30.9729 22.9028 30.7227 22.1096 30.2222L17.7892 35.6735C18.1454 36.0778 18.4104 36.5143 18.5842 36.9832C18.7579 37.452 18.8447 37.9398 18.8447 38.4466C18.8447 39.6304 18.4308 40.6365 17.603 41.4651C16.7751 42.2937 15.7699 42.708 14.5872 42.708ZM9.46974 23.1057C10.1712 23.1057 10.7727 22.855 11.2743 22.3534C11.7758 21.8519 12.0266 21.2504 12.0266 20.5489C12.0266 19.8474 11.7758 19.2459 11.2743 18.7444C10.7727 18.2429 10.1712 17.9921 9.46974 17.9921C8.76826 17.9921 8.16675 18.2429 7.66522 18.7444C7.16369 19.2459 6.91292 19.8474 6.91292 20.5489C6.91292 21.2504 7.16369 21.8519 7.66522 22.3534C8.16675 22.855 8.76826 23.1057 9.46974 23.1057ZM14.5834 41.0035C15.2849 41.0035 15.8864 40.7527 16.3879 40.2512C16.8894 39.7496 17.1402 39.1481 17.1402 38.4466C17.1402 37.7452 16.8894 37.1437 16.3879 36.6421C15.8864 36.1406 15.2849 35.8898 14.5834 35.8898C13.8819 35.8898 13.2804 36.1406 12.7789 36.6421C12.2773 37.1437 12.0266 37.7452 12.0266 38.4466C12.0266 39.1481 12.2773 39.7496 12.7789 40.2512C13.2804 40.7527 13.8819 41.0035 14.5834 41.0035ZM24.8106 12.0262C25.5121 12.0262 26.1136 11.7754 26.6152 11.2739C27.1167 10.7724 27.3675 10.1708 27.3675 9.46937C27.3675 8.76789 27.1167 8.16639 26.6152 7.66485C26.1136 7.16332 25.5121 6.91255 24.8106 6.91255C24.1092 6.91255 23.5077 7.16332 23.0061 7.66485C22.5046 8.16639 22.2538 8.76789 22.2538 9.46937C22.2538 10.1708 22.5046 10.7724 23.0061 11.2739C23.5077 11.7754 24.1092 12.0262 24.8106 12.0262ZM24.8106 29.2683C25.8072 29.2683 26.6572 28.9165 27.3609 28.2128C28.0646 27.5091 28.4164 26.6591 28.4164 25.6626C28.4164 24.666 28.0646 23.816 27.3609 23.1123C26.6572 22.4086 25.8072 22.0568 24.8106 22.0568C23.8141 22.0568 22.9641 22.4086 22.2604 23.1123C21.5567 23.816 21.2049 24.666 21.2049 25.6626C21.2049 26.6591 21.5567 27.5091 22.2604 28.2128C22.9641 28.9165 23.8141 29.2683 24.8106 29.2683ZM35.0379 41.0035C35.7394 41.0035 36.3409 40.7527 36.8424 40.2512C37.344 39.7496 37.5947 39.1481 37.5947 38.4466C37.5947 37.7452 37.344 37.1437 36.8424 36.6421C36.3409 36.1406 35.7394 35.8898 35.0379 35.8898C34.3364 35.8898 33.7349 36.1406 33.2334 36.6421C32.7319 37.1437 32.4811 37.7452 32.4811 38.4466C32.4811 39.1481 32.7319 39.7496 33.2334 40.2512C33.7349 40.7527 34.3364 41.0035 35.0379 41.0035ZM40.1516 23.1057C40.853 23.1057 41.4545 22.855 41.9561 22.3534C42.4576 21.8519 42.7084 21.2504 42.7084 20.5489C42.7084 19.8474 42.4576 19.2459 41.9561 18.7444C41.4545 18.2429 40.853 17.9921 40.1516 17.9921C39.4501 17.9921 38.8486 18.2429 38.347 18.7444C37.8455 19.2459 37.5947 19.8474 37.5947 20.5489C37.5947 21.2504 37.8455 21.8519 38.347 22.3534C38.8486 22.855 39.4501 23.1057 40.1516 23.1057Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'API Keys',
    text: 'Copy and paste live API integration keys and view testcredentials',
    path: API_KEYS
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
      >
        <path
          d='M14.5833 42.708C11.9951 42.708 9.78556 41.7925 7.95466 39.9616C6.12372 38.1307 5.20825 35.9212 5.20825 33.333C5.20825 31.279 5.79119 29.4528 6.95705 27.8543C8.12292 26.2557 9.62332 25.1466 11.4583 24.5269V26.7665C10.243 27.3434 9.24471 28.2235 8.46346 29.4067C7.68221 30.5899 7.29159 31.8987 7.29159 33.333C7.29159 35.3362 8.00606 37.0523 9.43502 38.4812C10.864 39.9102 12.5801 40.6247 14.5833 40.6247C16.5864 40.6247 18.3025 39.9102 19.7315 38.4812C21.1604 37.0523 21.8749 35.3362 21.8749 33.333V32.2913H33.1129C33.3106 31.8453 33.6157 31.48 34.0284 31.1956C34.441 30.9111 34.9038 30.7689 35.4166 30.7689C36.1244 30.7689 36.7287 31.0193 37.2295 31.5201C37.7303 32.0209 37.9807 32.6252 37.9807 33.333C37.9807 34.0408 37.7303 34.6451 37.2295 35.1459C36.7287 35.6467 36.1244 35.8971 35.4166 35.8971C34.8771 35.8971 34.4077 35.7616 34.0084 35.4905C33.6091 35.2193 33.3106 34.8474 33.1129 34.3747H23.9102C23.5843 36.9307 22.5153 38.9587 20.703 40.4584C18.8908 41.9581 16.8509 42.708 14.5833 42.708ZM35.4166 42.708C33.9529 42.708 32.5914 42.3908 31.3321 41.7565C30.0727 41.1222 28.9783 40.2374 28.0488 39.1022H30.9775C31.5437 39.5563 32.2155 39.9235 32.9927 40.204C33.77 40.4844 34.5779 40.6247 35.4166 40.6247C37.4198 40.6247 39.1359 39.9102 40.5648 38.4812C41.9938 37.0523 42.7083 35.3362 42.7083 33.333C42.7083 31.3298 41.9938 29.6137 40.5648 28.1848C39.1359 26.7558 37.4198 26.0413 35.4166 26.0413C34.8023 26.0413 34.2334 26.1101 33.7099 26.2477C33.1864 26.3852 32.6775 26.5782 32.1834 26.8266L26.3501 17.095C25.6209 17.1965 24.9599 17.0029 24.3669 16.5141C23.7739 16.0253 23.4775 15.3816 23.4775 14.583C23.4775 13.8752 23.7279 13.2709 24.2287 12.7701C24.7295 12.2693 25.3338 12.0189 26.0416 12.0189C26.7494 12.0189 27.3537 12.2693 27.8545 12.7701C28.3553 13.2709 28.6057 13.8752 28.6057 14.583C28.6057 14.8368 28.5656 15.0845 28.4855 15.3262C28.4054 15.5679 28.2905 15.7756 28.141 15.9492L33.0728 24.2345C33.4308 24.165 33.7993 24.1016 34.1786 24.0442C34.5579 23.9867 34.9705 23.958 35.4166 23.958C38.0047 23.958 40.2143 24.8735 42.0452 26.7044C43.8761 28.5353 44.7916 30.7448 44.7916 33.333C44.7916 35.9212 43.8761 38.1307 42.0452 39.9616C40.2143 41.7925 38.0047 42.708 35.4166 42.708ZM14.5833 35.8971C13.8754 35.8971 13.2711 35.6467 12.7703 35.1459C12.2695 34.6451 12.0191 34.0408 12.0191 33.333C12.0191 32.6225 12.2822 32.0029 12.8084 31.4741C13.3346 30.9452 14.025 30.7275 14.8797 30.821L20.2163 21.9348C19.0491 21.024 18.1656 19.9309 17.566 18.6555C16.9664 17.3802 16.6666 16.0227 16.6666 14.583C16.6666 11.9948 17.5821 9.78532 19.413 7.95441C21.2439 6.12348 23.4534 5.20801 26.0416 5.20801C28.6297 5.20801 30.8393 6.12348 32.6702 7.95441C34.5011 9.78532 35.4166 11.9948 35.4166 14.583H33.3333C33.3333 12.5798 32.6188 10.8637 31.1898 9.43478C29.7609 8.00582 28.0448 7.29134 26.0416 7.29134C24.0384 7.29134 22.3223 8.00582 20.8934 9.43478C19.4644 10.8637 18.7499 12.5798 18.7499 14.583C18.7499 16.0494 19.1345 17.3601 19.9038 18.5153C20.673 19.6705 21.7254 20.5779 23.0608 21.2376L16.6706 31.9147C16.8202 32.1151 16.937 32.3381 17.0212 32.5838C17.1053 32.8295 17.1474 33.0793 17.1474 33.333C17.1474 34.0408 16.897 34.6451 16.3962 35.1459C15.8954 35.6467 15.2911 35.8971 14.5833 35.8971Z'
          fill='#444444'
        />
      </svg>
    ),
    title: 'Webhook',
    text: 'Manage bank account credentials for receiving settlement payments',
    path: WEB_HOOKS
  }
];
