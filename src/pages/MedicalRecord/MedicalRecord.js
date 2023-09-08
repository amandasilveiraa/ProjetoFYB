import HeaderMain from "../../components/HeaderMain/HeaderMain";
import ImgFundo from "../../assets/fundoImg.jpg"
import { BodyContainer, DivInput, DivOverlay, FichaMedica, ImgCustom, InputCustom, LabelCustom, Section, SelectCustom, SubmitCustom } from "./styled";

function MedicalRecord (){
  return (
    <Section>
      <HeaderMain />
      <BodyContainer>
        <ImgCustom src={ImgFundo} alt="Imagem de Fundo" />
        <DivOverlay />
        <FichaMedica>
            <DivInput>
                <LabelCustom for="nome">Nome:</LabelCustom>
                <InputCustom type="text" id="nome" required />
            </DivInput>
            <DivInput>
                <LabelCustom for="contato">Número de Contato:</LabelCustom>
                <InputCustom type="text" id="contato" required />
            </DivInput>
            <DivInput>
                <LabelCustom for="doenca">Doença:</LabelCustom>
                <SelectCustom id="doenca" required>
                    <option value="doenca1">Doença 1</option>
                    <option value="doenca2">Doença 2</option>
                </SelectCustom>
            </DivInput>
            <DivInput>
                <LabelCustom for="data-nascimento">Data de Nascimento: </LabelCustom>
                <input type="date" id="data-nascimento" required />
            </DivInput>
            <DivInput>
                <LabelCustom for="data-entrada">Data de Entrada:</LabelCustom>
                <input type="date" id="data-entrada" required />
            </DivInput>
            <DivInput>
                <LabelCustom for="data-saida">Data de Saída:</LabelCustom>
                <input type="date" id="data-saida" required />
            </DivInput>
            <SubmitCustom type="submit" value="Cadastrar" />
        </FichaMedica>
    </BodyContainer>
    </Section>
  );
};
        
export default MedicalRecord;