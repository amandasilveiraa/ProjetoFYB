import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import downloadIcon from '../../assets/downloadImg.svg';

const columns = [
  {
      field: 'id',
      headerName: 'Nome',
      width: 180,
      editable: true,
  },
  {
    field: 'imagem',
    headerName: '',
    width: 180,
    renderCell: (params) => (
      <img src={downloadIcon} alt="Ícone de download" />
    ),
  },
];

const rows = [
  { id: 'Histórico_2023-07-13' },
  { id: 'Histórico_2023-02-13' },
  { id: 'Histórico_2023-05-13' },
  { id: 'Histórico_2023-09-10' },

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
          pageSizeOptions={[5, 10]}// Quantidade de rows que aparecem
      />
    </Box>
    </>
  );
};

export default Table;