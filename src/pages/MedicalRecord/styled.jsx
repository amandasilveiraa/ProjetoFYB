import styled from 'styled-components';

export const Section = styled.section`
`;

export const BodyContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const ImgCustom = styled.img`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0BB28A40;
`;

export const FichaMedica = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60vw;
  height: 50vh;
  margin-top: 20vh;
  margin-left: 20vw;
  background-color: #EDF0FA;
`;

export const DivInput = styled.div`
  margin-left: 2vw;
  text-align: left;
  justify-content: center;
  align-items: center;
`

export const LabelCustom = styled.label`
  font-weight: semi-bold;
  display: block;
  text-align: left;
`

export const InputCustom = styled.input`
  padding: 1vh;
  width: 15vw;
  background-color: #01725740;
  opacity: 0.8;
  border: none;
  color: black;
`

export const SelectCustom = styled.select`
  padding: 1vh;
  width: 15vw;
  background-color: #01725740;
  opacity: 0.8;
  border: none;
  color: black;
`

export const InputCalendar = styled.input`
  padding: 1vh;
  width: 15vw;
  background-color: #01725740;
  opacity: 0.8;
  border: none;
  color: black;

`

export const SubmitCustom = styled.button`
  background-color: #017257;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  height: 5vh;
  width: 30vh;
  margin-left: 2vw;

`