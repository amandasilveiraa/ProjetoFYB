import { BodyContainer, ButtonDiv, CustomButton, ImageDiv, MainDiv, Subtitle, TextDiv, Title } from "./styled";
import startImg from '../../assets/startImg.svg'
import HeaderStart from "../../components/HeaderStart/HeaderStart";


function Start (){
  return (
    <>
    <HeaderStart/>
      <BodyContainer>
        <MainDiv>
          <TextDiv>
            <Title>Find Your Balance</Title>
            <Subtitle>Lorem</Subtitle>
          </TextDiv>
          <ButtonDiv>
            <CustomButton>Entrar</CustomButton>
          </ButtonDiv>
        </MainDiv>
        <ImageDiv>
          <img src={startImg} alt="Imagem" />
        </ImageDiv>
      </BodyContainer>
    </>
  );
};

export default Start;
