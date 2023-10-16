import 'chartkick/chart.js'
import { ColumnChart } from 'react-chartkick';

const ChartWeek = () => {
    const data = [
      {
        name: 'Síndrome Gripal',
        data: { 'Domingo': 10, 'Segunda': 20, 'Terça': 30, 'Quarta': 20, 'Quinta': 20, 'Sexta': 20, 'Sábado': 20 },
      },

      {
        name: 'Síndrome Respiratória Aguda Grave',
        data: { 'Domingo': 5, 'Segunda': 10, 'Terça': 20, 'Quarta': 17, 'Quinta': 12, 'Sexta': 86, 'Sábado': 100 },
      },

  ];

  return (
    <ColumnChart
      id="chart-week"
      type="Bar"
      data={data}
      // xtitle="Categorias"
      // ytitle={['Valores A', 'Valores B', 'Valores C']}
      stacked={true}
      suffix="%"
      empty="No data"
      colors={["#0BB28A", "#017257"]}
      // refresh={60}
      width="70vw" height="60vh"
      min={0} max={100}

    />
    );
    };

export default ChartWeek;

