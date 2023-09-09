import React, { useState } from 'react';
import { useTable, useFilters } from 'react-table';

const RegisterTable = ({ dados }) => {
  const [filtro, setFiltro] = useState('');

  const colunas = React.useMemo(
    () => [
      {
        Header: 'Paciente',
        accessor: 'paciente'
      },
      {
        Header: 'Contato',
        accessor: 'contato'
      },
      {
        Header: 'Nascimento',
        accessor: 'nascimento'
      },
      {
        Header: 'Síndrome',
        accessor: 'sindrome'
      },
      {
        Header: 'Entrada',
        accessor: 'entrada'
      },
      {
        Header: 'Saída',
        accessor: 'saida'
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setFilter } = useTable(
    {
      columns: colunas,
      data: dados
    },
    useFilters
  );

  const handleFiltroChange = (e) => {
    const valor = e.target.value || '';
    setFiltro(valor);
    setFilter('paciente', valor);
  };

  return (
    <div>
      <input
        value={filtro}
        onChange={handleFiltroChange}
        placeholder="Filtrar por Paciente"
      />
      <table {...getTableProps()} style={{ borderSpacing: '0', border: '1px solid black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterTable;