import { useState } from 'react';
import LoginImg from '../../assets/login.png'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Button, CustomImg, CustomInput, CustomLink, FormDiv, Formulario, Frase, Label, LoginContainer } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const goToGraphicWeek = () => {
        navigate('/graphicWeek')
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        

        const credentials = { email, password }
        
        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            alert(response.data.message)
            goToGraphicWeek()

        })
        .catch(error => console.log(error))

    }

    return (
        <>
        <HeaderTwo />
        <LoginContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv>
                <Formulario onSubmit={hadleSubmit}>
                    <Label>E-mail da Instituição</Label>
                        <CustomInput
                            type="email"
                            value= {email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label>Senha</Label>
                        <CustomInput
                            type="password"
                            value= {password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    <Frase>
                        Você é novo por aqui? <Link to='/register'><CustomLink>Cadastre-se já.</CustomLink></Link>
                    </Frase>
                    <Button>Entrar</Button>
                </Formulario>
            </FormDiv>
        </LoginContainer>
        </>
    );
};

export default Login;
