import 'chartkick/chart.js'
import { ColumnChart } from 'react-chartkick';
import React, { useEffect, useState } from 'react';
import {api} from '../../services/api'

const ChartMonth = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        const getPatient = async () => {

            try{
                const response = await api.get('/patient/patient');

                console.log(response.data.data);
                setPacientes(response.data.data);
                

            }catch (error) {
                    console.error('Erro ao obter dados:', error);
            }
        };

        getPatient();
        
    }, []);

    const contarPacientesPorMes = () => {
        console.log(pacientes[0].Janeiro);
        const contagem = {
            Janeiro: pacientes[0].Janeiro,
            Fevereiro: 0,
            Março: 0,
            Abril: 0,
            Maio: 0,
            Junho: 0,
            Julho: 0,
            Agosto: 0,
            Setembro: 0,
            Outubro: 0,
            Novembro: pacientes[0].Nov,
            Dezembro: 0,
        };
        
        return contagem;
    };
        
    const dadosGrafico = contarPacientesPorMes();
    

    return (
        <ColumnChart
            id="chart-week"
            type="Bar"
            data={Object.entries(dadosGrafico)}
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