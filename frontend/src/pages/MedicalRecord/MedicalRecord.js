import HeaderMain from "../../components/HeaderMain/HeaderMain";
import ImgFundo from "../../assets/fundoImg.jpg"
import { BodyContainer, DivInput, DivOverlay, FichaMedica, ImgCustom, InputCalendar, InputCustom, LabelCustom, Section, SelectCustom, SubmitCustom } from "./styled";
import { useState } from "react";
import {api} from '../../services/api'

function MedicalRecord (){

    document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
    const [nome_paciente, setNome] = useState("");
    const [numero_contato, setContato] = useState("");
    const [sexo, setSexo] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [sindrome, setSindrome] = useState("");
    const [data_nascimento, setNascimento] = useState("");
    const [horario_entrada, setHorarioEntrada] = useState("");
    const [data_entrada, setDataEntrada] = useState("");
    const [data_saida, setSaida] = useState("");

    const registerPatient = async (e) => {
        e.preventDefault();
        const data = {
            nome_paciente,
            numero_contato,
            nacionalidade,
            sindrome,
            sexo,
            horario_entrada,
            data_entrada,
            data_saida
        };

        console.log(data);

        const response = await api.post('/patient/create', data);

        console.log(response.data);

        if(response.data.success) {
            alert('Paciente cadastrado!');
        } else {
            alert('Não foi possível cadastrar.');
        }
    }

  return (
      <Section>
          
          <HeaderMain />
          <BodyContainer>
            <ImgCustom src={ImgFundo} alt="Imagem de Fundo" />
              
            <DivOverlay >
                  
                <FichaMedica>
                      
                    <DivInput>
                          
                        <LabelCustom for="nome_paciente"> Nome do paciente </LabelCustom>
                        <InputCustom
                              type="text"
                              id="nome_paciente" required
                              value={nome_paciente}
                              onChange={(e) => setNome(e.target.value)}
                              placeholder="Digite o nome do paciente"
                        />
                    </DivInput>
                    
                    <DivInput>
                        <LabelCustom for="contato"> Número de Contato </LabelCustom>
                        <InputCustom
                              type="text"
                              id="contato" required
                              value={numero_contato}
                              onChange={(e) => setContato(e.target.value)}
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
                              onChange={(e) => setNacionalidade(e.target.value)}
                              placeholder="Digite a nacionalidade do paciente"
                        />
                      </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="sindrome"> Síndrome </LabelCustom>
                          <SelectCustom
                              id="sindorme" required
                              value={sindrome}
                              onChange={(e) => setSindrome(e.target.value)}>
                              <option value="">Selecione...</option>
                              <option value="doencaSG">Síndrome gripal</option>
                              <option value="doencaSRAG">Síndrome respiratória aguda grave</option>
                        </SelectCustom>
                    </DivInput>

                    <DivInput>
                        <LabelCustom for="data_nascimento"> Data de Nascimento </LabelCustom>
                        <InputCalendar
                              type="date"
                              id="data_nascimento" required
                              value={data_nascimento}
                              onChange={(e) => setNascimento(e.target.value)}
                        />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="horario_entrada"> Horário de Entrada </LabelCustom>
                          <InputCalendar
                              type="time"
                              id="horario_entrada"
                              required
                              value={horario_entrada}
                              onChange={(e) => setHorarioEntrada(e.target.value)}
                          />
                    </DivInput>
                      
                    <DivInput>
                    <LabelCustom for="data_entrada"> Data de Entrada </LabelCustom>
                          <InputCalendar
                              type="date"
                              id="data_entrada" required
                              value={data_entrada}
                              onChange={(e) => setDataEntrada(e.target.value)}
                          />
                    </DivInput>
                      
                    <DivInput>
                        <LabelCustom for="data_saida"> Data de Saída </LabelCustom>
                          <InputCalendar
                              type="date"
                              id="data_saida" required
                              value={data_saida}
                              onChange={(e) => setSaida(e.target.value)}
                          />
                    </DivInput>
                      
                    <SubmitCustom onClick={registerPatient}>CADASTRAR</SubmitCustom>
                      
                </FichaMedica>
            </DivOverlay>
        </BodyContainer>
</Section>
  );
};
        
export default MedicalRecord;