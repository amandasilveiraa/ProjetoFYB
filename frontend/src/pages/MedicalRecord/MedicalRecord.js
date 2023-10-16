import HeaderMain from "../../components/HeaderMain/HeaderMain";
import ImgFundo from "../../assets/fundoImg.jpg"
import { BodyContainer, DivInput, DivOverlay, FichaMedica, ImgCustom, InputCalendar, InputCustom, LabelCustom, Section, SelectCustom, SubmitCustom } from "./styled";

function MedicalRecord (){
    document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

  return (
<Section>
    <HeaderMain />
        <BodyContainer>
            <ImgCustom src={ImgFundo} alt="Imagem de Fundo" />
            <DivOverlay >
                <FichaMedica>
                    <DivInput>
                        <LabelCustom
                        for="nome">Nome do paciente
                        </LabelCustom>
                        <InputCustom
                        type="text" 
                        id="nome" required placeholder="Digite o nome do paciente" />
                    </DivInput>
                    
                    <DivInput>
                        <LabelCustom
                        for="contato">Número de Contato</LabelCustom>
                        <InputCustom
                        type="text" id="contato" required placeholder="Digite o contato com DDD"/>
                    </DivInput>

                    <DivInput>
                        <LabelCustom for="sexo">Sexo</LabelCustom>
                        <SelectCustom id="sexo" required>
                        <option value="sexoF">Feminino</option>
                        <option value="sexoM">Masculino</option>
                        </SelectCustom>
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom
                        for="contato">Nacionalidade</LabelCustom>
                        <InputCustom
                              type="text"
                              id="contato" required
                              placeholder="Digite a nacionalidade" />
                      </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="doenca">Síndrome</LabelCustom>
                        <SelectCustom id="doenca" required>
                        <option value="doencaSG">Síndrome gripal</option>
                        <option value="doencaSRAG">Síndrome respiratória aguda grave</option>
                        </SelectCustom>
                    </DivInput>

                    <DivInput>
                        <LabelCustom
                        for="data-nascimento">Data de Nascimento</LabelCustom>
                        <InputCalendar
                        type="date" id="data-nascimento" required />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom
                        for="time-entrada">Horário de Entrada</LabelCustom>
                        <InputCalendar
                        type="time" id="time-entrada" required />
                    </DivInput>
                      
                    <DivInput>
                    <LabelCustom
                        for="data-entrada">Data de Entrada</LabelCustom>
                        <InputCalendar
                        type="date" id="data-entrada" required />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom
                        for="data-saida">Data de Saída</LabelCustom>
                        <InputCalendar type="date"
                        id="data-saida" required />
                    </DivInput>
                      
                    <SubmitCustom
                        type="submit" value="Cadastrar">CADASTRAR</SubmitCustom>
                      
                </FichaMedica>
            </DivOverlay>
        </BodyContainer>
</Section>
  );
};
        
export default MedicalRecord;