import { Form } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import { Button, Container, Input, Overlay } from "./styled";


function MedicalRecord (){
  return (
    <Container>
      <HeaderMain />
      <Overlay />
      <Form >
        <Input
          type="text"
          name="name"
          placeholder="Nome"

        />
        <Input
          type="text"
          name="contactNumber"
          placeholder="Número de Contato"

        />
        <Input
          type="text"
          name="gender"
          placeholder="Sexo"

        />
        <Input
          type="text"
          name="nationality"
          placeholder="Nacionalidade"

        />
        <Input
          type="date"
          name="birthDate"
          placeholder="Data de Nascimento"

        />
        <Input
          type="text"
          name="disease"
          placeholder="Doença"

        />
        <Input
          type="time"
          name="entryTime"
          placeholder="Horário de Entrada"

        />
        <Input
          type="date"
          name="entryDate"
          placeholder="Data de Entrada"

        />
        <Input
          type="date"
          name="exitDate"
          placeholder="Data de Saída"

        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
        
export default MedicalRecord;