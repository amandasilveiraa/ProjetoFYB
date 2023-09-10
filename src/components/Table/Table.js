import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'firstName',
    headerName: 'Nome',
    width: 120,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Sobrenome',
    width: 120,
    editable: true,
  },
  {
    field: 'contact',
    headerName: 'Contato',
    width: 120,
    editable: true,
  },
  {
    field: 'birth',
    headerName: 'Nascimento',
    width: 120,
    editable: true,
  },
  {
    field: 'syndrome',
    headerName: 'Síndrome',
    width: 120,
    editable: true,
  },
  {
    field: 'arrived',
    headerName: 'Entrada',
    width: 120,
    editable: true,
  },
  {
    field: 'exit',
    headerName: 'Saída',
    width: 120,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Table() {
  return (
    <>
    <Box sx={{ height: '60vh', width: '75vw' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} // Quantidade de rows que aparecem
      />
    </Box>
    </>
  );
};

export default Table;