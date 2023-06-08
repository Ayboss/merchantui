import { ReactNode } from 'react';

import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { ReactComponent as Spinner } from '../../assets/icons/spinner.svg';

import './styles.css';

interface LoaderProps {
  loading: boolean;
  size?: string;
  minHeight?: string;
  overlay?: boolean;
  shouldFit?: boolean;
  children?: ReactNode;

  error?: boolean;
  errorTitle?: string;
  errorSubTitle?: string;
  errorControlText?: string;
  errorControlShowIcon?: boolean;
  errorControlOnClick?: () => void;
}

export const LoaderControl = (props: LoaderProps) => {
  const {
    loading,
    children,
    minHeight,
    size,
    overlay,
    error,
    errorTitle,
    errorSubTitle,
    errorControlText,
    errorControlShowIcon,
    errorControlOnClick,
    shouldFit
  } = props;

  const showContent = (!loading && !error) || (loading && overlay);

  let containerHeight: string;

  if ((loading || error) && !overlay) {
    containerHeight = minHeight || '500px';
  } else {
    containerHeight = 'auto';
  }

  return (
    <div
      style={{ height: containerHeight, fontSize: size, width: shouldFit ? 'fit-content' : '100%' }}
      className='w-full relative'
    >
      {loading && (
        <div
          className={`w-full h-full flex flex-col justify-center items-center absolute ${
            overlay ? 'overlay' : ''
          }`}
        >
          <Spinner />
        </div>
      )}

      {!loading && error && (
        <div className='w-full h-full absolute flex flex-col items-center justify-center'>
          <div className='text-[16px] font-semi-bold text-[rgba(0, 0, 0, 0.8)] mb-[8px]'>
            {errorTitle}
          </div>

          <div className='max-w-[315px] text-[14px] leading-normal text-center text-[rgba(0, 0, 0, 0.4)] mb-[10px]'>
            {errorSubTitle}
          </div>

          {errorControlOnClick !== undefined && (
            <div className=''>
              <Button
                name={errorControlText || 'Refresh'}
                icon={errorControlShowIcon ? faArrowRotateRight : undefined}
                onClick={errorControlOnClick}
                className='m-0 w-[200px] h-[40px] rounded-[4px] text-[13px]'
              />
            </div>
          )}
        </div>
      )}

      {showContent && children}
    </div>
  );
};
