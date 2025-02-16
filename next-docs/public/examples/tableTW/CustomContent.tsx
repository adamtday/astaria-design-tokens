import { BodyTR } from '@heathmont/moon-table-tw';
import { TD } from '@heathmont/moon-table-tw';
import { Table } from '@heathmont/moon-table-tw';
import React from 'react';

const Example = () => {
  const columnsInitial = [
    {
      id: 'expander',
      width: 50,
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
        <span {...getToggleAllRowsExpandedProps()}>
          Expand
          {isAllRowsExpanded ? '👇' : '👉'}
        </span>
      ),
      Cell: ({ row }: any) => <span>{row.isExpanded ? '👇' : '👉'}</span>,
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      defaultRowBackgroundColor="gohan.40"
      evenRowBackgroundColor="gohan.80"
      getOnRowClickHandler={(row: any) => () => {
        (row as any).depth === 0
          ? () => (row as any).toggleRowExpanded()
          : undefined;
      }}
      // @ts-ignore
      renderRowSubComponent={({ row, backgroundColor }) => {
        return (
          <BodyTR
            {...row.getRowProps()}
            key={row.getRowProps().key + '1'}
            hasParent={true}
            isLastRow={true}
            backgroundColor={backgroundColor}
            isExpanded
          >
            <TD {...row.getRowProps()} isExpanded>
              <p className='text-center'>Custom content</p>
            </TD>
          </BodyTR>
        );
      }}
    />
  );
};

export default Example;
