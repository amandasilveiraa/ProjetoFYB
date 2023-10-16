import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 2; /* Garante que o dropdown fique acima do botão */
`;

export const DropdownItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const MenuCustom = styled.img`
  width: 6vw;
  height: 6vh;
  cursor: pointer;
`