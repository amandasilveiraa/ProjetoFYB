import LogoImg from '../../assets/logo.svg'
import { DivButton, DivLogo, DivMiddle, HeaderContainer, LogoImage } from './styled';

function HeaderTwo () {

  return (
    <HeaderContainer>
      <DivLogo>
        <LogoImage src={LogoImg} alt="Logo"/>
      </DivLogo>
      <DivMiddle></DivMiddle>
      <DivButton>
      </DivButton>
    </HeaderContainer>
  );
};

export default HeaderTwo;
