import React, { useState } from 'react';
import { Popup, Button } from '../../../../components';
import BorderDivider from '../../Settings/BorderDIvider';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value.slice(0, 250);

    setText(inputText);
  };

  return (
    <Popup title='Update Business Description' onClose={onClose}>
      <BorderDivider />
      <div className='mt-8 '>
        <p className='text-[10px] text-[#6F7482] font-medium mb-1'>Business Description</p>
        <div className='mb-8'>
          <textarea
            value={text}
            onChange={handleChange}
            maxLength={250}
            className='h-[165px] bg-[#F4F4F5] rounded-[4px] p-5 w-full'
            style={{ resize: 'none' }}
            rows={5}
            cols={30}
            placeholder='Type your text here...'
          />
          <p className='text-[10px] text-[#6F7482] font-medium mb-1'>
            Characters remaining: {250 - text.length}/{250}
          </p>
        </div>
        <BorderDivider />
        <Button
          className='bg-[#6231F4]  mt-8 w-[180px] h-[50px] rounded-[10px] text-[11px] font-extrabold'
          name='Save'
        />
      </div>
    </Popup>
  );
};

export default Modal;
