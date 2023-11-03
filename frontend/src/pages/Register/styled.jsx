import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: semi-bold;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
  background-color: #b7dfd6;
`;

export const CustomImg = styled.img`
  height: 50vh;
  width: 40vw;
  margin-left: 8vw;
  margin-top: 8vw;
`

export const FormDiv = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 35vw;
  margin-right: 8vw;
  margin-top: 5vw;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 6vh;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: black;
`;

export const CustomInput = styled.input`
  background-color: #0f8a6d;
  border: none;
  border-radius: 8px;
  height: 7vh;
  padding: 10px; 
  
  &::placeholder{
    color: black;
    opacity: 50%;
  }

`;

export const ButtonRegister = styled.button`
  background-color: #017257;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 15vw;
`;

export const Frase = styled.p`
  margin-top: 5vh;
`;

export const DivArrow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12vw;
`;

export const Arrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-top: 1vh;
`;

export const ArrowCustom = styled.img`
  height: 4vh;
  width: 3vw;
  background-color: none;
`;