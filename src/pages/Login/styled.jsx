import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: semi-bold;
`;

export const LoginContainer = styled.div`
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
  padding-top: 9vh;
  gap: 10px;
`;

export const CustomLabel = styled.label`
  font-weight: regular;
  color: black;
`;

export const CustomInput = styled.input`
  background-color: #0f8a6d;
  border: none;
  border-radius: 8px;
  height: 7vh;

  &::placeholder{
    color: black;
    padding: 10px;
  }

`

export const Button = styled.button`
  background-color: #017257;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 15vw;
  margin-left: 10vw;
`;

export const Frase = styled.p`
  padding-top: 1vh;
  padding-bottom: 5vh;
`;

export const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #0BB28A;
  font-size: 16px;
  align-items: center;

  &:hover {
    font-weight: bold;
  }
`