import React, { useState } from 'react';
import Modal from './Modal';
import PinModal from './PinModal';

interface InfoBoxProps {
  title: string;
  text: string;
  buttonText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, text, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='mt-8'>
        <h3 className='font-medium text-[10px] text-[#6F7482] mb-2'>{title}</h3>
        <div className='flex items-center bg-[#F4F4F5] w-full h-[48px] px-4 mb-2 rounded-[5px]'>
          <p className='flex-1'>{text}</p>
          <button onClick={openModal} className=' text-[#F04949] text-12px font-semibold'>
            {buttonText}
          </button>
        </div>
      </div>
      {isModalOpen &&
        (title.toLowerCase().includes('password') ? (
          <Modal onClose={closeModal} />
        ) : (
          <PinModal onClose={closeModal} />
        ))}
      {/* {isModalOpen && <Modal onClose={closeModal} />} */}
    </div>
  );
};

export default InfoBox;
