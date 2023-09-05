import LogoImg from '../../assets/logo.svg'
import { CadastroButton, DivButton, DivLogo, DivMiddle, HeaderContainer, LogoImage } from './styled';

function HeaderStart () {

  return (
    <>
      <HeaderContainer>
        <DivLogo>
          <LogoImage src={LogoImg} alt="Logo"/>
        </DivLogo>
        <DivMiddle></DivMiddle>
        <DivButton>
          <CadastroButton>Cadastre-se</CadastroButton>
        </DivButton>
      </HeaderContainer>
    </>
  );
};

export default HeaderStart;
