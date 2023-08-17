import LogoImg from '../../assets/logo.svg'
import { CadastroButton, DivButton, DivLogo, DivMiddle, HeaderContainer, LogoImage } from './styled';

function Header () {

  return (
    <HeaderContainer>
      <DivLogo>
        <LogoImage src={LogoImg} alt="Logo"/>
      </DivLogo>
      <DivMiddle></DivMiddle>
      <DivButton>
        <CadastroButton>Cadastre-se</CadastroButton>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header;
