// import { Link } from 'react-router-dom'; // Certifique-se de que as rotas estejam configuradas corretamente
import LoginImg from '../../assets/login.png'
import { Button, CustomImg, CustomInput, FormDiv, Formulario, Frase, Label, Link, LoginContainer } from './styled';


function Login() {


    return (
        <LoginContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv>
                <Formulario>
                    <Label>Nome da Instituição</Label>
                    <CustomInput type="text" />
                    <Label>Senha</Label>
                    <CustomInput type="password" />
                    <Button>Entrar</Button>
                    <Frase>
                        Você é novo por aqui? <Link to="#">Cadastre-se já.</Link>
                    </Frase>
                </Formulario>
            </FormDiv>
        </LoginContainer>
    );
};

export default Login;
