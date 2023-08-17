import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivLogo = styled.div`
  order: 2;
  margin-left: 4vw;
`;

export const LogoImage = styled.img`
  width: 15vw;
  height: 15vh;
`;

export const DivMiddle = styled.div`
  order: 2
`

export const DivButton = styled.div`
  order: 3;
  margin-right: 4vw;
`

export const CadastroButton = styled.button`
  color: black;
  border: 1px solid #017257;;
  padding: 15px 15px 14px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;
`;