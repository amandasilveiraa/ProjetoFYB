import 'chartkick/chart.js'
import { ColumnChart } from 'react-chartkick';
import React, { useEffect } from 'react';
import {api} from '../../services/api'

const ChartMonth = () => {
    const data = [
        {
        name: 'Síndrome Gripal',
        data: { 'Janeiro': 20, 'Fevereiro': 20, 'Março': 30, 'Abril': 20, 'Maio': 20, 'Junho': 20, 'Julho': 20, 'Agosto': 20, 'Setembro': 20, 'Outubro': 20, 'Novembro': 20, 'Dezembro': 20 },
        },

        {
        name: 'Síndrome Respiratória Aguda Grave',
        data: { 'Janeiro': 23, 'Fevereiro': 55, 'Março': 68, 'Abril': 123, 'Maio': 20, 'Junho': 60, 'Julho': 50, 'Agosto': 120, 'Setembro': 250, 'Outubro': 23, 'Novembro': 67, 'Dezembro': 49 },
        },

        ];

    useEffect(() => {
      const getPatient = async () => {


        const response = await api.get('/patient/patient');

        console.log(response.data); 

        console.log(Object.keys(response.data.data).length)


    }
    getPatient();
})
  
    //       if (data.success) {
    //         const newData = data.data.map((item) => ({
    //           data: item.data_entrada,
    //         }));
  
    //         data(newData);
    //       } else {
    //         console.error('Erro ao buscar dados do servidor:', data.message);
    //       }
    //     } catch (error) {
    //       console.error('Erro ao buscar dados do servidor:', error.message);
    //     }
    //   };
  
    //   getPatient();
    

    return (
    <ColumnChart
        id="chart-week"
        type="Bar"
        data={data}
        // xtitle="Categorias"
        // ytitle="Valores"
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

export default ChartMonth;

