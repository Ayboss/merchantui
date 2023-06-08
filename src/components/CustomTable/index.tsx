import React from 'react';

import './styles.css';

export type HeadersPropsType = {
  title: string;
  responseMatch: string;
};

export interface TablePropsType<T> {
  data: Array<T>;
  headers: Array<HeadersPropsType>;
  emptyLayout?: React.ReactNode;
  tableWrapperClassName?: string;
}

export const CustomTable = <T,>(props: TablePropsType<T>) => {
  const { data, headers, emptyLayout, tableWrapperClassName } = props;

  return (
    <div className={`${tableWrapperClassName ?? ''} table-wrapper`}>
      <table className='w-full border-collapse border-[0]'>
        <thead>
          <tr className='bg-[unset]'>
            {headers.map(({ responseMatch, title }) => (
              <th
                className='text-left font-medium pb-[17px] text-[14px] text-[#11071A]'
                key={responseMatch}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='w-full bg-[#FFFFFF]'>
          {data.length
            ? data.map((item: T, index) => (
                <tr key={index} className='tableLastOfType text-[14px] font-normal table-body-tr'>
                  {headers
                    .map((item: HeadersPropsType) => item.responseMatch)
                    .map((value: string) => (
                      <td className='text-[#393C47] whitespace-nowrap' key={value}>
                        {(item as any)[value]}
                      </td>
                    ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {!data.length && emptyLayout}
    </div>
  );
};
