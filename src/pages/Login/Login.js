// import { Link } from 'react-router-dom'; // Certifique-se de que as rotas estejam configuradas corretamente
import LoginImg from '../../assets/login.png'
import { Button, CustomImg, FormDiv, Formulario, Frase, ImagemDiv, Label, Link, LoginContainer } from './styled';

function Login() {
    return (
        <LoginContainer>
            <ImagemDiv>
                <CustomImg src={LoginImg} alt="Médicos" />
            </ImagemDiv>
            <FormDiv>
                <Formulario>
                    <Label>Nome da Instituição</Label>
                    <input type="text" />
                    <Label>Senha</Label>
                    <input type="password" />
                    <Button>Entrar</Button>
                </Formulario>
                <Frase>
                    Você é novo por aqui? <Link to="#">Cadastre-se já.</Link>
                </Frase>
            </FormDiv>
        </LoginContainer>
    );
};

export default Login;
