import LogoImg from '../../assets/logo.svg';
import { CustomButton, DivLogo, DivMiddle, HeaderContainer, LogoImage } from './styled';
import Dropdown from '../DropDown/DropDown';
// import React, { useState } from 'react';

function HeaderMain() {
  
  const options = ['Novo paciente', 'Visualizar registros', 'Visualizar relatórios', 'Visualizar histórico', 'Sair'];

  const routes = {
    'Novo paciente': '/medicalRecord',
    'Visualizar registros': '/registerTable',
    'Visualizar relatórios': '/graphicMonth',
    'Visualizar histórico': '/historicTable',
    'Sair': '/start',
  };

  return (
    <>
      <HeaderContainer>
        <DivLogo>
          <LogoImage src={LogoImg} alt="Logo"/>
        </DivLogo>
        <DivMiddle></DivMiddle>
        <CustomButton >
          <Dropdown options={options} routes={routes} />
        </CustomButton>
      </HeaderContainer>
    </>
  );
};


export default HeaderMain;
