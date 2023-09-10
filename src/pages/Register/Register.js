// import { Link } from 'react-router-dom'; // Certifique-se de que as rotas estejam configuradas corretamente
import LoginImg from '../../assets/login.png'
import { Arrow, ArrowCustom, ButtonRegister, CustomImg, CustomInput, DivArrow, FormDiv, Formulario, Label, RegisterContainer } from './styled';
import ArrowImg from '../../assets/arrowImg.svg'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Link } from 'react-router-dom';

function Register() {

    return (
        <>
        <HeaderTwo/>
        <RegisterContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv>
                <Formulario>
                    <Label>Nome da Instituição</Label>
                    <CustomInput type="text" />
                    <Label>Senha</Label>
                    <CustomInput type="password" />
                    <Label>Confirmar senha</Label>
                    <CustomInput type="password" />
                    <DivArrow>
                        <Arrow>
                            <ArrowCustom src={ArrowImg} alt="Arrow" />
                        </Arrow>
                        <ButtonRegister><Link to='/register'>Criar conta</Link></ButtonRegister>
                    </DivArrow>
                </Formulario>
            </FormDiv>
        </RegisterContainer>
        </>
    );
};

export default Register;
