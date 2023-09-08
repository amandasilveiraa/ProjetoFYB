import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: semi-bold;
`;

export const BodySection = styled.section`
  background-color: #EDF0FA;
  height: 100vh;
`

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-left: 10vw;
`

export const TextDiv = styled.div`
  justify-content: left;
  align-items: left;
  gap: 1vh;
`;

export const Title = styled.h1`
  font-family:  Archivo Black;
  font-size: 50px;
  color: #017257;
`

export const Subtitle = styled.p`
  row-count: 3;
  font-family: Nunito Sans;
  font-size: 20px;
`

export const ButtonDiv = styled.div`
`

export const CustomButton = styled.button`
  color: black;
  border: 1px solid #017257;;
  padding: 2vh 2vw;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;
`;


export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6vh;
  margin-right: 10vw;
`;
