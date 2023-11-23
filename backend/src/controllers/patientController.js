const connection = require('../config/db');
// Função que retorna todos pacientes cadastrados no banco de dados
async function listMonth(request, response) {
    connection.query('select ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 1 THEN 1 END) AS Janeiro, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 2 THEN 1 END) AS Fevereiro, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 3 THEN 1 END) AS Marco, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 4 THEN 1 END) AS Abril, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 5 THEN 1 END) AS Maio, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 6 THEN 1 END) AS Junho, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 7 THEN 1 END) AS Julho, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 8 THEN 1 END) AS Agosto, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 9 THEN 1 END) AS Setembro, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 10 THEN 1 END) AS Outubro, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 11 THEN 1 END) AS Novembro, ' +
    'COUNT(CASE WHEN MONTH(data_entrada) = 12 THEN 1 END) AS Dezembro ' +
    'FROM dados_paciente', (err, results) => {
    // connection.query('SELECT * FROM dados_paciente', (err, results) => {
        try {  
            if (results) {
                console.log(results);
                response.status(200).json({
                    success: true,
                    message: 'Retorno de pacientes com sucesso!',
                    data: results
                });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os pacientes.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

async function listWeek(request, response) {
    connection.query('select ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 0 THEN 1 END) AS Segunda, ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 1 THEN 1 END) AS Terca, ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 2 THEN 1 END) AS Quarta, ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 3 THEN 1 END) AS Quinta, ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 4 THEN 1 END) AS Sexta, ' +
	'COUNT(CASE WHEN WEEKDAY(data_entrada) = 5 THEN 1 END) AS Sabado, ' +
    'COUNT(CASE WHEN WEEKDAY(data_entrada) = 6 THEN 1 END) AS Domingo ' +
    'FROM dados_paciente', (err, results) => {
        try {  
            if (results) {
                console.log(results);
                response.status(200).json({
                    success: true,
                    message: 'Retorno de pacientes com sucesso!',
                    data: results
                });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os pacientes.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

// Função que adiciona um novo paciente 
async function addPatient(request, response) {

    const query = 'INSERT INTO dados_paciente(nome_paciente, numero_contato, sexo, nacionalidade, sindrome, data_nascimento, horario_entrada, data_entrada, data_saida) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);';

    const params = Array(
        request.body.nome_paciente,
        request.body.numero_contato,
        request.body.sexo,
        request.body.nacionalidade,
        request.body.sindrome,
        request.body.data_nascimento,
        request.body.horario_entrada,
        request.body.data_entrada,
        request.body.data_saida
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Paciente cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar o paciente!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que atualiza o paciente no banco
async function updatePatient(request, response) {

    const query = "UPDATE dados_paciente SET `ds_nome_paciente` = ?, `ds_numero_contato` = ?, `fl_sexo` = ?, `ds_nacionalidade` = ?, `fl_sindrome` = ?, `dt_data_nascimento` = ?, `dt_horario_entrada` = ?, `dt_data_entrada` = ?, `dt_data_saida` = ? WHERE `patiente_id` = ?";

    const params = Array(
        request.body.ds_nome_paciente,
        request.body.ds_numero_contato,
        request.body.fl_sexo,
        request.body.ds_nacionalidade,
        request.body.fl_sindrome,
        request.body.dt_data_nascimento,
        request.body.dt_horario_entrada,
        request.body.dt_data_entrada,
        request.body.dt_data_saida,
        request.params.id
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Paciente atualizado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível atualizar o paciente!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove paciente no banco
async function deletePatient(request, response) {

    const query = "DELETE FROM dados_patiente WHERE `patiente_id` = ?";

    const params = Array(
        request.params.id
    );

    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Paciente deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar paciente!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}


module.exports = {
    listMonth,
    listWeek,
    addPatient,
    updatePatient,
    deletePatient
}