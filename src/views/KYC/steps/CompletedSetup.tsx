import { WhiteBGContainer } from '../../Dashboard/Overview/components/ListContainer';

export const CompletedSetup = () => {
  return (
    <WhiteBGContainer className=' shadow-[0px 5px 16px 0px rgba(8, 15, 52, 0.06)] w-full max-w-[700px] h-[651px] gap-3 flex flex-col items-center justify-center'>
      <CompleteSetupIcon />
      <h2 className='text-6 text-[#444] text-center font-bold'>KYC Submitted</h2>
      <p className=' text-center font-normal text-base text-[#6F7482] '>
        Thank you for submitting your Know Your Customer (KYC) details. Rest assured, one of our
        dedicated KYC specialists will carefully evaluate your provided documents. We appreciate
        your patience during this process.
      </p>
    </WhiteBGContainer>
  );
};

const CompleteSetupIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='158'
      height='144'
      viewBox='0 0 158 144'
      fill='none'
    >
      <rect
        opacity='0.5'
        x='14.0488'
        y='0.351562'
        width='51.5427'
        height='51.5427'
        rx='10'
        fill='#9E96FF'
      />
      <rect
        opacity='0.5'
        x='128'
        y='33.2227'
        width='29.3594'
        height='29.3594'
        rx='10'
        fill='#9E96FF'
      />
      <rect opacity='0.5' y='75.2227' width='31.5329' height='31.5329' rx='8' fill='#DEDBFF' />
      <rect
        opacity='0.5'
        x='114.287'
        y='107.172'
        width='36.5935'
        height='36.5935'
        rx='8'
        fill='#DEDBFF'
      />
      <circle cx='83.4766' cy='78.7227' r='60' fill='#4A3AFF' />
      <g filter='url(#filter0_d_214_2638)'>
        <path
          d='M60.7598 81.9669L73.7403 94.9474L106.192 62.4961'
          stroke='white'
          strokeWidth='8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_214_2638'
          x='26.7598'
          y='32.4961'
          width='113.432'
          height='100.451'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='15' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_214_2638' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_214_2638'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
