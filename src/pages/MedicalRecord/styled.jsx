import styled from 'styled-components';

export const Section = styled.section`
`;

export const BodyContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const ImgCustom = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`;

export const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.5); /* Verde opaco */
`;

export const FichaMedica = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  opacity: 0.8;
`;

export const DivInput = styled.div`

`

export const LabelCustom = styled.label`
  font-weight: bold;
  display: block;
`

export const InputCustom = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
`

export const SelectCustom = styled.select`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
`

export const SubmitCustom = styled.button`
  margin-top: 10px;
  background-color: #008000; /* Verde */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`