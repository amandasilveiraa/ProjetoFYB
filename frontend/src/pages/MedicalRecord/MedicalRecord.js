import HeaderMain from "../../components/HeaderMain/HeaderMain";
import ImgFundo from "../../assets/fundoImg.jpg"
import { BodyContainer, DivInput, DivOverlay, FichaMedica, ImgCustom, InputCalendar, InputCustom, LabelCustom, Section, SelectCustom, SubmitCustom } from "./styled";
import { useState } from "react";

function MedicalRecord (){
    const [sexo, setSexo] = useState("");
    document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

    const handleSubmit = () => {
        const data = {
            sexo
        };
        console.log(data);
    }

  return (
      <Section>
          
          <HeaderMain />
          <BodyContainer>
            <ImgCustom src={ImgFundo} alt="Imagem de Fundo" />
              
            <DivOverlay >
                  
                <FichaMedica>
                      
                    <DivInput>
                          
                        <LabelCustom for="nome"> Nome do paciente </LabelCustom>
                        <InputCustom
                              type="text"
                              id="nome" required
                              value={nome}
                              onChange={(e) => setSexo(e.target.value)}
                              placeholder="Digite o nome do paciente"
                        />
                    </DivInput>
                    
                    <DivInput>
                        <LabelCustom for="contato"> Número de Contato </LabelCustom>
                        <InputCustom
                              type="text"
                              id="contato" required
                              value={contact}
                              onChange={(e) => setSexo(e.target.value)}
                              placeholder="Digite o contato com DDD"
                        />
                    </DivInput>

                    <DivInput>
                        <LabelCustom for="sexo"> Sexo </LabelCustom>
                          <SelectCustom
                              id="sexo" required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}>
                              <option value="">Selecione...</option>
                              <option value="feminino">Feminino</option>
                              <option value="masculino">Masculino</option>
                        </SelectCustom>
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="nacionalidade"> Nacionalidade </LabelCustom>
                        <InputCustom
                              type="text"
                              id="nacionalidade" required
                              value={nacionalidade}
                              onChange={(e) => setSexo(e.target.value)}
                              placeholder="Digite a nacionalidade do paciente"
                        />
                      </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="doenca"> Síndrome </LabelCustom>
                          <SelectCustom
                              id="doenca" required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}>
                              <option value="">Selecione...</option>
                              <option value="doencaSG">Síndrome gripal</option>
                              <option value="doencaSRAG">Síndrome respiratória aguda grave</option>
                        </SelectCustom>
                    </DivInput>

                    <DivInput>
                        <LabelCustom for="data-nascimento"> Data de Nascimento </LabelCustom>
                        <InputCalendar
                              type="date"
                              id="data-nascimento" required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}
                        />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="time-entrada"> Horário de Entrada </LabelCustom>
                          <InputCalendar
                              type="time"
                              id="time-entrada"
                              required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}
                          />
                    </DivInput>
                      
                    <DivInput>
                    <LabelCustom for="data-entrada"> Data de Entrada </LabelCustom>
                          <InputCalendar
                              type="date"
                              id="data-entrada" required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}
                          />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="data-saida"> Data de Saída </LabelCustom>
                          <InputCalendar
                              type="date"
                              id="data-saida" required
                              value={sexo}
                              onChange={(e) => setSexo(e.target.value)}
                          />
                    </DivInput>
                      
                    <SubmitCustom
                        onClick={handleSubmit}>CADASTRAR</SubmitCustom>
                      
                </FichaMedica>
            </DivOverlay>
        </BodyContainer>
</Section>
  );
};
        
export default MedicalRecord;