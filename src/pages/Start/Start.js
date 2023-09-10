import { BodyContainer, BodySection, ButtonDiv, CustomButton, ImageDiv, MainDiv, StyledLink, Subtitle, TextDiv, Title } from "./styled";
import startImg from '../../assets/startImg.svg'
import HeaderStart from "../../components/HeaderStart/HeaderStart";

function Start (){

  return (
    <>
      <BodySection>
      <HeaderStart />
        <BodyContainer>
            <MainDiv>
              <TextDiv>
                <Title>Find Your Balance</Title>
                <Subtitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Subtitle>
              </TextDiv>
                
              <ButtonDiv>
                <CustomButton><StyledLink to='/login'>Entrar</StyledLink></CustomButton>
              </ButtonDiv>
          
            </MainDiv>
            
            <ImageDiv>
              <img src={startImg} alt="Imagem" />
            </ImageDiv>
            
        </BodyContainer>
      </BodySection>
    </>
  );
};

export default Start;
