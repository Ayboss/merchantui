import React, { PropsWithChildren, useRef } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOnClickOutside } from 'usehooks-ts';

import './styles.css';

export type PopupPropsType = {
  onClose: () => void;
  title?: string;
};

export const Popup: React.FC<PropsWithChildren<PopupPropsType>> = ({
  children,
  onClose,
  title
}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, onClose);

  return (
    <div className='fixed flex items-center justify-center h-full w-full z-[100] inset-0 popup fade-in'>
      <div className='flex max-w-[535px] w-full  justify-center'>
        <div className='relative p-[32px]  w-full rounded-[10px] bg-[#fff]   h-full  ' ref={ref}>
          <div className='w-full flex items-center justify-between'>
            <p className='text-[#444] font-semibold text-[21px]'>{title}</p>
            <FontAwesomeIcon
              onClick={onClose}
              className='absolute font-[25px] text-[rgba(144, 148, 158, 0.5)] cursor-pointer top-[32px] right-[32px]'
              icon={faXmark}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
