import LogoImg from '../../assets/logo.svg';
import NavIcon from '../../assets/menu.svg';
import { DivButton, DivLogo, DivMiddle, HeaderContainer, LogoImage, MenuCustom } from './styled';

function HeaderMain () {

  return (
    <>
      <HeaderContainer>
        <DivLogo>
          <LogoImage src={LogoImg} alt="Logo"/>
        </DivLogo>
        <DivMiddle></DivMiddle>
        <DivButton>
          <MenuCustom src={NavIcon} alt='Ícone da Nav'/>
        </DivButton>
      </HeaderContainer>
    </>
  );
};

export default HeaderMain;
