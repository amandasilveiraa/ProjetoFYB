import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: blue;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 128, 0, 0.7); /* Cor verde opaca */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  grid-column: span 3;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;