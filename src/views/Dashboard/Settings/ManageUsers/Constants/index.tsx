import React from 'react';
import { useTable, CellProps, useRowSelect, Column } from 'react-table';
// import DeleteIconSVG from '../../../../../assets/icons/delete-icon.svg';
// import EditIconSVG from '../../../../../assets/icons/edit-icon.svg';
// import Cloud from '../../../../../assets/img/Cloud.png';
import { useGetAllUsers } from '../../../../../services/hooks';
import { WebhooksSkeleton } from '../../WebHooks';
import { formatTimeArray } from '../../../../../utils';

interface User {
  userDetails: {
    id: string;
    username: string;
    email: string;
    clientId: string;
    mobileNumber: string;
    firstName: string;
    lastName: string;
    verified: boolean;
    admin: boolean;
    superAdmin: boolean;
    deleted: boolean;
    created: any;
    updated: any;
  };
  delIcon: string;
}
interface UserDetailsColumn {
  Header: string;
  accessor: 'userDetails';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

interface UsernameColumn {
  Header: string;
  accessor: 'username';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

interface PhoneColumn {
  Header: string;
  accessor: 'phone';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

interface RoleColumn {
  Header: string;
  accessor: 'role';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

interface DateColumn {
  Header: string;
  accessor: 'date';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}
interface StatusColumn {
  Header: string;
  accessor: 'status';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

interface DeleteIconColumn {
  Header: string;
  accessor: 'delIcon';
  Cell: ({ row }: CellProps<User>) => JSX.Element;
}

// interface EditIconColumn {
//   Header: string;
//   accessor: 'editIcon';
//   Cell: ({ row }: CellProps<User>) => JSX.Element;
// }

interface UserTableProps {
  columns: (
    | UserDetailsColumn
    | PhoneColumn
    | RoleColumn
    | DateColumn
    | StatusColumn
    | DeleteIconColumn
    | UsernameColumn
  )[];
  // | EditIconColumn
  data: User[];
}

const UserTable: React.FC<UserTableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<User>(
    {
      columns: columns as Column<User>[],
      data
    },
    useRowSelect
  );

  return (
    <table {...getTableProps()} className='border-collapse w-full'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className='text-[11px] text-[#6F7482] font-medium'
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className='p-3 text-left border-y'>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className='border-b p-2'>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const TableComponent = () => {
  const columns: (
    | UserDetailsColumn
    | PhoneColumn
    | RoleColumn
    | DateColumn
    | StatusColumn
    | DeleteIconColumn
    | UsernameColumn
  )[] =
    // | EditIconColumn
    [
      {
        Header: 'USER DETAILS',
        accessor: 'userDetails',
        Cell: ({ row }: CellProps<User>) => (
          <div className='flex items-center'>
            <div>
              <p className='font-semibold text-[#444] text-[13px]'>
                {row.original.userDetails.firstName + ' ' + row.original.userDetails.lastName}
              </p>
              <p className='font-normal text-[#444] text-[10px]'>
                {row.original.userDetails.email}
              </p>
            </div>
          </div>
        )
      },
      {
        Header: 'CONTACT NUMBER',
        accessor: 'phone',
        Cell: ({ row }: CellProps<User>) => (
          <p className='font-normal text-[#444] text-[12px]'>
            {row.original.userDetails.mobileNumber}
          </p>
        )
      },
      {
        Header: 'USERNAME',
        accessor: 'username',
        Cell: ({ row }: CellProps<User>) => (
          <p className='font-normal text-[#444] text-[12px]'>{row.original.userDetails.username}</p>
        )
      },
      {
        Header: 'Created Date',
        accessor: 'date',
        Cell: ({ row }: CellProps<User>) => (
          <p className='font-normal text-[#444] text-[12px]'>
            {formatTimeArray(row.original.userDetails.created)}
          </p>
        )
      },
      // {
      //   Header: 'STATUS',
      //   accessor: 'status',
      //   Cell: ({ row }: CellProps<User>) => (
      //     <p className='font-normal text-[#444] text-[12px]'>{row.original.status}</p>
      //   )
      // },
      {
        Header: '',
        accessor: 'delIcon',
        Cell: ({ row }: CellProps<User>) => (
          <img
            src={row.original.delIcon}
            alt='Delete'
            // onClick={() => handleDelete(row.original.id)}
            style={{ cursor: 'pointer' }}
          />
        )
      }
      // {
      //   Header: '',
      //   accessor: 'editIcon',
      //   Cell: ({ row }: CellProps<User>) => (
      //     <img
      //       src={row.original.editIcon}
      //       alt='Edit'
      //       // onClick={() => handleEdit(row.original.id)}
      //       style={{ cursor: 'pointer' }}
      //     />
      //   )
      // }
    ];

  const { data: usersData, isLoading } = useGetAllUsers();

  if (isLoading) {
    return <WebhooksSkeleton />;
  }

  // console.log({ usersData });

  // const data = [
  //   {
  //     id: 1,
  //     userDetails: {
  //       name: 'Irikefe Anthony',
  //       email: 'IrikefeAnthony@email.com',
  //       image: Cloud
  //     },
  //     phone: '+2348012345678',
  //     role: 'Accountant',
  //     date: '09 Sept, 2023 11:13',
  //     status: 'active',
  //     delIcon: DeleteIconSVG,
  //     editIcon: EditIconSVG
  //   },
  //   {
  //     id: 2,
  //     userDetails: {
  //       name: 'Another User',
  //       email: 'another.user@email.com',
  //       image: Cloud // Replace with the appropriate image
  //     },
  //     phone: '+2348012345678',
  //     role: 'Manager',
  //     date: '10 Sept, 2023 14:20',
  //     status: 'inactive',
  //     delIcon: DeleteIconSVG,
  //     editIcon: EditIconSVG
  //   },
  //   {
  //     id: 3,
  //     userDetails: {
  //       name: 'John Doe',
  //       email: 'john.doe@email.com',
  //       image: Cloud // Replace with the appropriate image
  //     },
  //     phone: '+2348012345678',
  //     role: 'Developer',
  //     date: '11 Sept, 2023 09:45',
  //     status: 'active',
  //     delIcon: DeleteIconSVG,
  //     editIcon: EditIconSVG
  //   },
  //   {
  //     id: 4,
  //     userDetails: {
  //       name: 'Jane Doe',
  //       email: 'jane.doe@email.com',
  //       image: Cloud // Replace with the appropriate image
  //     },
  //     phone: '+2348012345678',
  //     role: 'Designer',
  //     date: '12 Sept, 2023 18:30',
  //     status: 'inactive',
  //     delIcon: DeleteIconSVG,
  //     editIcon: EditIconSVG
  //   }
  // ];

  // @ts-ignore

  return <UserTable columns={columns} data={usersData?.data} />;
};

export default TableComponent;
