// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM users WHERE `user_email` = ?";
    
    // Recuperar credenciais informadas
    const params = Array(
        request.body.user_email
    );
        console.log(request.body);
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            console.log(results)
            if (results.length > 0) {                
                bcrypt.compare(request.body.user_password, results[0].user_password, (err, result) => {
                    if (err) {                        
                        return response.status(401).send({
                          msg: 'Email ou senha está incorreto!'
                        });
                    } else if(result) {
                        const id = results[0].id_user;
                        const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 300 });
                        results[0]['token'] = token; 
                        
                        response
                            .status(200)
                            .json({
                                success: true,
                                message: `Sucesso! Usuário conectado.`,
                                data: results[0]
                            });
                    }
                })
                
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
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

module.exports = {
    login
}