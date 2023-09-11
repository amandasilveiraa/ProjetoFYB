import { useState } from 'react';
import LoginImg from '../../assets/login.png'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Button, CustomImg, CustomInput, CustomLabel, CustomLink, FormDiv, Formulario, Frase, LoginContainer } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate()
  
    const goToGraphicWeek = () => {
      navigate('/graphicWeek')
    }
  
    const hadleSubmit = (e) => {
      e.preventDefault()
  
      const credentials = { email, password } 
      
      axios
      .post('http://localhost:8000/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        alert(response.data.message)
        goToGraphicWeek()
      })
      .catch(error => console.log(error))
      
    };

    return (
        <>
        <HeaderTwo />
        <LoginContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv>
                <Formulario onSubmit={hadleSubmit}>
                    <CustomLabel>E-mail da Instituição</CustomLabel>
                        <CustomInput
                            type="text"
                            id="usuario"
                            placeholder="0632454567@senacrs.edu.br"
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <CustomLabel>Senha</CustomLabel>
                        <CustomInput
                            type="password"
                            id="senha"
                            placeholder="Enter your password"
                            value={password} 
                            onChange = {(e) => setPassword(e.target.value)}  
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
