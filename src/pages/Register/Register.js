// import { Link } from 'react-router-dom'; // Certifique-se de que as rotas estejam configuradas corretamente
import LoginImg from '../../assets/login.png'
import { Arrow, ArrowCustom, ButtonRegister, CustomImg, CustomInput, CustomLink, DivArrow, FormDiv, Formulario, Label, RegisterContainer } from './styled';
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
                        <Link to='/login'><ArrowCustom src={ArrowImg} alt="Arrow"></ArrowCustom></Link>
                        </Arrow>
                        <ButtonRegister><CustomLink to='/graphicWeek'>Criar conta</CustomLink></ButtonRegister>
                    </DivArrow>
                </Formulario>
            </FormDiv>
        </RegisterContainer>
        </>
    );
};

export default Register;
