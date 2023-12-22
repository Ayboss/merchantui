import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toast } from 'react-hot-toast';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ToastProps {
  text: string;
  type: 'success' | 'error';
  toastId: Toast['id'];
  className?: string;
}

export const CustomToastBody = (props: ToastProps) => {
  const { text, toastId, type, className } = props;

  const getToastBg = () => {
    switch (type) {
      case 'success':
        return 'bg-[#ECFDF5]';
      case 'error':
        return 'bg-[#FFE8E8]';
    }
  };

  const getToastIconStrokeColor = () => {
    switch (type) {
      case 'success':
        return '#38CA89';
      case 'error':
        return '#F04949';
    }
  };

  const background = getToastBg();
  const strokeColor = getToastIconStrokeColor();

  const handleToastRemove = useCallback(() => toast.remove(toastId), [toastId]);

  return (
    <div
      className={`bg-[10px] gap-5 rounded-[10px] flex items-center w-[600px] py-[10px] px-[20px] ${background} ${className} `}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M21.9116 11.0799V11.9999C21.9103 14.1563 21.2149 16.2545 19.9289 17.9817C18.6429 19.7088 16.8353 20.9723 14.7757 21.5838C12.7161 22.1952 10.5148 22.1218 8.50016 21.3744C6.48551 20.6271 4.76542 19.246 3.59644 17.4369C2.42747 15.6279 1.87223 13.4879 2.01355 11.3362C2.15486 9.18443 2.98516 7.13619 4.3806 5.49694C5.77604 3.85768 7.66186 2.71525 9.75681 2.24001C11.8518 1.76477 14.0436 1.9822 16.0054 2.85986'
          stroke={strokeColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21.9116 4L11.9518 14.01L8.96382 11.01'
          stroke={strokeColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <p className='text-[#333] text-base font-medium'>{text}</p>
      <FontAwesomeIcon
        onClick={handleToastRemove}
        className=' font-[25px] text-[rgba(144, 148, 158, 0.5)] cursor-pointer ml-auto'
        icon={faXmark}
      />
    </div>
  );
};
