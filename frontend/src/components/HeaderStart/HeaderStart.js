import LogoImg from '../../assets/logo.svg'
import { CadastroButton, DivButton, DivLogo, DivMiddle, HeaderContainer, LogoImage, StyledLink } from './styled';

function HeaderStart () {

  return (
    <>
      <HeaderContainer>
        <DivLogo>
          <LogoImage src={LogoImg} alt="Logo"/>
        </DivLogo>
        <DivMiddle></DivMiddle>
        <DivButton>
          <CadastroButton><StyledLink to='/register'>Cadastre-se</StyledLink></CadastroButton>
        </DivButton>
      </HeaderContainer>
    </>
  );
};

export default HeaderStart;
