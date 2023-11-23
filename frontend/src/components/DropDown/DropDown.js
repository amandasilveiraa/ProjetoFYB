import React, { useState } from 'react';
import NavIcon from '../../assets/menu.svg';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownList, MenuCustom } from './styled';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption] = useState(null);

    const routes = {
        'Novo paciente': '/medicalRecord',
        'Visualizar registros': '/registerTable',
        'Visualizar gráficos': '/graphicMonth',
        'Visualizar histórico': '/historicTable',
        'Sair': '/sair',
      };
  
    const handleItemClick = (option) => {
        const route = routes[option];
        if (route) {
          window.location.href = route;
        }
      };
  
    return (
        <DropdownContainer>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                <MenuCustom src={NavIcon} alt='Ícone da Nav' />
                {selectedOption}
            </DropdownButton>
            <DropdownList open={isOpen}>
            {options.map((option) => (
                <DropdownItem key={option} onClick={() => handleItemClick(option)}>
                {option}
                </DropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>
    );
  };
  
  export default Dropdown;