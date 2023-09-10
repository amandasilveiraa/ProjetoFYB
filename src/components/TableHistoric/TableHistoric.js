import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'Nome',
        width: 180,
        editable: true,
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