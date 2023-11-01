import { useState } from 'react';
import LoginImg from '../../assets/login.png'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Button, CustomImg, CustomInput, CustomLabel, CustomLink, FormDiv, Formulario, Frase, LoginContainer } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function Login() {
    const[user_email, setUserEmail] = useState("");
    const[user_password, setUserPassword] = useState("");

    const navigate = useNavigate();
    const goToHome = () =>{
        navigate('/graphicWeek')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            user_email,
            user_password
        };
        console.log(data);
        const response = await api.post('/user/login', data);

        console.log(response.data);

        if (response.data.success) {
            alert('Login concluído');
            // redireciona para home
            goToHome();

        } else {
            alert('Não foi possível entrar');
        }
    }        

    return (
        <>
        <HeaderTwo />
        <LoginContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv>
                <Formulario onSubmit={handleSubmit}>
                    <CustomLabel>E-mail da Instituição</CustomLabel>
                        <CustomInput
                            type="text"
                            id="usuario"
                            placeholder="0632454567@senacrs.edu.br"
                            value={ user_email }
                            onChange = {(e) => setUserEmail(e.target.value)}
                        />
                        <CustomLabel>Senha</CustomLabel>
                        <CustomInput
                            type="password"
                            id="senha"
                            placeholder="Enter your password"
                            value={ user_password } 
                            onChange = {(e) => setUserPassword(e.target.value)}  
                        />
                        <Frase>
                            Você é novo por aqui? <Link to='/register'><CustomLink>Cadastre-se já.</CustomLink></Link>
                        </Frase>
                        <Button type='submit'>Entrar</Button> 
                </Formulario>
            </FormDiv>
        </LoginContainer>
        </>
    );
};

export default Login;
