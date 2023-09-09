import LogoImg from '../../assets/logo.svg';
import NavIcon from '../../assets/menu.svg';
import { CustomButton, DivLogo, DivMiddle, HeaderContainer, LogoImage, MenuCustom } from './styled';

function HeaderMain () {

  return (
    <>
      <HeaderContainer>
        <DivLogo>
          <LogoImage src={LogoImg} alt="Logo"/>
        </DivLogo>
        <DivMiddle></DivMiddle>
        <CustomButton>
          <MenuCustom src={NavIcon} alt='Ícone da Nav'/>
        </CustomButton>
      </HeaderContainer>
    </>
  );
};

export default HeaderMain;
