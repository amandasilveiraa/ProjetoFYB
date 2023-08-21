import styled from 'styled-components';

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

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3vw;
  padding-right: 7vw;
  padding-top: 9vh;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const CustomInput = styled.input`
  background-color: #0f8a6d;
  opacity: 25%;
  border: none;
  border-radius: 8px;
  height: 7vh;
`

export const Button = styled.button`
  background-color: #017257;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 20vw;
`;

export const Frase = styled.p`
  margin-top: 5vh;
`;

export const Link = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #0BB28A;
  font-size: 16px;

  &:hover {
    font-weight: bold;
  }
`