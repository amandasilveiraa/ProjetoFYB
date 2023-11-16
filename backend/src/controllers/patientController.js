/**
 INFORMAÇÕES DO CONTROLLER

 1. Executa funções assíncronas que retornam uma Promise que é resolvida com um valor de retorno;
 2. Parâmetro request (requisição): é o pedido que um cliente (usuário) realiza a nosso servidor;
 3. Parâmetro response (resposta): é a resposta que o servidor envia ao cliente (usuário);
 4. Com a variável connection que possui as configurações do banco de dados, utilizamos a função query para realizar os comandos de gerenciamento do banco de dados;
 5. Validamos o retorno da requisição, caso tenha algum erro
 6. Retornamos as informações em formato JSON com chaves e valores para o client
 7. Try/Catch: utilizado para tratar erros que podem acontecer dentro do sistema

*/

const connection = require('../config/db');
// Função que retorna todos pacientes cadastrados no banco de dados
async function listPatient(request, response) {
    connection.query('SELECT * FROM users', (resultserr, ) => { 
        try {  
            if (results) {  
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
async function addPatiente(request, response) {

    const query = 'INSERT INTO users(nome_paciente, numero_contato, sexo, nacionalidade, sindrome, data_nascimento, horario_entrada, data_entrada, data_saida) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);';

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
    listPatient,
    addPatiente,
    updatePatient,
    deletePatient
}