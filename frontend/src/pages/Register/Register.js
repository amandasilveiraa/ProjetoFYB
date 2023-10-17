// import { Link } from 'react-router-dom'; // Certifique-se de que as rotas estejam configuradas corretamente
import LoginImg from '../../assets/login.png'
import { Arrow, ArrowCustom, ButtonRegister, CustomImg, CustomInput, CustomLink, DivArrow, FormDiv, Formulario, Label, RegisterContainer } from './styled';
import ArrowImg from '../../assets/arrowImg.svg'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';

function Register() {
    const[user_name, setUserEmail] = useState("");
    const[user_password, setUserPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            user_name,
            user_password
        };

        const response = api.post('/user/create', data);

        console.log(response.data);

        if (response.data.success) {
            alert('usuario cadastrado');
            // redireciona para login
        } else {
            alert('Não foi possível cadastrar');
        }
    }

    return (
        <>
        <HeaderTwo/>
        <RegisterContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv onSubmit={ handleSubmit }>
                <Formulario>
                    <Label>Nome da Instituição</Label>
                    <CustomInput type="text" 
                     value = { user_name } 
                     onChange = { (e) => setUserEmail(e.target.value) }
                    />
                    <Label>Senha</Label>
                    <CustomInput type="password" />
                    <Label>Confirmar senha</Label>
                    <CustomInput type="password" 
                    value = { user_password } 
                    onChange = { (e) => setUserPassword(e.target.value) }
                    />
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
