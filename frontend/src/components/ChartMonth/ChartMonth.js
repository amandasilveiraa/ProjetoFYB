import 'chartkick/chart.js'
import { ColumnChart } from 'react-chartkick';
import React, { useEffect, useState } from 'react';
import {api} from '../../services/api'

const ChartMonth = () => {
    const [data, setData] = useState("");
 
    useEffect(() => {
        const getPatient = async () => {
            try{
                const response = await api.get('/patient/patient');

                if (response.data.success) {
                    console.log("oiii", response.data)
                    const months = {
                        Janeiro: response.data.data[0].Janeiro,
                        Fevereiro: response.data.data[0].Fevereiro,
                        Março: response.data.data[0].Marco,
                        Abril: response.data.data[0].Abril,
                        Maio: response.data.data[0].Maio,
                        Junho: response.data.data[0].Junho,
                        Julho: response.data.data[0].Julho,
                        Agosto: response.data.data[0].Agosto,
                        Setembro: response.data.data[0].Setembro,
                        Outubro: response.data.data[0].Outubro,
                        Novembro: response.data.data[0].Novembro,
                        Dezembro: response.data.data[0].Dezembro
                    };
                    setData(months)
                }
            }catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };
        getPatient();        
    }, []);

    return (
        <ColumnChart
            id="chart-week"
            type="Bar"
            // data={data}
            data={Object.entries(data)}
            // xtitle="Categorias"
            // ytitle="Valores"
            stacked={true}
            suffix="%"
            empty="No data"
            colors={["#0BB28A", "#017257"]}
            // refresh={3}
            width="70vw" height="60vh"
            min={0} max={100}
        />
    );
};

export default ChartMonth;