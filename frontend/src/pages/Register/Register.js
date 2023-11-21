import LoginImg from '../../assets/login.png'
import { Arrow, ArrowCustom, ButtonRegister, CustomImg, CustomInput, DivArrow, FormDiv, Formulario, Label, RegisterContainer } from './styled';
import ArrowImg from '../../assets/arrowImg.svg'
import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';

function Register() {
    const[user_email, setUserEmail] = useState("");
    const[user_password, setUserPassword] = useState("");
    const[confirm_password, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login')
    }

    const handleRegister = async (e) => {
        e.preventDefault();


        if (user_password !== confirm_password) {
            alert('Senhas não são compatíveis');
        } else {

            const data = {
                user_email,
                user_password
            };
            
            console.log(data);
            
            const response = await api.post('user/create', data);
    
            console.log(response.data);
    
            if (response.data.success) {
                alert('Usuário cadastrado!');
                // redireciona para login
                goToLogin()
            } else {
                alert('Não foi possível cadastrar.');
            }
        }        
    }

    return (
        <>
        <HeaderTwo/>
        <RegisterContainer>
            <CustomImg src={LoginImg} alt="Médicos" />
            <FormDiv onSubmit={ handleRegister }>
                <Formulario>
                    <Label>Email da Instituição</Label>
                    <CustomInput type="text" 
                    placeholder="0632454567@senacrs.edu.br"
                    value = { user_email } 
                    onChange = { (e) => setUserEmail(e.target.value) }
                    />
                    <Label>Senha</Label>
                    <CustomInput type="password" 
                    placeholder="Enter your password"
                    value = { user_password } 
                    onChange = { (e) => setUserPassword(e.target.value) }
                    />
                    <Label>Confirmar senha</Label>
                    <CustomInput type="password" 
                    placeholder="Confirm your password"
                    value = { confirm_password } 
                    onChange = { (e) => setConfirmPassword(e.target.value) }
                    />
                    <DivArrow>
                        <ButtonRegister>Criar conta</ButtonRegister>
                    </DivArrow>
                    <Arrow>
                        <Link to='/login'><ArrowCustom src={ArrowImg} alt="Arrow"></ArrowCustom></Link>
                    </Arrow>
                </Formulario>
            </FormDiv>
        </RegisterContainer>
        </>
    );
};

export default Register;
