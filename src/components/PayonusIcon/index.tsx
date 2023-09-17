import React from 'react';
import clsx from 'clsx';

type Props = {
  onClick?: () => void;
  className?: string;
  isDark?: boolean;
};

export const PayonusIcon: React.FC<Props> = ({ onClick, className, isDark }) => {
  if (isDark) {
    return <DarkLogo className={className} onClick={onClick} />;
  }

  return (
    <svg
      onClick={onClick}
      width='275'
      className={clsx('cursor-pointer', className)}
      height='40'
      viewBox='0 0 275 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path
        d='M53.3181 29.0843H49.4042V10.3795H57.8166C58.7654 10.3795 59.638 10.6249 60.4343 11.1157C61.2476 11.5883 61.8914 12.2518 62.3658 13.1061C62.8403 13.9605 63.0775 14.9148 63.0775 15.9691V16.1327C63.0775 17.1688 62.8403 18.1322 62.3658 19.0229C61.9084 19.8955 61.273 20.5862 60.4597 21.0952C59.6634 21.6042 58.7823 21.8587 57.8166 21.8587H53.3181V29.0843ZM53.3181 18.5594H56.9016C57.5455 18.5594 58.0792 18.3322 58.5028 17.8778C58.9263 17.4051 59.1381 16.8598 59.1381 16.2418V16.0782C59.1381 15.4419 58.9263 14.8966 58.5028 14.4422C58.0961 13.9695 57.5624 13.7332 56.9016 13.7332H53.3181V18.5594Z'
        fill='white'
      />
      <path
        d='M73.1903 19.6773C73.1903 19.0593 73.0039 18.5594 72.6311 18.1777C72.2753 17.796 71.6908 17.6051 70.8775 17.6051C70.4031 17.6051 69.9965 17.696 69.6576 17.8778C69.3187 18.0414 69.0561 18.2504 68.8697 18.5049C68.7003 18.7594 68.6156 18.9957 68.6156 19.2138V19.4319H65.032C64.9982 19.2138 64.9812 19.0502 64.9812 18.9411C64.9812 18.1595 65.2184 17.4597 65.6928 16.8416C66.1842 16.2236 66.8619 15.7419 67.726 15.3965C68.5902 15.0511 69.5813 14.8784 70.6996 14.8784H71.2333C73.0632 14.8784 74.4526 15.2693 75.4014 16.0509C76.3502 16.8144 76.8246 17.8687 76.8246 19.2138V25.6487C76.8246 25.9759 76.8924 26.2213 77.028 26.3849C77.1804 26.5485 77.3583 26.6303 77.5617 26.6303C77.7311 26.6303 77.9175 26.594 78.1208 26.5212C78.3241 26.4485 78.4851 26.3849 78.6037 26.3304V28.7844C77.9768 29.1661 77.2313 29.357 76.3672 29.357C75.4353 29.357 74.7237 29.157 74.2323 28.7571C73.7409 28.339 73.4529 27.7573 73.3682 27.012C72.1821 28.5753 70.725 29.357 68.9968 29.357C67.7091 29.357 66.6501 29.0752 65.8199 28.5117C64.9897 27.9482 64.5746 26.8757 64.5746 25.2942C64.5746 24.0036 64.9134 23.022 65.5912 22.3495C66.2859 21.6587 67.2432 21.1952 68.4631 20.9589C69.683 20.7226 71.2587 20.6044 73.1903 20.6044V19.6773ZM73.1903 22.8403C71.5807 22.8403 70.3777 23.0129 69.5813 23.3583C68.8019 23.6855 68.4122 24.2309 68.4122 24.9943C68.4122 25.5942 68.5647 26.0214 68.8697 26.2758C69.1916 26.5122 69.6745 26.6303 70.3184 26.6303C70.7589 26.6303 71.1994 26.5031 71.64 26.2486C72.0805 25.9941 72.4448 25.6305 72.7328 25.1579C73.0378 24.6853 73.1903 24.1581 73.1903 23.5765V22.8403Z'
        fill='white'
      />
      <path
        d='M87.5919 28.3208C86.965 30.1386 86.194 31.5655 85.2791 32.6017C84.3642 33.656 83.2628 34.1831 81.9751 34.1831C81.0771 34.1831 80.3486 34.0468 79.7895 33.7741V30.9657C79.9928 31.0566 80.2554 31.1384 80.5773 31.2111C80.8992 31.302 81.2042 31.3474 81.4923 31.3474C82.5766 31.3474 83.3476 30.5022 83.805 28.8116L78.8999 15.1511H82.8393L85.7112 23.9037H85.8636L88.5576 15.1511H92.2174L87.5919 28.3208Z'
        fill='white'
      />
      <path
        d='M106.58 22.5131C106.58 23.9127 106.301 25.1306 105.742 26.1668C105.199 27.2029 104.445 27.9936 103.48 28.539C102.514 29.0843 101.43 29.357 100.227 29.357H99.8199C98.6169 29.357 97.5325 29.0843 96.5668 28.539C95.601 27.9936 94.8385 27.2029 94.2794 26.1668C93.7372 25.1306 93.4661 23.9127 93.4661 22.5131V21.7223C93.4661 20.3226 93.7372 19.1047 94.2794 18.0686C94.8385 17.0325 95.601 16.2418 96.5668 15.6964C97.5325 15.1511 98.6169 14.8784 99.8199 14.8784H100.227C101.43 14.8784 102.514 15.1511 103.48 15.6964C104.445 16.2418 105.199 17.0325 105.742 18.0686C106.301 19.1047 106.58 20.3226 106.58 21.7223V22.5131ZM102.819 21.0134C102.819 19.9046 102.556 19.0593 102.031 18.4776C101.523 17.8959 100.853 17.6051 100.023 17.6051C99.193 17.6051 98.5152 17.8959 97.99 18.4776C97.4817 19.0593 97.2276 19.9046 97.2276 21.0134V23.222C97.2276 24.3308 97.4817 25.1761 97.99 25.7578C98.5152 26.3395 99.193 26.6303 100.023 26.6303C100.853 26.6303 101.523 26.3395 102.031 25.7578C102.556 25.1761 102.819 24.3308 102.819 23.222V21.0134Z'
        fill='white'
      />
      <path
        d='M112.516 17.1961C113.584 15.651 114.965 14.8784 116.659 14.8784C117.981 14.8784 119.065 15.2602 119.912 16.0236C120.776 16.7871 121.208 17.8959 121.208 19.3501V29.0843H117.498V20.2227C117.498 19.5137 117.303 18.9321 116.913 18.4776C116.54 18.005 116.057 17.7687 115.464 17.7687C114.804 17.7687 114.236 18.0413 113.762 18.5867C113.287 19.1138 113.05 19.7591 113.05 20.5226V29.0843H109.339V15.1511H112.11L112.516 17.1961Z'
        fill='white'
      />
      <path
        d='M136.322 25.8123C136.322 26.085 136.398 26.294 136.551 26.4394C136.703 26.5667 136.873 26.6303 137.059 26.6303C137.229 26.6303 137.415 26.594 137.618 26.5212C137.822 26.4485 137.982 26.3849 138.101 26.3304V28.7844C137.474 29.1661 136.729 29.357 135.865 29.357C134.17 29.357 133.188 28.6935 132.916 27.3665C131.849 28.6935 130.544 29.357 129.003 29.357C127.681 29.357 126.588 28.9752 125.724 28.2118C124.877 27.4483 124.453 26.3395 124.453 24.8852V15.1511H128.164V24.0127C128.164 24.7216 128.35 25.3124 128.723 25.785C129.113 26.2395 129.604 26.4667 130.197 26.4667C130.858 26.4667 131.425 26.2031 131.9 25.676C132.374 25.1306 132.611 24.4763 132.611 23.7128V15.1511H136.322V25.8123Z'
        fill='white'
      />
      <path
        d='M142.404 24.8307C142.404 25.4669 142.667 25.9305 143.192 26.2213C143.717 26.494 144.369 26.6303 145.149 26.6303C145.827 26.6303 146.428 26.5212 146.953 26.3031C147.495 26.085 147.767 25.7396 147.767 25.267C147.767 24.758 147.521 24.3945 147.03 24.1763C146.538 23.9582 145.776 23.7673 144.742 23.6037C143.658 23.4038 142.768 23.1856 142.074 22.9493C141.379 22.713 140.777 22.304 140.269 21.7223C139.778 21.1406 139.532 20.3317 139.532 19.2956C139.532 18.3504 139.786 17.5506 140.295 16.8962C140.82 16.2236 141.506 15.7237 142.353 15.3965C143.217 15.0511 144.158 14.8784 145.174 14.8784H145.683C146.581 14.8784 147.428 15.042 148.224 15.3692C149.037 15.6782 149.69 16.1236 150.181 16.7053C150.672 17.2688 150.918 17.9141 150.918 18.6412C150.918 18.7866 150.91 18.923 150.893 19.0502C150.876 19.1593 150.867 19.2229 150.867 19.2411H147.614C147.614 18.1504 146.835 17.6051 145.276 17.6051C144.564 17.6051 143.988 17.7142 143.548 17.9323C143.124 18.1504 142.912 18.4503 142.912 18.8321C142.912 19.2865 143.141 19.6046 143.598 19.7864C144.073 19.9682 144.81 20.1409 145.81 20.3045C146.945 20.5044 147.86 20.7226 148.554 20.9589C149.266 21.177 149.884 21.586 150.41 22.1859C150.935 22.7675 151.198 23.5946 151.198 24.6671C151.198 26.3213 150.655 27.521 149.571 28.2663C148.487 28.9934 147.106 29.357 145.428 29.357H144.59C143.539 29.357 142.599 29.1843 141.769 28.8389C140.938 28.4935 140.286 28.0027 139.812 27.3665C139.354 26.7303 139.125 26.0032 139.125 25.1852L139.151 24.6399H142.404V24.8307Z'
        fill='white'
      />
      <path
        d='M173.59 10.3795V29.0843H171.099V13.5151H170.947L164.923 29.0843H162.814L156.816 13.5151H156.689V29.0843H154.427V10.3795H158.341L163.958 25.1034H164.059L169.701 10.3795H173.59Z'
        fill='white'
      />
      <path
        d='M183.26 14.8784C184.327 14.8784 185.267 15.1238 186.081 15.6146C186.911 16.0872 187.555 16.7689 188.012 17.6596C188.47 18.5503 188.698 19.5865 188.698 20.768V22.7039H179.625C179.659 24.1763 179.981 25.3124 180.591 26.1122C181.201 26.9121 182.108 27.312 183.311 27.312C184.378 27.312 185.166 26.9757 185.674 26.3031C186.182 25.6305 186.437 24.8307 186.437 23.9037H188.698C188.698 24.9943 188.461 25.9486 187.987 26.7666C187.529 27.5846 186.886 28.2209 186.055 28.6753C185.242 29.1297 184.31 29.357 183.26 29.357H183.158C181.328 29.357 179.879 28.7298 178.812 27.4756C177.762 26.2031 177.236 24.5126 177.236 22.404V21.8587C177.236 20.4772 177.474 19.2593 177.948 18.2049C178.422 17.1506 179.1 16.3326 179.981 15.751C180.862 15.1693 181.896 14.8784 183.082 14.8784H183.26ZM183.133 16.9234C182.167 16.9234 181.379 17.2415 180.769 17.8778C180.176 18.514 179.812 19.4592 179.676 20.7135H186.335V20.3863C186.335 19.3501 186.038 18.514 185.445 17.8778C184.869 17.2415 184.098 16.9234 183.133 16.9234Z'
        fill='white'
      />
      <path
        d='M198.017 14.8784C199.22 14.8784 200.161 15.2965 200.838 16.1327C201.516 16.9507 201.855 17.9868 201.855 19.2411L201.779 20.2772H199.669V19.6773C199.669 19.132 199.542 18.6503 199.288 18.2322C199.034 17.8141 198.712 17.496 198.322 17.2779C197.933 17.0416 197.543 16.9234 197.153 16.9234C196.34 16.9234 195.705 17.2688 195.247 17.9595C194.79 18.6503 194.561 19.5865 194.561 20.768V29.0843H192.172V15.1511H193.875L194.23 17.2234C194.332 16.8598 194.561 16.4962 194.917 16.1327C195.272 15.7691 195.713 15.4692 196.238 15.2329C196.78 14.9966 197.373 14.8784 198.017 14.8784Z'
        fill='white'
      />
      <path
        d='M209.714 14.8784C210.748 14.8784 211.671 15.1238 212.484 15.6146C213.315 16.0872 213.958 16.7598 214.416 17.6324C214.873 18.5049 215.102 19.5047 215.102 20.6317H212.739C212.739 19.5047 212.467 18.6049 211.925 17.9323C211.4 17.2597 210.638 16.9234 209.638 16.9234C208.587 16.9234 207.749 17.3052 207.122 18.0686C206.512 18.8139 206.207 19.8409 206.207 21.1497V22.6221C206.207 24.2036 206.512 25.3851 207.122 26.1668C207.732 26.9302 208.596 27.312 209.714 27.312C210.748 27.312 211.519 26.9848 212.027 26.3304C212.552 25.6578 212.815 24.758 212.815 23.631H215.102C215.102 25.376 214.611 26.7666 213.628 27.8028C212.662 28.8389 211.366 29.357 209.74 29.357H209.536C208.384 29.357 207.376 29.0752 206.512 28.5117C205.648 27.93 204.978 27.1211 204.504 26.085C204.047 25.0488 203.818 23.84 203.818 22.4585V21.8041C203.818 20.4226 204.055 19.2138 204.529 18.1777C205.004 17.1234 205.673 16.3145 206.537 15.751C207.401 15.1693 208.393 14.8784 209.511 14.8784H209.714Z'
        fill='white'
      />
      <path
        d='M220.845 16.8962C221.912 15.551 223.251 14.8784 224.86 14.8784C226.283 14.8784 227.402 15.2874 228.215 16.1054C229.028 16.9234 229.435 18.1231 229.435 19.7046V29.0843H227.046V20.1681C227.046 18.005 226.131 16.9234 224.301 16.9234C223.691 16.9234 223.123 17.0961 222.598 17.4415C222.073 17.7869 221.649 18.2595 221.327 18.8593C221.006 19.441 220.845 20.0863 220.845 20.7953V29.0843H218.456V9.45239H220.845V16.8962Z'
        fill='white'
      />
      <path
        d='M238.629 14.8784C240.341 14.8784 241.611 15.242 242.442 15.9691C243.289 16.6962 243.712 17.7505 243.712 19.132V26.3576C243.712 26.6848 243.78 26.9302 243.916 27.0938C244.051 27.2393 244.221 27.312 244.424 27.312C244.814 27.312 245.203 27.1847 245.593 26.9302V28.8116C245.017 29.1752 244.365 29.357 243.636 29.357C242.908 29.357 242.365 29.1388 242.01 28.7026C241.654 28.2481 241.459 27.6301 241.425 26.8484C240.374 28.5208 238.858 29.357 236.876 29.357C235.452 29.357 234.385 29.0298 233.673 28.3754C232.979 27.7028 232.631 26.6485 232.631 25.2124C232.631 24.0854 232.902 23.2038 233.445 22.5676C233.987 21.9132 234.885 21.4406 236.139 21.1497C237.392 20.8589 239.121 20.7135 241.323 20.7135V19.4319C241.323 18.5049 241.069 17.8596 240.561 17.496C240.053 17.1143 239.316 16.9234 238.35 16.9234C237.435 16.9234 236.723 17.1143 236.215 17.496C235.707 17.8778 235.452 18.414 235.452 19.1047V19.4319H233.114C233.08 19.1775 233.063 18.8775 233.063 18.5321C233.063 17.8959 233.301 17.2961 233.775 16.7326C234.249 16.169 234.893 15.7237 235.707 15.3965C236.52 15.0511 237.418 14.8784 238.401 14.8784H238.629ZM241.323 22.7039C239.544 22.7039 238.197 22.8039 237.282 23.0039C236.384 23.1856 235.783 23.4674 235.478 23.8491C235.173 24.2309 235.02 24.758 235.02 25.4306C235.02 26.6848 235.91 27.312 237.689 27.312C238.316 27.312 238.909 27.1484 239.468 26.8212C240.027 26.4758 240.476 25.9941 240.815 25.376C241.154 24.758 241.323 24.0491 241.323 23.2493V22.7039Z'
        fill='white'
      />
      <path
        d='M254.792 14.8784C256.216 14.8784 257.334 15.2874 258.147 16.1054C258.96 16.9234 259.367 18.1231 259.367 19.7046V29.0843H256.978V20.1681C256.978 18.005 256.063 16.9234 254.233 16.9234C253.623 16.9234 253.056 17.0961 252.53 17.4415C252.005 17.7869 251.582 18.2595 251.26 18.8593C250.938 19.441 250.777 20.0863 250.777 20.7953V29.0843H248.388V15.1511H250.116L250.446 17.1961C251.531 15.651 252.979 14.8784 254.792 14.8784Z'
        fill='white'
      />
      <path
        d='M266.125 15.1511H269.149V17.1961H266.125V25.5124C266.125 26.1668 266.243 26.6394 266.48 26.9302C266.718 27.2211 267.082 27.3665 267.573 27.3665C268.014 27.3665 268.539 27.2302 269.149 26.9575V28.8662C268.539 29.1934 267.751 29.357 266.785 29.357C265.786 29.357 265.023 29.0388 264.498 28.4026C263.99 27.7664 263.736 26.7575 263.736 25.376V17.1961H262.312V15.1511H263.812L264.625 10.7067H266.125V15.1511Z'
        fill='white'
      />
      <rect x='150.957' y='35.3465' width='124.043' height='4.65349' fill='url(#pattern0)' />
      <path
        d='M26.8208 31.727C36.8414 26.1917 41.7139 15.2881 37.6918 7.41451C33.6697 -0.459004 22.2931 -2.36774 12.2723 3.16759C2.25166 8.7029 -2.59782 19.5826 1.40127 27.4801C5.40036 35.3775 16.8231 37.2623 26.8208 31.727ZM11.6518 13.7849C17.3747 11.0888 23.9479 11.6614 26.3381 15.0494C28.7284 18.4374 26.0393 23.4001 20.3165 26.0963C14.5937 28.7923 8.02045 28.2197 5.63019 24.8317C5.53826 24.6886 5.44633 24.5216 5.3544 24.3784C5.10158 23.7342 4.89473 23.0662 4.77981 22.3742C4.59595 19.368 7.19306 15.9084 11.6518 13.7849ZM33.44 9.75272C36.5197 15.7891 32.7964 24.116 25.12 28.339C20.7072 30.7726 15.9497 31.3214 12.1115 30.2238C15.1683 30.2 18.5008 29.4843 21.6265 28.005C29.0961 24.4738 32.6355 18.008 29.5098 13.5702C26.384 9.13239 17.7884 8.36893 10.2958 11.9001C8.70993 12.6397 7.30797 13.5225 6.11284 14.5007C7.67571 11.3751 10.4107 8.51206 13.9961 6.53173C21.6496 2.2848 30.3602 3.74021 33.44 9.75272Z'
        fill='#F4B61E'
      />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use
            xlinkHref='#image0_115_2339'
            transform='matrix(0.00362319 0 0 0.0965791 0 -0.369212)'
          />
        </pattern>
        <image
          id='image0_115_2339'
          width='276'
          height='18'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

const DarkLogo = (props: Omit<Props, 'isDark'>) => {
  return (
    <svg
      width='230'
      height='30'
      viewBox='0 0 230 30'
      fill='none'
      className={props.className}
      onClick={props.onClick}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M45.5628 25H42.2181V8.92187H49.4069C50.2177 8.92187 50.9634 9.13281 51.6439 9.55469C52.3389 9.96094 52.8891 10.5313 53.2945 11.2656C53.6999 12 53.9026 12.8203 53.9026 13.7266V13.8672C53.9026 14.7578 53.6999 15.5859 53.2945 16.3516C52.9036 17.1016 52.3606 17.6953 51.6656 18.1328C50.9851 18.5703 50.2322 18.7891 49.4069 18.7891H45.5628V25ZM45.5628 15.9531H48.625C49.1752 15.9531 49.6313 15.7578 49.9933 15.3672C50.3553 14.9609 50.5363 14.4922 50.5363 13.9609V13.8203C50.5363 13.2734 50.3553 12.8047 49.9933 12.4141C49.6458 12.0078 49.1897 11.8047 48.625 11.8047H45.5628V15.9531Z'
        fill='#444444'
      />
      <path
        d='M62.5444 16.9141C62.5444 16.3828 62.3852 15.9531 62.0666 15.625C61.7626 15.2969 61.2631 15.1328 60.5681 15.1328C60.1627 15.1328 59.8152 15.2109 59.5256 15.3672C59.236 15.5078 59.0116 15.6875 58.8523 15.9063C58.7075 16.125 58.6351 16.3281 58.6351 16.5156V16.7031H55.5729C55.5439 16.5156 55.5294 16.375 55.5294 16.2812C55.5294 15.6094 55.7321 15.0078 56.1375 14.4766C56.5574 13.9453 57.1366 13.5313 57.875 13.2344C58.6134 12.9375 59.4604 12.7891 60.416 12.7891H60.8721C62.4359 12.7891 63.6231 13.125 64.4339 13.7969C65.2448 14.4531 65.6502 15.3594 65.6502 16.5156V22.0469C65.6502 22.3281 65.7081 22.5391 65.8239 22.6797C65.9542 22.8203 66.1062 22.8906 66.28 22.8906C66.4248 22.8906 66.5841 22.8594 66.7578 22.7969C66.9315 22.7344 67.0691 22.6797 67.1704 22.6328V24.7422C66.6347 25.0703 65.9977 25.2344 65.2592 25.2344C64.4629 25.2344 63.8548 25.0625 63.4349 24.7188C63.015 24.3594 62.7689 23.8594 62.6965 23.2188C61.683 24.5625 60.4378 25.2344 58.9609 25.2344C57.8605 25.2344 56.9556 24.9922 56.2461 24.5078C55.5367 24.0234 55.1819 23.1016 55.1819 21.7422C55.1819 20.6328 55.4715 19.7891 56.0507 19.2109C56.6443 18.6172 57.4624 18.2188 58.5048 18.0156C59.5473 17.8125 60.8939 17.7109 62.5444 17.7109V16.9141ZM62.5444 19.6328C61.169 19.6328 60.141 19.7812 59.4604 20.0781C58.7944 20.3594 58.4614 20.8281 58.4614 21.4844C58.4614 22 58.5917 22.3672 58.8523 22.5859C59.1274 22.7891 59.5401 22.8906 60.0903 22.8906C60.4667 22.8906 60.8432 22.7813 61.2196 22.5625C61.5961 22.3438 61.9074 22.0313 62.1535 21.625C62.4141 21.2188 62.5444 20.7656 62.5444 20.2656V19.6328Z'
        fill='#444444'
      />
      <path
        d='M74.8513 24.3438C74.3155 25.9062 73.6568 27.1328 72.8749 28.0234C72.093 28.9297 71.1519 29.3828 70.0515 29.3828C69.2841 29.3828 68.6615 29.2656 68.1837 29.0312V26.6172C68.3575 26.6953 68.5819 26.7656 68.857 26.8281C69.1321 26.9062 69.3927 26.9453 69.6389 26.9453C70.5655 26.9453 71.2243 26.2188 71.6152 24.7656L67.4236 13.0234H70.7899L73.2441 20.5469H73.3744L75.6766 13.0234H78.804L74.8513 24.3438Z'
        fill='#444444'
      />
      <path
        d='M91.0777 19.3516C91.0777 20.5547 90.8388 21.6016 90.361 22.4922C89.8977 23.3828 89.2534 24.0625 88.4281 24.5312C87.6028 25 86.6761 25.2344 85.6481 25.2344H85.3007C84.2727 25.2344 83.346 25 82.5207 24.5312C81.6954 24.0625 81.0439 23.3828 80.5661 22.4922C80.1027 21.6016 79.8711 20.5547 79.8711 19.3516V18.6719C79.8711 17.4688 80.1027 16.4219 80.5661 15.5313C81.0439 14.6406 81.6954 13.9609 82.5207 13.4922C83.346 13.0234 84.2727 12.7891 85.3007 12.7891H85.6481C86.6761 12.7891 87.6028 13.0234 88.4281 13.4922C89.2534 13.9609 89.8977 14.6406 90.361 15.5313C90.8388 16.4219 91.0777 17.4688 91.0777 18.6719V19.3516ZM87.8634 18.0625C87.8634 17.1094 87.639 16.3828 87.1902 15.8828C86.7558 15.3828 86.1839 15.1328 85.4744 15.1328C84.7649 15.1328 84.1858 15.3828 83.7369 15.8828C83.3026 16.3828 83.0854 17.1094 83.0854 18.0625V19.9609C83.0854 20.9141 83.3026 21.6406 83.7369 22.1406C84.1858 22.6406 84.7649 22.8906 85.4744 22.8906C86.1839 22.8906 86.7558 22.6406 87.1902 22.1406C87.639 21.6406 87.8634 20.9141 87.8634 19.9609V18.0625Z'
        fill='#444444'
      />
      <path
        d='M96.1503 14.7813C97.0625 13.4531 98.2425 12.7891 99.6904 12.7891C100.82 12.7891 101.746 13.1172 102.47 13.7734C103.209 14.4297 103.578 15.3828 103.578 16.6328V25H100.407V17.3828C100.407 16.7734 100.241 16.2734 99.9076 15.8828C99.589 15.4766 99.1764 15.2734 98.6696 15.2734C98.105 15.2734 97.6199 15.5078 97.2145 15.9766C96.8091 16.4297 96.6064 16.9844 96.6064 17.6406V25H93.4355V13.0234H95.8028L96.1503 14.7813Z'
        fill='#444444'
      />
      <path
        d='M116.493 22.1875C116.493 22.4219 116.559 22.6016 116.689 22.7266C116.819 22.8359 116.964 22.8906 117.123 22.8906C117.268 22.8906 117.427 22.8594 117.601 22.7969C117.775 22.7344 117.912 22.6797 118.014 22.6328V24.7422C117.478 25.0703 116.841 25.2344 116.102 25.2344C114.655 25.2344 113.815 24.6641 113.583 23.5234C112.671 24.6641 111.556 25.2344 110.239 25.2344C109.109 25.2344 108.175 24.9063 107.437 24.25C106.713 23.5938 106.351 22.6406 106.351 21.3906V13.0234H109.522V20.6406C109.522 21.25 109.681 21.7578 110 22.1641C110.333 22.5547 110.753 22.75 111.259 22.75C111.824 22.75 112.309 22.5234 112.714 22.0703C113.12 21.6016 113.323 21.0391 113.323 20.3828V13.0234H116.493V22.1875Z'
        fill='#444444'
      />
      <path
        d='M121.691 21.3438C121.691 21.8906 121.915 22.2891 122.364 22.5391C122.813 22.7734 123.37 22.8906 124.036 22.8906C124.615 22.8906 125.129 22.7969 125.578 22.6094C126.042 22.4219 126.273 22.125 126.273 21.7188C126.273 21.2813 126.063 20.9688 125.643 20.7813C125.224 20.5938 124.572 20.4297 123.689 20.2891C122.762 20.1172 122.002 19.9297 121.408 19.7266C120.815 19.5234 120.301 19.1719 119.866 18.6719C119.446 18.1719 119.237 17.4766 119.237 16.5859C119.237 15.7734 119.454 15.0859 119.888 14.5234C120.337 13.9453 120.923 13.5156 121.647 13.2344C122.386 12.9375 123.189 12.7891 124.058 12.7891H124.492C125.26 12.7891 125.984 12.9297 126.664 13.2109C127.359 13.4766 127.917 13.8594 128.337 14.3594C128.756 14.8438 128.966 15.3984 128.966 16.0234C128.966 16.1484 128.959 16.2656 128.945 16.375C128.93 16.4688 128.923 16.5234 128.923 16.5391H126.143C126.143 15.6016 125.477 15.1328 124.145 15.1328C123.537 15.1328 123.044 15.2266 122.668 15.4141C122.306 15.6016 122.125 15.8594 122.125 16.1875C122.125 16.5781 122.321 16.8516 122.711 17.0078C123.117 17.1641 123.747 17.3125 124.601 17.4531C125.571 17.625 126.353 17.8125 126.947 18.0156C127.555 18.2031 128.083 18.5547 128.532 19.0703C128.981 19.5703 129.205 20.2813 129.205 21.2031C129.205 22.625 128.742 23.6563 127.815 24.2969C126.889 24.9219 125.709 25.2344 124.275 25.2344H123.558C122.661 25.2344 121.857 25.0859 121.148 24.7891C120.438 24.4922 119.881 24.0703 119.475 23.5234C119.085 22.9766 118.889 22.3516 118.889 21.6484L118.911 21.1797H121.691V21.3438Z'
        fill='#444444'
      />
      <path
        d='M148.34 8.92187V25H146.212V11.6172H146.082L140.934 25H139.132L134.006 11.6172H133.898V25H131.965V8.92187H135.309L140.109 21.5781H140.196L145.018 8.92187H148.34Z'
        fill='#444444'
      />
      <path
        d='M156.604 12.7891C157.516 12.7891 158.319 13 159.014 13.4219C159.724 13.8281 160.274 14.4141 160.665 15.1797C161.056 15.9453 161.251 16.8359 161.251 17.8516V19.5156H153.498C153.527 20.7813 153.802 21.7578 154.323 22.4453C154.845 23.1328 155.619 23.4766 156.647 23.4766C157.559 23.4766 158.233 23.1875 158.667 22.6094C159.101 22.0313 159.319 21.3438 159.319 20.5469H161.251C161.251 21.4844 161.049 22.3047 160.643 23.0078C160.252 23.7109 159.702 24.2578 158.993 24.6484C158.298 25.0391 157.501 25.2344 156.604 25.2344H156.517C154.953 25.2344 153.715 24.6953 152.803 23.6172C151.905 22.5234 151.456 21.0703 151.456 19.2578V18.7891C151.456 17.6016 151.659 16.5547 152.065 15.6484C152.47 14.7422 153.049 14.0391 153.802 13.5391C154.555 13.0391 155.438 12.7891 156.452 12.7891H156.604ZM156.495 14.5469C155.67 14.5469 154.997 14.8203 154.475 15.3672C153.969 15.9141 153.657 16.7266 153.541 17.8047H159.232V17.5234C159.232 16.6328 158.978 15.9141 158.472 15.3672C157.979 14.8203 157.32 14.5469 156.495 14.5469Z'
        fill='#444444'
      />
      <path
        d='M169.215 12.7891C170.243 12.7891 171.046 13.1484 171.626 13.8672C172.205 14.5703 172.494 15.4609 172.494 16.5391L172.429 17.4297H170.626V16.9141C170.626 16.4453 170.518 16.0312 170.301 15.6719C170.084 15.3125 169.808 15.0391 169.475 14.8516C169.142 14.6484 168.809 14.5469 168.476 14.5469C167.781 14.5469 167.238 14.8438 166.847 15.4375C166.457 16.0313 166.261 16.8359 166.261 17.8516V25H164.22V13.0234H165.675L165.979 14.8047C166.066 14.4922 166.261 14.1797 166.565 13.8672C166.869 13.5547 167.246 13.2969 167.695 13.0938C168.158 12.8906 168.665 12.7891 169.215 12.7891Z'
        fill='#444444'
      />
      <path
        d='M179.21 12.7891C180.094 12.7891 180.883 13 181.578 13.4219C182.287 13.8281 182.837 14.4062 183.228 15.1562C183.619 15.9062 183.815 16.7656 183.815 17.7344H181.795C181.795 16.7656 181.563 15.9922 181.1 15.4141C180.651 14.8359 179.999 14.5469 179.145 14.5469C178.247 14.5469 177.531 14.875 176.995 15.5313C176.474 16.1719 176.213 17.0547 176.213 18.1797V19.4453C176.213 20.8047 176.474 21.8203 176.995 22.4922C177.516 23.1484 178.255 23.4766 179.21 23.4766C180.094 23.4766 180.752 23.1953 181.187 22.6328C181.636 22.0547 181.86 21.2812 181.86 20.3125H183.815C183.815 21.8125 183.395 23.0078 182.555 23.8984C181.73 24.7891 180.622 25.2344 179.232 25.2344H179.058C178.074 25.2344 177.212 24.9922 176.474 24.5078C175.735 24.0078 175.163 23.3125 174.758 22.4219C174.367 21.5313 174.172 20.4922 174.172 19.3047V18.7422C174.172 17.5547 174.374 16.5156 174.78 15.625C175.185 14.7188 175.757 14.0234 176.496 13.5391C177.234 13.0391 178.081 12.7891 179.037 12.7891H179.21Z'
        fill='#444444'
      />
      <path
        d='M188.722 14.5234C189.634 13.3672 190.778 12.7891 192.153 12.7891C193.369 12.7891 194.325 13.1406 195.02 13.8438C195.715 14.5469 196.063 15.5781 196.063 16.9375V25H194.021V17.3359C194.021 15.4766 193.239 14.5469 191.675 14.5469C191.154 14.5469 190.669 14.6953 190.22 14.9922C189.771 15.2891 189.409 15.6953 189.134 16.2109C188.859 16.7109 188.722 17.2656 188.722 17.875V25H186.68V8.125H188.722V14.5234Z'
        fill='#444444'
      />
      <path
        d='M203.92 12.7891C205.382 12.7891 206.468 13.1016 207.177 13.7266C207.901 14.3516 208.263 15.2578 208.263 16.4453V22.6562C208.263 22.9375 208.321 23.1484 208.437 23.2891C208.553 23.4141 208.698 23.4766 208.871 23.4766C209.204 23.4766 209.537 23.3672 209.87 23.1484V24.7656C209.378 25.0781 208.821 25.2344 208.198 25.2344C207.576 25.2344 207.112 25.0469 206.808 24.6719C206.504 24.2812 206.338 23.75 206.309 23.0781C205.411 24.5156 204.115 25.2344 202.421 25.2344C201.205 25.2344 200.293 24.9531 199.685 24.3906C199.091 23.8125 198.794 22.9062 198.794 21.6719C198.794 20.7031 199.026 19.9453 199.489 19.3984C199.952 18.8359 200.72 18.4297 201.791 18.1797C202.863 17.9297 204.34 17.8047 206.222 17.8047V16.7031C206.222 15.9062 206.005 15.3516 205.57 15.0391C205.136 14.7109 204.506 14.5469 203.681 14.5469C202.899 14.5469 202.291 14.7109 201.856 15.0391C201.422 15.3672 201.205 15.8281 201.205 16.4219V16.7031H199.207C199.178 16.4844 199.163 16.2266 199.163 15.9297C199.163 15.3828 199.366 14.8672 199.771 14.3828C200.177 13.8984 200.727 13.5156 201.422 13.2344C202.117 12.9375 202.884 12.7891 203.724 12.7891H203.92ZM206.222 19.5156C204.701 19.5156 203.55 19.6016 202.769 19.7734C202.001 19.9297 201.487 20.1719 201.227 20.5C200.966 20.8281 200.836 21.2812 200.836 21.8594C200.836 22.9375 201.596 23.4766 203.116 23.4766C203.652 23.4766 204.159 23.3359 204.636 23.0547C205.114 22.7578 205.498 22.3438 205.787 21.8125C206.077 21.2812 206.222 20.6719 206.222 19.9844V19.5156Z'
        fill='#444444'
      />
      <path
        d='M217.732 12.7891C218.948 12.7891 219.903 13.1406 220.598 13.8438C221.293 14.5469 221.641 15.5781 221.641 16.9375V25H219.599V17.3359C219.599 15.4766 218.818 14.5469 217.254 14.5469C216.733 14.5469 216.248 14.6953 215.799 14.9922C215.35 15.2891 214.988 15.6953 214.713 16.2109C214.438 16.7109 214.3 17.2656 214.3 17.875V25H212.259V13.0234H213.735L214.018 14.7813C214.944 13.4531 216.182 12.7891 217.732 12.7891Z'
        fill='#444444'
      />
      <path
        d='M227.416 13.0234H230V14.7813H227.416V21.9297C227.416 22.4922 227.517 22.8984 227.72 23.1484C227.922 23.3984 228.234 23.5234 228.654 23.5234C229.03 23.5234 229.479 23.4062 230 23.1719V24.8125C229.479 25.0938 228.806 25.2344 227.98 25.2344C227.126 25.2344 226.475 24.9609 226.026 24.4141C225.591 23.8672 225.374 23 225.374 21.8125V14.7813H224.158V13.0234H225.439L226.134 9.20313H227.416V13.0234Z'
        fill='#444444'
      />
      <path
        d='M22.9196 27.2716C31.4827 22.5136 35.6464 13.1412 32.2094 6.3733C28.7723 -0.394546 19.0504 -2.03524 10.4873 2.72277C1.92414 7.48076 -2.21995 16.8327 1.19745 23.6211C4.61486 30.4094 14.3761 32.0296 22.9196 27.2716ZM9.95702 11.8491C14.8474 9.5316 20.4645 10.0238 22.5071 12.936C24.5497 15.8483 22.2518 20.1141 17.3614 22.4316C12.4709 24.749 6.85384 24.2568 4.81126 21.3446C4.73269 21.2216 4.65414 21.078 4.57557 20.955C4.35953 20.4012 4.18277 19.827 4.08457 19.2322C3.92745 16.6482 6.14679 13.6744 9.95702 11.8491ZM28.576 8.38314C31.2078 13.5718 28.026 20.7294 21.4662 24.3594C17.6952 26.4513 13.6297 26.9229 10.3498 25.9795C12.962 25.959 15.8098 25.3438 18.4809 24.0722C24.8639 21.037 27.8885 15.4792 25.2175 11.6645C22.5464 7.84993 15.201 7.19368 8.79825 10.2289C7.44303 10.8647 6.245 11.6235 5.2237 12.4644C6.55924 9.77774 8.8964 7.31671 11.9603 5.61448C18.5005 1.96394 25.9441 3.21497 28.576 8.38314Z'
        fill='#F4B61E'
      />
    </svg>
  );
};