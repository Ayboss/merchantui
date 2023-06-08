import React from 'react';
import Pagination, { PaginationProps } from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './styles.css';

export const Paginator: React.FC<PaginationProps> = () => {
  return (
    <div className='w-full flex justify-center items-center mt-[20px]'>
      <Pagination
        showTotal={(total, range) => `${range[0]} to ${range[1]} of ${total} items`}
        total={455}
      />
    </div>
  );
};
